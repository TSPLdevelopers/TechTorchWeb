const InsuranceIntake = require("../models/InsuranceIntake.model");

// ======================================================
// CREATE INSURANCE INTAKE
// POST /api/insurance-intakes
// ======================================================

const createInsuranceIntake = async (req, res) => {
  try {
    const {
      fullName,
      corporateWorkEmail,
      organizationName,
      phone,
      insuranceCapabilities,
      targetTimeline,
      technicalObjectives,
      mutualNda,
      architectureBriefing,
    } = req.body;

    // Required fields
    if (
      !fullName ||
      !corporateWorkEmail ||
      !organizationName ||
      !insuranceCapabilities ||
      !Array.isArray(insuranceCapabilities) ||
      insuranceCapabilities.length === 0 ||
      !targetTimeline
    ) {
      return res.status(400).json({
        success: false,
        message: "Please fill all required fields.",
      });
    }

    const intake = await InsuranceIntake.create({
      fullName,
      corporateWorkEmail,
      organizationName,
      phone: phone || "",
      insuranceCapabilities,
      targetTimeline,
      technicalObjectives: technicalObjectives || "",
      mutualNda: mutualNda === true,
      architectureBriefing: architectureBriefing === true,
    });

    return res.status(201).json({
      success: true,
      message: "Insurance intake submitted successfully.",
      data: intake,
    });
  } catch (error) {
    console.error("Create Insurance Intake Error:", error);

    if (error.name === "ValidationError") {
      const messages = Object.values(error.errors).map(
        (err) => err.message
      );

      return res.status(400).json({
        success: false,
        message: messages[0] || "Validation failed.",
        errors: messages,
      });
    }

    return res.status(500).json({
      success: false,
      message: "Failed to submit insurance intake.",
    });
  }
};


// ======================================================
// GET ALL INSURANCE INTAKES
// GET /api/insurance-intakes
// ======================================================

const getInsuranceIntakes = async (req, res) => {
  try {
    const intakes = await InsuranceIntake.find().sort({
      createdAt: -1,
    });

    return res.status(200).json({
      success: true,
      count: intakes.length,
      data: intakes,
    });
  } catch (error) {
    console.error("Get Insurance Intakes Error:", error);

    return res.status(500).json({
      success: false,
      message: "Failed to fetch insurance intakes.",
    });
  }
};


// ======================================================
// GET SINGLE INTAKE
// GET /api/insurance-intakes/:id
// ======================================================

const getInsuranceIntakeById = async (req, res) => {
  try {
    const intake = await InsuranceIntake.findById(req.params.id);

    if (!intake) {
      return res.status(404).json({
        success: false,
        message: "Insurance intake not found.",
      });
    }

    return res.status(200).json({
      success: true,
      data: intake,
    });
  } catch (error) {
    console.error("Get Insurance Intake Error:", error);

    return res.status(500).json({
      success: false,
      message: "Failed to fetch insurance intake.",
    });
  }
};


// ======================================================
// UPDATE STATUS
// PATCH /api/insurance-intakes/:id/status
// ======================================================

const updateInsuranceIntakeStatus = async (req, res) => {
  try {
    const { status } = req.body;

    const allowedStatuses = [
      "new",
      "contacted",
      "in-progress",
      "completed",
      "rejected",
    ];

    if (!allowedStatuses.includes(status)) {
      return res.status(400).json({
        success: false,
        message: "Invalid status.",
      });
    }

    const intake = await InsuranceIntake.findByIdAndUpdate(
      req.params.id,
      { status },
      {
        new: true,
        runValidators: true,
      }
    );

    if (!intake) {
      return res.status(404).json({
        success: false,
        message: "Insurance intake not found.",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Status updated successfully.",
      data: intake,
    });
  } catch (error) {
    console.error("Update Insurance Status Error:", error);

    return res.status(500).json({
      success: false,
      message: "Failed to update status.",
    });
  }
};


// ======================================================
// DELETE INTAKE
// DELETE /api/insurance-intakes/:id
// ======================================================

const deleteInsuranceIntake = async (req, res) => {
  try {
    const intake =
      await InsuranceIntake.findByIdAndDelete(req.params.id);

    if (!intake) {
      return res.status(404).json({
        success: false,
        message: "Insurance intake not found.",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Insurance intake deleted successfully.",
    });
  } catch (error) {
    console.error("Delete Insurance Intake Error:", error);

    return res.status(500).json({
      success: false,
      message: "Failed to delete insurance intake.",
    });
  }
};


module.exports = {
  createInsuranceIntake,
  getInsuranceIntakes,
  getInsuranceIntakeById,
  updateInsuranceIntakeStatus,
  deleteInsuranceIntake,
};