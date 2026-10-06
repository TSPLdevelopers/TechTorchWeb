const express = require("express");

const router = express.Router();
const authMiddleware = require("../middlewares/auth.middleware");

const {
  createEvent,
  getAllEvents,
  getEventById,
  updateEvent,
  deleteEvent,
} = require("../controllers/eventController");

// Create Event
router.post("/", authMiddleware, createEvent);

// Get All Events
router.get("/", getAllEvents);

// Get Event By ID
router.get("/:id", getEventById);

// Update Event
router.put("/:id", authMiddleware, updateEvent);

// Delete Event
router.delete("/:id", authMiddleware, deleteEvent);

module.exports = router;