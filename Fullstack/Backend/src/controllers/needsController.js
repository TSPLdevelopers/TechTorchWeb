const Needs = require("../models/Needs.model");

// CREATE
const createNeeds = async (req, res) => {
  try {
    const {
      fullName,
      workEmail,
      companyName,
      phoneNumber,
      service,
      requirement,
      currentStage,
      expectedTimeline,
      preferredWayToConnect,
    } = req.body;

    if (!fullName || !workEmail || !service || !requirement) {
      return res.status(400).json({
        success: false,
        message:
          "Full name, work email, service and requirement are required",
      });
    }

    const needs = await Needs.create({
      fullName,
      workEmail,
      companyName,
      phoneNumber,
      service,
      requirement,
      currentStage,
      expectedTimeline,
      preferredWayToConnect,
    });

    return res.status(201).json({
      success: true,
      message: "Enquiry submitted successfully",
      data: needs,
    });
  } catch (error) {
    console.error("Create Needs Error:", error);

    return res.status(500).json({
      success: false,
      message: "Failed to submit enquiry",
      error: error.message,
    });
  }
};

// GET ALL
const getNeeds = async (req, res) => {
  try {
    const needs = await Needs.find()
      .sort({ createdAt: -1 })
      .lean();

    return res.status(200).json({
      success: true,
      count: needs.length,
      data: needs,
    });
  } catch (error) {
    console.error("Get Needs Error:", error);

    return res.status(500).json({
      success: false,
      message: "Failed to fetch enquiries",
      error: error.message,
    });
  }
};

// GET BY ID
const getNeedsById = async (req, res) => {
  try {
    const needs = await Needs.findById(req.params.id);

    if (!needs) {
      return res.status(404).json({
        success: false,
        message: "Enquiry not found",
      });
    }

    return res.status(200).json({
      success: true,
      data: needs,
    });
  } catch (error) {
    console.error("Get Needs By ID Error:", error);

    return res.status(500).json({
      success: false,
      message: "Failed to fetch enquiry",
      error: error.message,
    });
  }
};

// UPDATE STATUS
const updateNeedsStatus = async (req, res) => {
  try {
    const { status } = req.body;

    const allowedStatuses = [
      "new",
      "contacted",
      "in-progress",
      "closed",
    ];

    if (!allowedStatuses.includes(status)) {
      return res.status(400).json({
        success: false,
        message: "Invalid status",
      });
    }

    const needs = await Needs.findByIdAndUpdate(
      req.params.id,
      { status },
      {
        new: true,
        runValidators: true,
      }
    );

    if (!needs) {
      return res.status(404).json({
        success: false,
        message: "Enquiry not found",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Status updated successfully",
      data: needs,
    });
  } catch (error) {
    console.error("Update Needs Status Error:", error);

    return res.status(500).json({
      success: false,
      message: "Failed to update status",
      error: error.message,
    });
  }
};

// DELETE
const deleteNeeds = async (req, res) => {
  try {
    const needs = await Needs.findByIdAndDelete(req.params.id);

    if (!needs) {
      return res.status(404).json({
        success: false,
        message: "Enquiry not found",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Enquiry deleted successfully",
    });
  } catch (error) {
    console.error("Delete Needs Error:", error);

    return res.status(500).json({
      success: false,
      message: "Failed to delete enquiry",
      error: error.message,
    });
  }
};

module.exports = {
  createNeeds,
  getNeeds,
  getNeedsById,
  updateNeedsStatus,
  deleteNeeds,
};