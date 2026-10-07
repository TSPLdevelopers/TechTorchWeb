const express = require("express");

const {
  createJobOpening,
  getAllJobOpenings,
  getJobOpeningById,
  updateJobOpening,
  deleteJobOpening,
} = require("../controllers/jobOpeningController");

const router = express.Router();
const authMiddleware = require("../middlewares/auth.middleware");
const { optionalAuth } = authMiddleware;

// Create Job
router.post("/", authMiddleware, createJobOpening);

// Get All Jobs
router.get("/", optionalAuth, getAllJobOpenings);

// Get Job By ID
router.get("/:id", optionalAuth, getJobOpeningById);

// Update Job
router.put("/:id", authMiddleware, updateJobOpening);

// Delete Job
router.delete("/:id", authMiddleware, deleteJobOpening);

module.exports = router;