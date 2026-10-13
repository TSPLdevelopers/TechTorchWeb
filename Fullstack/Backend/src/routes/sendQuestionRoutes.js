const express = require("express");
const {
  createSendQuestion,
  getSendQuestions,
  getSendQuestionById,
  updateSendQuestionStatus,
  deleteSendQuestion,
} = require("../controllers/sendQuestionController");

const router = express.Router();
const authMiddleware = require("../middlewares/auth.middleware");

router.post("/", createSendQuestion);
router.get("/", authMiddleware, getSendQuestions);
router.get("/:id", authMiddleware, getSendQuestionById);
router.patch("/:id/status", authMiddleware, updateSendQuestionStatus);
router.delete("/:id", authMiddleware, deleteSendQuestion);

module.exports = router;