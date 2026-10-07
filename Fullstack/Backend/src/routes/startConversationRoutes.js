const express = require("express");

const {
  createStartConversation,
  getStartConversations,
  getStartConversationById,
  updateStartConversationStatus,
  deleteStartConversation,
} = require("../controllers/startConversationController");

const router = express.Router();

// Submit enquiry
router.post("/", createStartConversation);

// Get all enquiries
router.get("/", getStartConversations);

// Get single enquiry
router.get("/:id", getStartConversationById);

// Update enquiry status
router.patch("/:id/status", updateStartConversationStatus);

// Delete enquiry
router.delete("/:id", deleteStartConversation);

module.exports = router;