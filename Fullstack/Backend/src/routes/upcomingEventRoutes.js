const express = require("express");
const router = express.Router();
const {
  getAllUpcomingEvents,
  getUpcomingEventById,
  createUpcomingEvent,
  updateUpcomingEvent,
  deleteUpcomingEvent,
} = require("../controllers/upcomingController");

router.get("/", getAllUpcomingEvents);
router.get("/:id", getUpcomingEventById);
router.post("/", createUpcomingEvent);
router.put("/:id", updateUpcomingEvent);
router.delete("/:id", deleteUpcomingEvent);

module.exports = router;