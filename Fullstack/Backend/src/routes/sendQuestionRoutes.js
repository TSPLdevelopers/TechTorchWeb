const express = require("express");

const {
  createSendQuestion,
  getSendQuestions,
  getSendQuestionById,
  updateSendQuestionStatus,
  deleteSendQuestion,
} = require("../controllers/sendQuestionController");

const router = express.Router();

router.post("/", createSendQuestion);

router.get("/", getSendQuestions);

router.get("/:id", getSendQuestionById);

router.patch("/:id/status", updateSendQuestionStatus);

router.delete("/:id", deleteSendQuestion);

module.exports = router;