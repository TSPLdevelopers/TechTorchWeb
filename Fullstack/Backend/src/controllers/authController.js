const bcrypt = require("bcryptjs");
const mongoose = require("mongoose");
const Admin = require("../models/admin.model");
const asyncHandler = require("../utils/asyncHandler");
const { generateToken } = require("../utils/generateToken");


const registerAdmin = asyncHandler(async (req, res) => {
  const { contact, emergency, email, password } = req.body;

  if (!contact || !emergency || !email || !password) {
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
    contact,
    emergency,
    email,
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
  



const getAdminProfile = asyncHandler(async (req, res) => {
  return res.status(200).json({
    success: true,
    data: req.admin,
  });
});


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
const logoutAdmin = asyncHandler(async (req, res) => {
  res.clearCookie("token");

  return res.status(200).json({
    success: true,
    message: "Logged out successfully",
  });
});


module.exports = {
  registerAdmin,
  loginAdmin,
  logoutAdmin,  
  getAdminProfile,
  getAdminById,
  updateAdmin,
  updateAdminPassword,
  toggleAdminStatus,
  deleteAdmin,
};