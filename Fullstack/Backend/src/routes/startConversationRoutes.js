const express = require("express");
const {
  createStartConversation,
  getStartConversations,
  getStartConversationById,
  updateStartConversationStatus,
  deleteStartConversation,
} = require("../controllers/startConversationController");

const router = express.Router();
const authMiddleware = require("../middlewares/auth.middleware");

router.post("/", createStartConversation);
router.get("/", authMiddleware, getStartConversations);
router.get("/:id", authMiddleware, getStartConversationById);
router.patch("/:id/status", authMiddleware, updateStartConversationStatus);
router.delete("/:id", authMiddleware, deleteStartConversation);

module.exports = router;