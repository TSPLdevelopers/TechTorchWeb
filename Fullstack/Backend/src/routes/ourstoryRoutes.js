const express = require("express");

const {
  createOurStory,
  getOurStories,
  getOurStoryById,
  updateOurStoryStatus,
  deleteOurStory,
} = require("../controllers/ourstoryController");

const router = express.Router();
const authMiddleware = require("../middlewares/auth.middleware");

// Create inquiry
router.post("/", createOurStory);

// Get all inquiries
router.get("/", authMiddleware, getOurStories);

// Get single inquiry
router.get("/:id", authMiddleware, getOurStoryById);

// Update status
router.patch("/:id/status", authMiddleware, updateOurStoryStatus);

// Delete inquiry
router.delete("/:id", authMiddleware, deleteOurStory);

module.exports = router;