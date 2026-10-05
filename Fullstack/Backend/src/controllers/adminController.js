const bcrypt = require("bcryptjs");
const mongoose = require("mongoose");
const Admin = require("../models/Admin.model");
const asyncHandler = require("../utils/asyncHandler");

const fail = (res, code, message) =>
  res.status(code).json({ success: false, message });

const validId = (id) => mongoose.Types.ObjectId.isValid(id);

const SAFE = "-password -otp -otpExpiry";

// Only a superadmin may touch other admins; anyone may touch themselves.
const canManage = (req, id) =>
  req.admin.role === "superadmin" || String(req.admin._id) === String(id);

// GET /api/admin/profile
const getAdminProfile = asyncHandler(async (req, res) => {
  return res.status(200).json({ success: true, data: req.admin });
});

// GET /api/admin  (superadmin)
const getAllAdmins = asyncHandler(async (req, res) => {
  const admins = await Admin.find().select(SAFE).sort({ createdAt: -1 });
  return res.status(200).json({ success: true, count: admins.length, data: admins });
});

// GET /api/admin/:id
const getAdminById = asyncHandler(async (req, res) => {
  const { id } = req.params;
  if (!validId(id)) return fail(res, 400, "Invalid ID format");
  if (!canManage(req, id)) return fail(res, 403, "Not allowed");

  const admin = await Admin.findById(id).select(SAFE);
  if (!admin) return fail(res, 404, "Admin not found");

  return res.status(200).json({ success: true, data: admin });
});

// PUT /api/admin/:id   (name, email, and role for superadmin)
const updateAdmin = asyncHandler(async (req, res) => {
  const { id } = req.params;
  if (!validId(id)) return fail(res, 400, "Invalid ID format");
  if (!canManage(req, id)) return fail(res, 403, "Not allowed");

  const updates = {};
  if (req.body.name !== undefined) updates.name = String(req.body.name).trim();
  if (req.body.email !== undefined) updates.email = String(req.body.email).toLowerCase().trim();
  if (req.body.role !== undefined && req.admin.role === "superadmin") {
    if (!["admin", "superadmin"].includes(req.body.role)) return fail(res, 400, "Invalid role");
    updates.role = req.body.role;
  }

  const updated = await Admin.findByIdAndUpdate(id, updates, {
    new: true,
    runValidators: true,
  }).select(SAFE);

  if (!updated) return fail(res, 404, "Admin not found");

  return res.status(200).json({ success: true, message: "Admin updated successfully", data: updated });
});

// PUT /api/admin/:id/password
const updateAdminPassword = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const { oldPassword, newPassword } = req.body;

  if (!validId(id)) return fail(res, 400, "Invalid ID format");
  if (String(req.admin._id) !== String(id)) return fail(res, 403, "You can only change your own password");
  if (!oldPassword || !newPassword) return fail(res, 400, "Old password and new password are required");
  if (newPassword.length < 6) return fail(res, 400, "Password must be at least 6 characters");

  const admin = await Admin.findById(id);
  if (!admin) return fail(res, 404, "Admin not found");

  const isMatch = await bcrypt.compare(oldPassword, admin.password);
  if (!isMatch) return fail(res, 401, "Old password is incorrect");

  admin.password = await bcrypt.hash(newPassword, await bcrypt.genSalt(10));
  await admin.save();

  return res.status(200).json({ success: true, message: "Password updated successfully" });
});

// PATCH /api/admin/:id/status   (superadmin) -> active <-> inactive
const toggleAdminStatus = asyncHandler(async (req, res) => {
  const { id } = req.params;
  if (!validId(id)) return fail(res, 400, "Invalid ID format");
  if (String(req.admin._id) === String(id)) return fail(res, 400, "You cannot deactivate your own account");

  const admin = await Admin.findById(id);
  if (!admin) return fail(res, 404, "Admin not found");

  admin.status = admin.status === "active" ? "inactive" : "active";
  await admin.save();

  const { password, otp, otpExpiry, ...safe } = admin.toObject();
  return res.status(200).json({ success: true, message: "Admin status updated successfully", data: safe });
});

// DELETE /api/admin/:id   (superadmin)
const deleteAdmin = asyncHandler(async (req, res) => {
  const { id } = req.params;
  if (!validId(id)) return fail(res, 400, "Invalid ID format");
  if (String(req.admin._id) === String(id)) return fail(res, 400, "You cannot delete your own account");

  const deleted = await Admin.findByIdAndDelete(id);
  if (!deleted) return fail(res, 404, "Admin not found");

  return res.status(200).json({ success: true, message: "Admin deleted successfully" });
});

module.exports = {
  getAdminProfile,
  getAllAdmins,
  getAdminById,
  updateAdmin,
  updateAdminPassword,
  toggleAdminStatus,
  deleteAdmin,
};