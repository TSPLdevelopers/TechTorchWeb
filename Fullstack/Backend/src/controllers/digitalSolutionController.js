const DigitalSolution = require("../models/DigitalSolution.model");

// CREATE
const createDigitalSolution = async (req, res) => {
  try {
    const {
      executiveFullName,
      corporateWorkEmail,
      enterpriseOrganization,
      primarySolutionFocus,
      architectureScope,
    } = req.body;

    if (
      !executiveFullName ||
      !corporateWorkEmail ||
      !enterpriseOrganization ||
      !primarySolutionFocus ||
      !architectureScope
    ) {
      return res.status(400).json({
        success: false,
        message: "Please fill all required fields.",
      });
    }

    const solution = await DigitalSolution.create({
      executiveFullName,
      corporateWorkEmail,
      enterpriseOrganization,
      primarySolutionFocus,
      architectureScope,
    });

    return res.status(201).json({
      success: true,
      message: "Architecture consultation request submitted successfully.",
      data: solution,
    });
  } catch (error) {
    console.error("Create Digital Solution Error:", error);

    return res.status(500).json({
      success: false,
      message: "Failed to submit architecture consultation request.",
      error: error.message,
    });
  }
};

// GET ALL
const getDigitalSolutions = async (req, res) => {
  try {
    const solutions = await DigitalSolution.find().sort({
      createdAt: -1,
    });

    return res.status(200).json({
      success: true,
      count: solutions.length,
      data: solutions,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Failed to fetch architecture consultation requests.",
      error: error.message,
    });
  }
};

// GET ONE
const getDigitalSolutionById = async (req, res) => {
  try {
    const solution = await DigitalSolution.findById(req.params.id);

    if (!solution) {
      return res.status(404).json({
        success: false,
        message: "Architecture consultation request not found.",
      });
    }

    return res.status(200).json({
      success: true,
      data: solution,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Failed to fetch request.",
      error: error.message,
    });
  }
};

// UPDATE STATUS
const updateDigitalSolutionStatus = async (req, res) => {
  try {
    const { status } = req.body;

    const allowedStatuses = [
      "new",
      "reviewed",
      "contacted",
      "closed",
    ];

    if (!allowedStatuses.includes(status)) {
      return res.status(400).json({
        success: false,
        message: "Invalid status.",
      });
    }

    const solution = await DigitalSolution.findByIdAndUpdate(
      req.params.id,
      { status },
      {
        new: true,
        runValidators: true,
      }
    );

    if (!solution) {
      return res.status(404).json({
        success: false,
        message: "Architecture consultation request not found.",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Status updated successfully.",
      data: solution,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Failed to update status.",
      error: error.message,
    });
  }
};

// DELETE
const deleteDigitalSolution = async (req, res) => {
  try {
    const solution = await DigitalSolution.findByIdAndDelete(
      req.params.id
    );

    if (!solution) {
      return res.status(404).json({
        success: false,
        message: "Architecture consultation request not found.",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Request deleted successfully.",
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Failed to delete request.",
      error: error.message,
    });
  }
};

module.exports = {
  createDigitalSolution,
  getDigitalSolutions,
  getDigitalSolutionById,
  updateDigitalSolutionStatus,
  deleteDigitalSolution,
};