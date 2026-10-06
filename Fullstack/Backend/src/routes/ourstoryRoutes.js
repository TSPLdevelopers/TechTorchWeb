const express = require("express");

const {
  createOurStory,
  getOurStories,
  getOurStoryById,
  updateOurStoryStatus,
  deleteOurStory,
} = require("../controllers/ourstoryController");

const router = express.Router();

// Create inquiry
router.post("/", createOurStory);

// Get all inquiries
router.get("/", getOurStories);

// Get single inquiry
router.get("/:id", getOurStoryById);

// Update status
router.patch("/:id/status", updateOurStoryStatus);

// Delete inquiry
router.delete("/:id", deleteOurStory);

module.exports = router;