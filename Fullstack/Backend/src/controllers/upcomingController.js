const mongoose = require("mongoose");
const UpcomingEvent = require("../models/Upcoming.model");

const getAllUpcomingEvents = async (req, res) => {
  try {
    const items = await UpcomingEvent.find().sort({ createdAt: -1 });
    return res.status(200).json({ success: true, count: items.length, data: items });
  } catch (error) {
    return res.status(500).json({ success: false, message: "Server error", error: error.message });
  }
};

const getUpcomingEventById = async (req, res) => {
  try {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ success: false, message: "Invalid ID format" });
    }
    const item = await UpcomingEvent.findById(id);
    if (!item) {
      return res.status(404).json({ success: false, message: "UpcomingEvent not found" });
    }
    return res.status(200).json({ success: true, data: item });
  } catch (error) {
    return res.status(500).json({ success: false, message: "Server error", error: error.message });
  }
};

const createUpcomingEvent = async (req, res) => {
  try {
    const newItem = new UpcomingEvent(req.body);
    const savedItem = await newItem.save();
    return res.status(201).json({ success: true, data: savedItem });
  } catch (error) {
    return res.status(400).json({ success: false, message: "Bad request", error: error.message });
  }
};

const updateUpcomingEvent = async (req, res) => {
  try {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ success: false, message: "Invalid ID format" });
    }
    const updatedItem = await UpcomingEvent.findByIdAndUpdate(id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!updatedItem) {
      return res.status(404).json({ success: false, message: "UpcomingEvent not found" });
    }
    return res.status(200).json({ success: true, data: updatedItem });
  } catch (error) {
    return res.status(400).json({ success: false, message: "Bad request", error: error.message });
  }
};

const deleteUpcomingEvent = async (req, res) => {
  try {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ success: false, message: "Invalid ID format" });
    }
    const deletedItem = await UpcomingEvent.findByIdAndDelete(id);
    if (!deletedItem) {
      return res.status(404).json({ success: false, message: "UpcomingEvent not found" });
    }
    return res.status(200).json({ success: true, message: "Deleted successfully", data: deletedItem });
  } catch (error) {
    return res.status(500).json({ success: false, message: "Server error", error: error.message });
  }
};

module.exports = {
  getAllUpcomingEvents,
  getUpcomingEventById,
  createUpcomingEvent,
  updateUpcomingEvent,
  deleteUpcomingEvent,
};