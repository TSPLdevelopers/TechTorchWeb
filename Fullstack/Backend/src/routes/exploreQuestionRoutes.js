const express = require("express");

const {
  createExploreQuestion,
  getExploreQuestions,
  getExploreQuestionById,
  updateExploreQuestionStatus,
  deleteExploreQuestion,
} = require("../controllers/exploreQuestionController");

const router = express.Router();

// Submit question
router.post("/", createExploreQuestion);

// Get all questions
router.get("/", getExploreQuestions);

// Get single question
router.get("/:id", getExploreQuestionById);

// Update status
router.patch("/:id/status", updateExploreQuestionStatus);

// Delete question
router.delete("/:id", deleteExploreQuestion);

module.exports = router;