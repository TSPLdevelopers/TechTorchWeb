const JobOpening = require("../models/JobOpening.model");

// CREATE JOB
const createJobOpening = async (req, res) => {
  try {
    const job = await JobOpening.create(req.body);

    res.status(201).json({
      success: true,
      message: "Job opening created successfully",
      data: job,
    });
  } catch (error) {
    console.error("Create Job Error:", error);

    res.status(500).json({
      success: false,
      message: error.message || "Failed to create job opening",
    });
  }
};

// GET ALL JOBS
const getAllJobOpenings = async (req, res) => {
  try {
    const jobs = await JobOpening.find().sort({
      createdAt: -1,
    });

    res.status(200).json({
      success: true,
      data: jobs,
    });
  } catch (error) {
    console.error("Get Jobs Error:", error);

    res.status(500).json({
      success: false,
      message: error.message || "Failed to fetch job openings",
    });
  }
};

// GET JOB BY ID
const getJobOpeningById = async (req, res) => {
  try {
    const job = await JobOpening.findById(req.params.id);

    if (!job) {
      return res.status(404).json({
        success: false,
        message: "Job opening not found",
      });
    }

    res.status(200).json({
      success: true,
      data: job,
    });
  } catch (error) {
    console.error("Get Job Error:", error);

    res.status(500).json({
      success: false,
      message: error.message || "Failed to fetch job opening",
    });
  }
};

// UPDATE JOB
const updateJobOpening = async (req, res) => {
  try {
    const job = await JobOpening.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );

    if (!job) {
      return res.status(404).json({
        success: false,
        message: "Job opening not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Job opening updated successfully",
      data: job,
    });
  } catch (error) {
    console.error("Update Job Error:", error);

    res.status(500).json({
      success: false,
      message: error.message || "Failed to update job opening",
    });
  }
};

// DELETE JOB
const deleteJobOpening = async (req, res) => {
  try {
    const job = await JobOpening.findByIdAndDelete(
      req.params.id
    );

    if (!job) {
      return res.status(404).json({
        success: false,
        message: "Job opening not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Job opening deleted successfully",
    });
  } catch (error) {
    console.error("Delete Job Error:", error);

    res.status(500).json({
      success: false,
      message: error.message || "Failed to delete job opening",
    });
  }
};

module.exports = {
  createJobOpening,
  getAllJobOpenings,
  getJobOpeningById,
  updateJobOpening,
  deleteJobOpening,
};