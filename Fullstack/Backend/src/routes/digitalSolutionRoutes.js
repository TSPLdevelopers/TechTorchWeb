const express = require("express");
const {
  createDigitalSolution,
  getDigitalSolutions,
  getDigitalSolutionById,
  updateDigitalSolutionStatus,
  deleteDigitalSolution,
} = require("../controllers/digitalSolutionController");

const router = express.Router();
const authMiddleware = require("../middlewares/auth.middleware");

router.post("/", createDigitalSolution);
router.get("/", authMiddleware, getDigitalSolutions);
router.get("/:id", authMiddleware, getDigitalSolutionById);
router.patch("/:id/status", authMiddleware, updateDigitalSolutionStatus);
router.delete("/:id", authMiddleware, deleteDigitalSolution);

module.exports = router;