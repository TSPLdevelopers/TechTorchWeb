const mongoose = require("mongoose");
const LatestUpdate = require("../models/LatestUpdate.model");
const asyncHandler = require("../utils/asyncHandler");

const getAllLatestUpdates = asyncHandler(async (req, res) => {
  const items = await LatestUpdate.find().sort({ createdAt: -1 });

  return res.status(200).json({
    success: true,
    count: items.length,
    data: items,
  });
});

const getLatestUpdateById = asyncHandler(async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({
      success: false,
      message: "Invalid ID format",
    });
  }

  const item = await LatestUpdate.findById(id);

  if (!item) {
    return res.status(404).json({
      success: false,
      message: "LatestUpdate not found",
    });
  }

  return res.status(200).json({
    success: true,
    data: item,
  });
});

const createLatestUpdate = asyncHandler(async (req, res) => {
  const newItem = new LatestUpdate(req.body);

  const savedItem = await newItem.save();

  return res.status(201).json({
    success: true,
    data: savedItem,
  });
});

const updateLatestUpdate = asyncHandler(async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({
      success: false,
      message: "Invalid ID format",
    });
  }

  const updatedItem = await LatestUpdate.findByIdAndUpdate(
    id,
    req.body,
    {
      new: true,
      runValidators: true,
    }
  );

  if (!updatedItem) {
    return res.status(404).json({
      success: false,
      message: "LatestUpdate not found",
    });
  }

  return res.status(200).json({
    success: true,
    data: updatedItem,
  });
});

const deleteLatestUpdate = asyncHandler(async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({
      success: false,
      message: "Invalid ID format",
    });
  }

  const deletedItem = await LatestUpdate.findByIdAndDelete(id);

  if (!deletedItem) {
    return res.status(404).json({
      success: false,
      message: "LatestUpdate not found",
    });
  }

  return res.status(200).json({
    success: true,
    message: "Deleted successfully",
    data: deletedItem,
  });
});

module.exports = {
  getAllLatestUpdates,
  getLatestUpdateById,
  createLatestUpdate,
  updateLatestUpdate,
  deleteLatestUpdate,
};