const express = require("express");

const {
  createJobOpening,
  getAllJobOpenings,
  getJobOpeningById,
  updateJobOpening,
  deleteJobOpening,
} = require("../controllers/jobOpeningController");

const router = express.Router();

// Create Job
router.post("/", createJobOpening);

// Get All Jobs
router.get("/", getAllJobOpenings);

// Get Job By ID
router.get("/:id", getJobOpeningById);

// Update Job
router.put("/:id", updateJobOpening);

// Delete Job
router.delete("/:id", deleteJobOpening);

module.exports = router;