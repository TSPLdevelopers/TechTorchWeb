const Event = require("../models/Event.model");

// CREATE EVENT
const createEvent = async (req, res) => {
  try {
    const event = await Event.create(req.body);

    res.status(201).json({
      success: true,
      message: "Event created successfully",
      data: event,
    });
  } catch (error) {
    console.error("Create Event Error:", error);

    res.status(500).json({
      success: false,
      message: error.message || "Failed to create event",
    });
  }
};

// GET ALL EVENTS
const getAllEvents = async (req, res) => {
  try {
    const events = await Event.find().sort({
      createdAt: -1,
    });

    res.status(200).json({
      success: true,
      data: events,
    });
  } catch (error) {
    console.error("Get Events Error:", error);

    res.status(500).json({
      success: false,
      message: error.message || "Failed to fetch events",
    });
  }
};

// GET EVENT BY ID
const getEventById = async (req, res) => {
  try {
    const event = await Event.findById(req.params.id);

    if (!event) {
      return res.status(404).json({
        success: false,
        message: "Event not found",
      });
    }

    res.status(200).json({
      success: true,
      data: event,
    });
  } catch (error) {
    console.error("Get Event Error:", error);

    res.status(500).json({
      success: false,
      message: error.message || "Failed to fetch event",
    });
  }
};

// UPDATE EVENT
const updateEvent = async (req, res) => {
  try {
    const event = await Event.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );

    if (!event) {
      return res.status(404).json({
        success: false,
        message: "Event not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Event updated successfully",
      data: event,
    });
  } catch (error) {
    console.error("Update Event Error:", error);

    res.status(500).json({
      success: false,
      message: error.message || "Failed to update event",
    });
  }
};

// DELETE EVENT
const deleteEvent = async (req, res) => {
  try {
    const event = await Event.findByIdAndDelete(req.params.id);

    if (!event) {
      return res.status(404).json({
        success: false,
        message: "Event not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Event deleted successfully",
    });
  } catch (error) {
    console.error("Delete Event Error:", error);

    res.status(500).json({
      success: false,
      message: error.message || "Failed to delete event",
    });
  }
};

module.exports = {
  createEvent,
  getAllEvents,
  getEventById,
  updateEvent,
  deleteEvent,
};