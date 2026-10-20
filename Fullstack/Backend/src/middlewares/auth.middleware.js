const jwt = require("jsonwebtoken");
const Admin = require("../models/Admin.model");
const Candidate = require("../models/Candidate.model");

const unauthorized = (res, message = "Authentication required", code = 401) =>
  res.status(code).json({ success: false, message });

const readToken = (req) => {
  const token = req.cookies?.token;
  if (!token) return null;
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    return decoded.purpose ? null : decoded; // reset tokens are never valid sessions
  } catch {
    return null;
  }
};

// ---- ADMIN ONLY (used by every existing admin route) ----
// Verifies the cookie token AND loads the admin from the database,
// so deleted / inactive admins are locked out immediately.
const authMiddleware = async (req, res, next) => {
  try {
    const decoded = readToken(req);
    if (!decoded) return unauthorized(res, "Authentication required");

    if (decoded.accountType === "candidate") {
      return unauthorized(res, "Admin access required", 403);
    }

    const admin = await Admin.findById(decoded.id).select("-password -otp -otpExpiry");
    if (!admin) return unauthorized(res, "Admin no longer exists");
    if (admin.status !== "active") return unauthorized(res, "Admin account is inactive", 403);

    req.admin = admin;
    next();
  } catch {
    return unauthorized(res, "Invalid or expired token");
  }
};

const requireSuperadmin = (req, res, next) => {
  if (req.admin?.role !== "superadmin") {
    return unauthorized(res, "Superadmin access required", 403);
  }
  next();
};

// ---- CANDIDATE ONLY ----
const candidateAuth = async (req, res, next) => {
  try {
    const decoded = readToken(req);
    if (!decoded) return unauthorized(res, "Please sign in to continue");
    if (decoded.accountType !== "candidate") {
      return unauthorized(res, "Candidate account required", 403);
    }

    const candidate = await Candidate.findById(decoded.id).select("-password");
    if (!candidate) return unauthorized(res, "Account no longer exists");
    if (candidate.status !== "active") return unauthorized(res, "Account is inactive", 403);

    req.candidate = candidate;
    next();
  } catch {
    return unauthorized(res, "Invalid or expired token");
  }
};

// ---- EITHER (admin or candidate) – used by /auth/me and logout ----
const anyAuth = async (req, res, next) => {
  try {
    const decoded = readToken(req);
    if (!decoded) return unauthorized(res, "Authentication required");

    if (decoded.accountType === "candidate") {
      const candidate = await Candidate.findById(decoded.id).select("-password");
      if (!candidate || candidate.status !== "active") return unauthorized(res, "Account unavailable");
      req.candidate = candidate;
      req.accountType = "candidate";
    } else {
      const admin = await Admin.findById(decoded.id).select("-password -otp -otpExpiry");
      if (!admin || admin.status !== "active") return unauthorized(res, "Account unavailable");
      req.admin = admin;
      req.accountType = "admin";
    }
    next();
  } catch {
    return unauthorized(res, "Invalid or expired token");
  }
};

// ---- OPTIONAL (public routes that behave differently when signed in) ----
const optionalAuth = async (req, res, next) => {
  try {
    const decoded = readToken(req);
    if (decoded?.accountType === "candidate") {
      req.candidate = await Candidate.findById(decoded.id).select("-password");
    } else if (decoded) {
      req.admin = await Admin.findById(decoded.id).select("-password -otp -otpExpiry");
    }
  } catch {
    /* treat as signed-out */
  }
  next();
};

module.exports = authMiddleware;
module.exports.requireSuperadmin = requireSuperadmin;
module.exports.candidateAuth = candidateAuth;
module.exports.anyAuth = anyAuth;
module.exports.optionalAuth = optionalAuth;