const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const mongoose = require("mongoose");
const Admin = require("../models/Admin.model");
const asyncHandler = require("../utils/asyncHandler");
const {
  generateToken,
  generateResetToken,
  cookieOptions,
} = require("../utils/generateToken");
const { sendEmail } = require("../services/emailService.js");

const generateOtp = () => Math.floor(100000 + Math.random() * 900000).toString();

const publicAdmin = (a) => ({
  _id: a._id,
  name: a.name,
  email: a.email,
  role: a.role,
  status: a.status,
  lastLogin: a.lastLogin,
  createdAt: a.createdAt,
});

const fail = (res, code, message) =>
  res.status(code).json({ success: false, message });

// ================= REGISTER =================
const registerAdmin = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) return fail(res, 400, "All fields are required");
  if (password.length < 6) return fail(res, 400, "Password must be at least 6 characters");

  const existing = await Admin.findOne({ email: email.toLowerCase() });
  if (existing) return fail(res, 409, "Admin already exists with this email");

  // The very first account becomes the superadmin
  const isFirst = (await Admin.countDocuments()) === 0;

  const hashed = await bcrypt.hash(password, await bcrypt.genSalt(10));

  const saved = await Admin.create({
    name: name.trim(),
    email: email.toLowerCase(),
    password: hashed,
    role: isFirst ? "superadmin" : "admin",
  });

  return res.status(201).json({
    success: true,
    message: "Account created successfully",
    data: publicAdmin(saved),
  });
});

// ================= LOGIN =================
const loginAdmin = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) return fail(res, 400, "Email and password are required");

  const admin = await Admin.findOne({ email: email.toLowerCase() });
  if (!admin) return fail(res, 401, "Invalid email or password");

  const isMatch = await bcrypt.compare(password, admin.password);
  if (!isMatch) return fail(res, 401, "Invalid email or password");

  if (admin.status !== "active") return fail(res, 403, "Admin account is inactive");

  admin.lastLogin = new Date();
  await admin.save();

  res.cookie("token", generateToken(admin._id), {
    ...cookieOptions(),
    maxAge: 7 * 24 * 60 * 60 * 1000,
  });

  return res.status(200).json({
    success: true,
    message: "Login successful",
    data: publicAdmin(admin),
  });
});
  

// ================= FORGOT PASSWORD =================
const forgotPassword = asyncHandler(async (req, res) => {
  const { email } = req.body;
  if (!email) return fail(res, 400, "Email is required");

  const admin = await Admin.findOne({ email: email.toLowerCase() });
  if (!admin) return fail(res, 404, "Admin not found with this email");

  const otp = generateOtp();
  admin.otp = await bcrypt.hash(otp, 8); // stored hashed
  admin.otpExpiry = new Date(Date.now() + 10 * 60 * 1000);
  await admin.save();

  await sendEmail({
    to: admin.email,
    subject: "TechTorch Admin Password Reset",
    text: `Your TechTorch password reset code is ${otp}. This code will expire in 10 minutes.`,
  });

  return res.status(200).json({ success: true, message: "Reset code sent to your registered email" });
});

// ================= VERIFY OTP =================
const verifyOTP = asyncHandler(async (req, res) => {
  const { email, otp } = req.body;
  if (!email || !otp) return fail(res, 400, "Email and OTP are required");

  const admin = await Admin.findOne({ email: email.toLowerCase() });
  if (!admin) return fail(res, 404, "Admin not found with this email");

  if (!admin.otp || !admin.otpExpiry) {
    return fail(res, 400, "OTP not found. Please request a new OTP");
  }

  if (new Date() > admin.otpExpiry) {
    admin.otp = null;
    admin.otpExpiry = null;
    await admin.save();
    return fail(res, 400, "OTP has expired. Please request a new OTP");
  }

  const ok = await bcrypt.compare(otp.toString(), admin.otp);
  if (!ok) return fail(res, 400, "Invalid OTP");

  admin.otp = null;
  admin.otpExpiry = null;
  await admin.save();

  return res.status(200).json({
    success: true,
    message: "OTP verified successfully",
    resetToken: generateResetToken(admin._id),
  });
});

// ================= RESET PASSWORD =================
// Now requires the resetToken returned by verify-otp
// (before, anyone knowing an admin email could reset the password).
const resetPassword = asyncHandler(async (req, res) => {
  const { email, newPassword, resetToken } = req.body;

  if (!email || !newPassword || !resetToken) {
    return fail(res, 400, "Email, new password and reset token are required");
  }
  if (newPassword.length < 6) return fail(res, 400, "Password must be at least 6 characters");

  let decoded;
  try {
    decoded = jwt.verify(resetToken, process.env.JWT_SECRET);
  } catch {
    return fail(res, 401, "Reset session expired. Please start again");
  }
  if (decoded.purpose !== "reset") return fail(res, 401, "Invalid reset token");

  const admin = await Admin.findOne({ email: email.toLowerCase() });
  if (!admin || String(admin._id) !== String(decoded.id)) {
    return fail(res, 404, "Admin not found");
  }

  admin.password = await bcrypt.hash(newPassword, await bcrypt.genSalt(10));
  await admin.save();

  return res.status(200).json({ success: true, message: "Password reset successfully" });
});

// ================= LOGOUT =================
const logoutAdmin = asyncHandler(async (req, res) => {
  res.clearCookie("token", cookieOptions());
  return res.status(200).json({ success: true, message: "Logged out successfully" });
});
// ================= GET ADMIN PROFILE =================
const getAdminProfile = asyncHandler(async (req, res) => {
  const adminId = req.admin?.id || req.admin?._id;

  if (!adminId) {
    return fail(res, 401, "Unauthorized");
  }

  const admin = await Admin.findById(adminId).select("-password -otp -otpExpiry");

  if (!admin) {
    return fail(res, 404, "Admin not found");
  }

  return res.status(200).json({
    success: true,
    data: publicAdmin(admin),
  });
});

module.exports = {
  registerAdmin,
  loginAdmin,
  forgotPassword,
  verifyOTP,
  resetPassword,
  logoutAdmin,
  getAdminProfile,
};