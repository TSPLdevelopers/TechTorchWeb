const DataDecision = require("../models/dataDecision.model");

// CREATE
const createDataDecision = async (req, res) => {
  try {
    const enquiry = await DataDecision.create(req.body);

    return res.status(201).json({
      success: true,
      message: "Data & Decision consultation request submitted successfully",
      data: enquiry,
    });
  } catch (error) {
    console.error("Create Data Decision Error:", error);

    return res.status(500).json({
      success: false,
      message: "Server error",
      error: error.message,
    });
  }
};

// GET ALL
const getDataDecisions = async (req, res) => {
  try {
    const enquiries = await DataDecision.find().sort({ createdAt: -1 });

    return res.status(200).json({
      success: true,
      count: enquiries.length,
      data: enquiries,
    });
  } catch (error) {
    console.error("Get Data Decisions Error:", error);

    return res.status(500).json({
      success: false,
      message: "Server error",
      error: error.message,
    });
  }
};

// GET BY ID
const getDataDecisionById = async (req, res) => {
  try {
    const enquiry = await DataDecision.findById(req.params.id);

    if (!enquiry) {
      return res.status(404).json({
        success: false,
        message: "Data & Decision enquiry not found",
      });
    }

    return res.status(200).json({
      success: true,
      data: enquiry,
    });
  } catch (error) {
    console.error("Get Data Decision Error:", error);

    return res.status(500).json({
      success: false,
      message: "Server error",
      error: error.message,
    });
  }
};

// UPDATE STATUS
const updateDataDecisionStatus = async (req, res) => {
  try {
    const { status } = req.body;

    const enquiry = await DataDecision.findByIdAndUpdate(
      req.params.id,
      { status },
      {
        new: true,
        runValidators: true,
      }
    );

    if (!enquiry) {
      return res.status(404).json({
        success: false,
        message: "Data & Decision enquiry not found",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Status updated successfully",
      data: enquiry,
    });
  } catch (error) {
    console.error("Update Status Error:", error);

    return res.status(500).json({
      success: false,
      message: "Server error",
      error: error.message,
    });
  }
};

// DELETE
const deleteDataDecision = async (req, res) => {
  try {
    const enquiry = await DataDecision.findByIdAndDelete(req.params.id);

    if (!enquiry) {
      return res.status(404).json({
        success: false,
        message: "Data & Decision enquiry not found",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Data & Decision enquiry deleted successfully",
    });
  } catch (error) {
    console.error("Delete Data Decision Error:", error);

    return res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
};

module.exports = {
  createDataDecision,
  getDataDecisions,
  getDataDecisionById,
  updateDataDecisionStatus,
  deleteDataDecision,
};