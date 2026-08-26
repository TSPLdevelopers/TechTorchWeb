
const bcrypt = require("bcryptjs");
const mongoose = require("mongoose");
const Admin = require("../models/Admin.model");
const asyncHandler = require("../utils/asyncHandler");
const { generateToken } = require("../utils/generateToken");
const { sendEmail } = require("../services/emailService.js");

// ================= GENERATE OTP =================

const generateOtp = () => {
  return Math.floor(100000 + Math.random() * 900000).toString();
};

// ================= REGISTER ADMIN =================

const registerAdmin = asyncHandler(async (req, res) => {
  const { name, contact, emergency, email, password } = req.body;

  if (!name || !contact || !emergency || !email || !password) {
    return res.status(400).json({
      success: false,
      message: "All fields are required",
    });
  }

  const existingAdmin = await Admin.findOne({
    email: email.toLowerCase(),
  });

  if (existingAdmin) {
    return res.status(409).json({
      success: false,
      message: "Admin already exists with this email",
    });
  }

  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  const newAdmin = new Admin({
    name,
    contact,
    emergency,
    email: email.toLowerCase(),
    password: hashedPassword,
  });

  const savedAdmin = await newAdmin.save();

  return res.status(201).json({
    success: true,
    data: {
      _id: savedAdmin._id,
      contact: savedAdmin.contact,
      emergency: savedAdmin.emergency,
      email: savedAdmin.email,
      activeStatus: savedAdmin.activeStatus,
    },
  });
});

// ================= LOGIN ADMIN =================

const loginAdmin = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({
      success: false,
      message: "Email and password are required",
    });
  }

  const admin = await Admin.findOne({
    email: email.toLowerCase(),
  });

  if (!admin) {
    return res.status(401).json({
      success: false,
      message: "Invalid email or password",
    });
  }

  if (!admin.activeStatus) {
    return res.status(403).json({
      success: false,
      message: "Admin account is inactive",
    });
  }

  const isMatch = await bcrypt.compare(password, admin.password);

  if (!isMatch) {
    return res.status(401).json({
      success: false,
      message: "Invalid email or password",
    });
  }

  const token = generateToken(admin._id);

  res.cookie("token", token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    maxAge: 7 * 24 * 60 * 60 * 1000,
  });

  return res.status(200).json({
    success: true,
    data: {
      _id: admin._id,
      contact: admin.contact,
      emergency: admin.emergency,
      email: admin.email,
      activeStatus: admin.activeStatus,
    },
  });
});

// ================= FORGOT PASSWORD =================

const forgotPassword = asyncHandler(async (req, res) => {
  const { email } = req.body;

  if (!email) {
    return res.status(400).json({
      success: false,
      message: "Email is required",
    });
  }

  const admin = await Admin.findOne({
    email: email.toLowerCase(),
  });

  if (!admin) {
    return res.status(404).json({
      success: false,
      message: "Admin not found with this email",
    });
  }

  // Generate a 6-digit OTP
  const otp = generateOtp();

  // Save OTP and expiry
  admin.otp = otp;

  admin.otpExpiry = new Date(
    Date.now() + 10 * 60 * 1000
  );

  await admin.save();

  // Send OTP to registered email
  await sendEmail({
    to: admin.email,
    subject: "TechTorch Admin Password Reset",
    text: `Your TechTorch password reset code is ${otp}. This code will expire in 10 minutes.`,
  });

  return res.status(200).json({
    success: true,
    message: "Reset code sent to your registered email",
  });
});

// ================= VERIFY OTP =================

const verifyOTP = asyncHandler(async (req, res) => {
  const { email, otp } = req.body;

  if (!email || !otp) {
    return res.status(400).json({
      success: false,
      message: "Email and OTP are required",
    });
  }

  const admin = await Admin.findOne({
    email: email.toLowerCase(),
  });

  if (!admin) {
    return res.status(404).json({
      success: false,
      message: "Admin not found with this email",
    });
  }

  // Check whether OTP exists
  if (!admin.otp || !admin.otpExpiry) {
    return res.status(400).json({
      success: false,
      message: "OTP not found. Please request a new OTP",
    });
  }

  // Check OTP expiry
  if (new Date() > admin.otpExpiry) {
    admin.otp = null;
    admin.otpExpiry = null;

    await admin.save();

    return res.status(400).json({
      success: false,
      message: "OTP has expired. Please request a new OTP",
    });
  }

  // Check OTP
  if (admin.otp !== otp.toString()) {
    return res.status(400).json({
      success: false,
      message: "Invalid OTP",
    });
  }

  // OTP verified successfully
  admin.otp = null;
  admin.otpExpiry = null;

  await admin.save();

  return res.status(200).json({
    success: true,
    message: "OTP verified successfully",
  });
});

// ================= ADMIN PROFILE =================

const getAdminProfile = asyncHandler(async (req, res) => {
  return res.status(200).json({
    success: true,
    data: req.admin,
  });
});

// ================= GET ADMIN BY ID =================

const getAdminById = asyncHandler(async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({
      success: false,
      message: "Invalid ID format",
    });
  }

  const admin = await Admin.findById(id).select("-password");

  if (!admin) {
    return res.status(404).json({
      success: false,
      message: "Admin not found",
    });
  }

  return res.status(200).json({
    success: true,
    data: admin,
  });
});

// ================= UPDATE ADMIN =================

const updateAdmin = asyncHandler(async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({
      success: false,
      message: "Invalid ID format",
    });
  }

  const { contact, emergency, email } = req.body;

  const updatedAdmin = await Admin.findByIdAndUpdate(
    id,
    {
      contact,
      emergency,
      email,
    },
    {
      new: true,
      runValidators: true,
    }
  ).select("-password");

  if (!updatedAdmin) {
    return res.status(404).json({
      success: false,
      message: "Admin not found",
    });
  }

  return res.status(200).json({
    success: true,
    data: updatedAdmin,
  });
});

// ================= UPDATE ADMIN PASSWORD =================

const updateAdminPassword = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const { oldPassword, newPassword } = req.body;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({
      success: false,
      message: "Invalid ID format",
    });
  }

  const admin = await Admin.findById(id);

  if (!admin) {
    return res.status(404).json({
      success: false,
      message: "Admin not found",
    });
  }

  const isMatch = await bcrypt.compare(oldPassword, admin.password);

  if (!isMatch) {
    return res.status(401).json({
      success: false,
      message: "Old password is incorrect",
    });
  }

  const salt = await bcrypt.genSalt(10);
  admin.password = await bcrypt.hash(newPassword, salt);

  await admin.save();

  return res.status(200).json({
    success: true,
    message: "Password updated successfully",
  });
});

// ================= TOGGLE ADMIN STATUS =================

const toggleAdminStatus = asyncHandler(async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({
      success: false,
      message: "Invalid ID format",
    });
  }

  const admin = await Admin.findById(id);

  if (!admin) {
    return res.status(404).json({
      success: false,
      message: "Admin not found",
    });
  }

  admin.activeStatus = !admin.activeStatus;

  await admin.save();

  return res.status(200).json({
    success: true,
    data: admin,
  });
});

// ================= DELETE ADMIN =================

const deleteAdmin = asyncHandler(async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({
      success: false,
      message: "Invalid ID format",
    });
  }

  const deletedAdmin = await Admin.findByIdAndDelete(id);

  if (!deletedAdmin) {
    return res.status(404).json({
      success: false,
      message: "Admin not found",
    });
  }

  return res.status(200).json({
    success: true,
    message: "Admin deleted successfully",
  });
});

// ================= LOGOUT ADMIN =================

const logoutAdmin = asyncHandler(async (req, res) => {
  res.clearCookie("token");

  return res.status(200).json({
    success: true,
    message: "Logged out successfully",
  });
});

// ================= EXPORTS =================

module.exports = {
  registerAdmin,
  loginAdmin,
  forgotPassword,
  verifyOTP,
  logoutAdmin,
  getAdminProfile,
  getAdminById,
  updateAdmin,
  updateAdminPassword,
  toggleAdminStatus,
  deleteAdmin,
};

