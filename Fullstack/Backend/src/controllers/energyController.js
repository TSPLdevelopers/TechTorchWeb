const Energy = require("../models/energy.model");

// ======================================================
// CREATE ENERGY CONSULTATION
// POST /api/energy
// ======================================================

const createEnergy = async (req, res) => {
  try {
    const {
      fullName,
      businessEmail,
      companyOrganization,
      phoneNumber,
      primaryBusinessArea,
      technologyAreas,
      currentProjectStage,
      requirement,
      preferredContactMethod,
      preferredContactTime,
      contactConsent,
    } = req.body;

    // Required fields
    if (
      !fullName ||
      !businessEmail ||
      !companyOrganization ||
      !primaryBusinessArea ||
      !requirement
    ) {
      return res.status(400).json({
        success: false,
        message: "Please fill all required fields.",
      });
    }

    // Technology areas
    if (
      !Array.isArray(technologyAreas) ||
      technologyAreas.length === 0
    ) {
      return res.status(400).json({
        success: false,
        message:
          "Please select at least one technology area.",
      });
    }

    // Consent
    if (contactConsent !== true) {
      return res.status(400).json({
        success: false,
        message:
          "Please agree to be contacted by TechTorch.",
      });
    }

    const energy = await Energy.create({
      fullName,
      businessEmail,
      companyOrganization,
      phoneNumber: phoneNumber || "",
      primaryBusinessArea,
      technologyAreas,
      currentProjectStage:
        currentProjectStage || "",
      requirement,
      preferredContactMethod:
        preferredContactMethod || "Email",
      preferredContactTime:
        preferredContactTime || "",
      contactConsent,
    });

    return res.status(201).json({
      success: true,
      message:
        "Consultation enquiry submitted successfully.",
      data: energy,
    });
  } catch (error) {
    console.error(
      "Create Energy Consultation Error:",
      error
    );

    if (error.name === "ValidationError") {
      const messages = Object.values(
        error.errors
      ).map((err) => err.message);

      return res.status(400).json({
        success: false,
        message:
          messages[0] || "Validation failed.",
        errors: messages,
      });
    }

    return res.status(500).json({
      success: false,
      message:
        "Failed to submit consultation enquiry.",
      error: error.message,
    });
  }
};


// ======================================================
// GET ALL ENERGY CONSULTATIONS
// GET /api/energy
// ======================================================

const getEnergies = async (req, res) => {
  try {
    const energies = await Energy.find().sort({
      createdAt: -1,
    });

    return res.status(200).json({
      success: true,
      count: energies.length,
      data: energies,
    });
  } catch (error) {
    console.error(
      "Get Energy Consultations Error:",
      error
    );

    return res.status(500).json({
      success: false,
      message:
        "Failed to fetch consultations.",
      error: error.message,
    });
  }
};


// ======================================================
// GET SINGLE ENERGY CONSULTATION
// GET /api/energy/:id
// ======================================================

const getEnergyById = async (req, res) => {
  try {
    const energy = await Energy.findById(
      req.params.id
    );

    if (!energy) {
      return res.status(404).json({
        success: false,
        message: "Consultation not found.",
      });
    }

    return res.status(200).json({
      success: true,
      data: energy,
    });
  } catch (error) {
    console.error(
      "Get Energy Consultation Error:",
      error
    );

    return res.status(500).json({
      success: false,
      message:
        "Failed to fetch consultation.",
      error: error.message,
    });
  }
};


// ======================================================
// UPDATE STATUS
// PATCH /api/energy/:id/status
// ======================================================

const updateEnergyStatus = async (req, res) => {
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

    const energy =
      await Energy.findByIdAndUpdate(
        req.params.id,
        { status },
        {
          new: true,
          runValidators: true,
        }
      );

    if (!energy) {
      return res.status(404).json({
        success: false,
        message: "Consultation not found.",
      });
    }

    return res.status(200).json({
      success: true,
      message:
        "Consultation status updated successfully.",
      data: energy,
    });
  } catch (error) {
    console.error(
      "Update Energy Status Error:",
      error
    );

    return res.status(500).json({
      success: false,
      message:
        "Failed to update consultation status.",
      error: error.message,
    });
  }
};


// ======================================================
// DELETE ENERGY CONSULTATION
// DELETE /api/energy/:id
// ======================================================

const deleteEnergy = async (req, res) => {
  try {
    const energy =
      await Energy.findByIdAndDelete(
        req.params.id
      );

    if (!energy) {
      return res.status(404).json({
        success: false,
        message: "Consultation not found.",
      });
    }

    return res.status(200).json({
      success: true,
      message:
        "Consultation deleted successfully.",
    });
  } catch (error) {
    console.error(
      "Delete Energy Consultation Error:",
      error
    );

    return res.status(500).json({
      success: false,
      message:
        "Failed to delete consultation.",
      error: error.message,
    });
  }
};


// ======================================================
// EXPORTS
// ======================================================

module.exports = {
  createEnergy,
  getEnergies,
  getEnergyById,
  updateEnergyStatus,
  deleteEnergy,
};