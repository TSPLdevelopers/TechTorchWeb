const mongoose = require("mongoose");
const UpcomingEvent = require("../models/Upcoming.model");
const asyncHandler = require("../utils/asyncHandler");

const getAllUpcomingEvents = asyncHandler(async (req, res) => {
  const items = await UpcomingEvent.find().sort({ createdAt: -1 });

  return res.status(200).json({
    success: true,
    count: items.length,
    data: items,
  });
});

const getUpcomingEventById = asyncHandler(async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({
      success: false,
      message: "Invalid ID format",
    });
  }

  const item = await UpcomingEvent.findById(id);

  if (!item) {
    return res.status(404).json({
      success: false,
      message: "UpcomingEvent not found",
    });
  }

  return res.status(200).json({
    success: true,
    data: item,
  });
});

const createUpcomingEvent = asyncHandler(async (req, res) => {
  const newItem = new UpcomingEvent(req.body);

  const savedItem = await newItem.save();

  return res.status(201).json({
    success: true,
    data: savedItem,
  });
});

const updateUpcomingEvent = asyncHandler(async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({
      success: false,
      message: "Invalid ID format",
    });
  }

  const updatedItem = await UpcomingEvent.findByIdAndUpdate(
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
      message: "UpcomingEvent not found",
    });
  }

  return res.status(200).json({
    success: true,
    data: updatedItem,
  });
});

const deleteUpcomingEvent = asyncHandler(async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({
      success: false,
      message: "Invalid ID format",
    });
  }

  const deletedItem = await UpcomingEvent.findByIdAndDelete(id);

  if (!deletedItem) {
    return res.status(404).json({
      success: false,
      message: "UpcomingEvent not found",
    });
  }

  return res.status(200).json({
    success: true,
    message: "Deleted successfully",
    data: deletedItem,
  });
});

module.exports = {
  getAllUpcomingEvents,
  getUpcomingEventById,
  createUpcomingEvent,
  updateUpcomingEvent,
  deleteUpcomingEvent,
};