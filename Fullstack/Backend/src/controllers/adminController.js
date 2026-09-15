const bcrypt = require("bcryptjs");
const mongoose = require("mongoose");
const Admin = require("../models/Admin.model");
const {generateToken} = require("../utils/generateToken");
const asyncHandler = require("../utils/asyncHandler");

const registerAdmin = asyncHandler(async (req, res) => {
  const {name, contact, emergency, email, password } = req.body;

  if (!name || !contact || !emergency || !email || !password) {
    res.status(400);
    throw new Error("All fields are required");
  }

  const existingAdmin = await Admin.findOne({
    email: email.toLowerCase(),
  });

  if (existingAdmin) {
    res.status(409);
    throw new Error("Admin already exists with this email");
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
        name: savedAdmin.name,
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
    res.status(400);
    throw new Error("Email and password are required");
  }

  const admin = await Admin.findOne({
    email: email.toLowerCase(),
  });

  if (!admin) {
    res.status(401);
    throw new Error("Invalid email or password");
  }

  if (!admin.activeStatus) {
    res.status(403);
    throw new Error("Admin account is inactive");
  }

  const isMatch = await bcrypt.compare(password, admin.password);

  if (!isMatch) {
    res.status(401);
    throw new Error("Invalid email or password");
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
    message: "Admin login successful",
    data: {
      _id: admin._id,
       name: admin.name,
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
    res.status(400);
    throw new Error("Invalid ID format");
  }

  const admin = await Admin.findById(id).select("-password");

  if (!admin) {
    res.status(404);
    throw new Error("Admin not found");
  }

  return res.status(200).json({
    success: true,
    data: admin,
  });
});

const updateAdmin = asyncHandler(async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    res.status(400);
    throw new Error("Invalid ID format");
  }

  const { contact, emergency, email } = req.body;

  const updatedAdmin = await Admin.findByIdAndUpdate(
    id,
    {
      contact,
      emergency,
      email: email?.toLowerCase(),
    },
    {
      new: true,
      runValidators: true,
    }
  ).select("-password");

  if (!updatedAdmin) {
    res.status(404);
    throw new Error("Admin not found");
  }

  return res.status(200).json({
    success: true,
    message: "Admin updated successfully",
    data: updatedAdmin,
  });
});

const updateAdminPassword = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const { oldPassword, newPassword } = req.body;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    res.status(400);
    throw new Error("Invalid ID format");
  }

  if (!oldPassword || !newPassword) {
    res.status(400);
    throw new Error("Old password and new password are required");
  }

  const admin = await Admin.findById(id);

  if (!admin) {
    res.status(404);
    throw new Error("Admin not found");
  }

  const isMatch = await bcrypt.compare(oldPassword, admin.password);

  if (!isMatch) {
    res.status(401);
    throw new Error("Old password is incorrect");
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
    res.status(400);
    throw new Error("Invalid ID format");
  }

  const admin = await Admin.findById(id);

  if (!admin) {
    res.status(404);
    throw new Error("Admin not found");
  }

  admin.activeStatus = !admin.activeStatus;

  await admin.save();

  return res.status(200).json({
    success: true,
    message: "Admin status updated successfully",
    data: admin,
  });
});

const deleteAdmin = asyncHandler(async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    res.status(400);
    throw new Error("Invalid ID format");
  }

  const deletedAdmin = await Admin.findByIdAndDelete(id);

  if (!deletedAdmin) {
    res.status(404);
    throw new Error("Admin not found");
  }

  return res.status(200).json({
    success: true,
    message: "Admin deleted successfully",
  });
});

module.exports = {
  registerAdmin,
  loginAdmin,
  getAdminProfile,
  getAdminById,
  updateAdmin,
  updateAdminPassword,
  toggleAdminStatus,
  deleteAdmin,
};