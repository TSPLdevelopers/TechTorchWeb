const express = require("express");

const {
  createEvent,
  getAllEvents,
  getEventById,
  updateEvent,
  deleteEvent,
} = require("../controllers/eventController");

const router = express.Router();

// CREATE
router.post("/", createEvent);

// GET ALL
router.get("/", getAllEvents);

// GET SINGLE
router.get("/:id", getEventById);

// UPDATE
router.put("/:id", updateEvent);

// DELETE
router.delete("/:id", deleteEvent);

module.exports = router;