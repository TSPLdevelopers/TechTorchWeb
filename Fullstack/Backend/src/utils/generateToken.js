const jwt = require("jsonwebtoken");

const generateToken = (adminId) =>
  jwt.sign({ id: adminId }, process.env.JWT_SECRET, { expiresIn: "7d" });

// Short-lived token proving the OTP was verified (used by reset-password)
const generateResetToken = (adminId) =>
  jwt.sign({ id: adminId, purpose: "reset" }, process.env.JWT_SECRET, { expiresIn: "10m" });

const cookieOptions = () => ({
  httpOnly: true,
  secure: process.env.NODE_ENV === "production",
  sameSite: "lax",
});

module.exports = { generateToken, generateResetToken, cookieOptions };