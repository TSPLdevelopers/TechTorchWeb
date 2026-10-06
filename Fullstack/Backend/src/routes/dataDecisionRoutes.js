const express = require("express");

const {
  createDataDecision,
  getDataDecisions,
  getDataDecisionById,
  updateDataDecisionStatus,
  deleteDataDecision,
} = require("../controllers/dataDecisionController");

const router = express.Router();

// Create enquiry
router.post("/", createDataDecision);

// Get all enquiries
router.get("/", getDataDecisions);

// Get single enquiry
router.get("/:id", getDataDecisionById);

// Update status
router.patch("/:id/status", updateDataDecisionStatus);

// Delete enquiry
router.delete("/:id", deleteDataDecision);

module.exports = router;