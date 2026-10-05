const jwt = require("jsonwebtoken");
const Admin = require("../models/Admin.model");

// Verifies the cookie token AND loads the admin from the database,
// so deleted / inactive admins are locked out immediately.
const authMiddleware = async (req, res, next) => {
  const token = req.cookies?.token;

  if (!token) {
    return res.status(401).json({ success: false, message: "Authentication required" });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    if (decoded.purpose) {
      return res.status(401).json({ success: false, message: "Invalid token" });
    }

    const admin = await Admin.findById(decoded.id).select("-password -otp -otpExpiry");

    if (!admin) {
      return res.status(401).json({ success: false, message: "Admin no longer exists" });
    }

    if (admin.status !== "active") {
      return res.status(403).json({ success: false, message: "Admin account is inactive" });
    }

    req.admin = admin;
    next();
  } catch (error) {
    return res.status(401).json({ success: false, message: "Invalid or expired token" });
  }
};

const requireSuperadmin = (req, res, next) => {
  if (req.admin?.role !== "superadmin") {
    return res.status(403).json({ success: false, message: "Superadmin access required" });
  }
  next();
};

module.exports = authMiddleware;
module.exports.requireSuperadmin = requireSuperadmin;