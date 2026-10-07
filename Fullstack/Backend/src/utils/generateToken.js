const jwt = require("jsonwebtoken");

// role: "admin" | "superadmin" | "candidate"  (admin tokens keep working without a role)
const generateToken = (id, accountType = "admin") =>
  jwt.sign({ id, accountType }, process.env.JWT_SECRET, { expiresIn: "7d" });

// Short-lived token proving the OTP was verified (used by reset-password)
const generateResetToken = (adminId) =>
  jwt.sign({ id: adminId, purpose: "reset" }, process.env.JWT_SECRET, { expiresIn: "10m" });

// If the frontend and backend are on different domains in production, set
// COOKIE_SAMESITE=none (requires HTTPS). Local development works with "lax".
const cookieOptions = () => {
  const isProd = process.env.NODE_ENV === "production";
  const sameSite = (process.env.COOKIE_SAMESITE || "lax").toLowerCase();
  return {
    httpOnly: true,
    secure: isProd || sameSite === "none",
    sameSite,
  };
};

module.exports = { generateToken, generateResetToken, cookieOptions };