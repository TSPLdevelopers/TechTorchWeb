const mongoose = require("mongoose");
const Job = require("../models/job.model");
const asyncHandler = require("../utils/asyncHandler");

const createJob = asyncHandler(async (req, res) => {
  const { title, description, links, expiryDate } = req.body;

  if (!title || !description || !links || !expiryDate) {
    return res.status(400).json({
      success: false,
      message: "Title, description, links, and expiryDate are required",
    });
  }

  const newJob = new Job(req.body);
  const savedJob = await newJob.save();

  return res.status(201).json({
    success: true,
    data: savedJob,
  });
});

const getAllJobs = asyncHandler(async (req, res) => {
  const jobs = await Job.find().sort({ createdAt: -1 });

  return res.status(200).json({
    success: true,
    data: jobs,
  });
});

const getJobById = asyncHandler(async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({
      success: false,
      message: "Invalid ID format",
    });
  }

  const job = await Job.findById(id);

  if (!job) {
    return res.status(404).json({
      success: false,
      message: "Job not found",
    });
  }

  return res.status(200).json({
    success: true,
    data: job,
  });
});

const updateJob = asyncHandler(async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({
      success: false,
      message: "Invalid ID format",
    });
  }

  const updatedJob = await Job.findByIdAndUpdate(
    id,
    req.body,
    {
      new: true,
      runValidators: true,
    }
  );

  if (!updatedJob) {
    return res.status(404).json({
      success: false,
      message: "Job not found",
    });
  }

  return res.status(200).json({
    success: true,
    data: updatedJob,
  });
});

const deleteJob = asyncHandler(async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({
      success: false,
      message: "Invalid ID format",
    });
  }

  const deletedJob = await Job.findByIdAndDelete(id);

  if (!deletedJob) {
    return res.status(404).json({
      success: false,
      message: "Job not found",
    });
  }

  return res.status(200).json({
    success: true,
    message: "Job deleted successfully",
  });
});

module.exports = {
  createJob,
  getAllJobs,
  getJobById,
  updateJob,
  deleteJob,
};