const express = require("express");

const router = express.Router();

const {
  createEvent,
  getAllEvents,
  getEventById,
  updateEvent,
  deleteEvent,
} = require("../controllers/eventController");

// Create Event
router.post("/", createEvent);

// Get All Events
router.get("/", getAllEvents);

// Get Event By ID
router.get("/:id", getEventById);

// Update Event
router.put("/:id", updateEvent);

// Delete Event
router.delete("/:id", deleteEvent);

module.exports = router;