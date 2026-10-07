const express = require("express");

const {
  createDataDecision,
  getDataDecisions,
  getDataDecisionById,
  updateDataDecisionStatus,
  deleteDataDecision,
} = require("../controllers/dataDecisionController");

const router = express.Router();
const authMiddleware = require("../middlewares/auth.middleware");

// Create enquiry
router.post("/", createDataDecision);

// Get all enquiries
router.get("/", authMiddleware, getDataDecisions);

// Get single enquiry
router.get("/:id", authMiddleware, getDataDecisionById);

// Update status
router.patch("/:id/status", authMiddleware, updateDataDecisionStatus);

// Delete enquiry
router.delete("/:id", authMiddleware, deleteDataDecision);

module.exports = router;