
const jwt = require("jsonwebtoken");
const Admin = require("../models/Admin.model");
const Candidate = require("../models/Candidate.model");

const protect = async (req, res, next) => {
  try {
    const token = req.cookies?.token;

    if (!token) {
      return res.status(401).json({
        success: false,
        message: "Authentication required. Please login.",
      });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // Reset-password token cannot be used as a login session
    if (decoded.purpose || !decoded.id || !decoded.accountType) {
      return res.status(401).json({
        success: false,
        message: "Invalid session token.",
      });
    }

    if (decoded.accountType === "candidate") {
      const candidate = await Candidate.findById(decoded.id)
        .select("-password -otp -otpExpiry");

      if (!candidate || candidate.status !== "active") {
        return res.status(401).json({
          success: false,
          message: "Candidate account unavailable.",
        });
      }

      req.candidate = candidate;
      req.accountType = "candidate";
      req.userId = candidate._id;

    } else if (decoded.accountType === "admin") {
      const admin = await Admin.findById(decoded.id)
        .select("-password -otp -otpExpiry");

      if (!admin || admin.status !== "active") {
        return res.status(401).json({
          success: false,
          message: "Admin account unavailable.",
        });
      }

      req.admin = admin;
      req.accountType = "admin";
      req.userId = admin._id;

    } else {
      return res.status(401).json({
        success: false,
        message: "Invalid account type.",
      });
    }

    next();
  } catch (error) {
    if (error.name === "JsonWebTokenError" ||
        error.name === "TokenExpiredError") {
      return res.status(401).json({
        success: false,
        message: "Invalid or expired token. Please login again.",
      });
    }

    next(error);
  }
};

module.exports = protect;
