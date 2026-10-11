const express = require("express");

const {
  createDigitalSolution,
  getDigitalSolutions,
  getDigitalSolutionById,
  updateDigitalSolutionStatus,
  deleteDigitalSolution,
} = require("../controllers/digitalSolutionController");

const router = express.Router();

router.post("/", createDigitalSolution);

router.get("/", getDigitalSolutions);

router.get("/:id", getDigitalSolutionById);

router.patch("/:id/status", updateDigitalSolutionStatus);

router.delete("/:id", deleteDigitalSolution);

module.exports = router;