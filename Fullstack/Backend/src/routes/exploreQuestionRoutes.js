const express = require("express");
const {
  createExploreQuestion,
  getExploreQuestions,
  getExploreQuestionById,
  updateExploreQuestionStatus,
  deleteExploreQuestion,
} = require("../controllers/exploreQuestionController");

const router = express.Router();
const authMiddleware = require("../middlewares/auth.middleware");

router.post("/", createExploreQuestion);
router.get("/", authMiddleware, getExploreQuestions);
router.get("/:id", authMiddleware, getExploreQuestionById);
router.patch("/:id/status", authMiddleware, updateExploreQuestionStatus);
router.delete("/:id", authMiddleware, deleteExploreQuestion);

module.exports = router;