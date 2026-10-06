const InstitutionConsultation = require("../models/InstitutionConsultation.model");

// ======================================================
// CREATE CONSULTATION
// POST /api/institution-consultations
// ======================================================

const createInstitutionConsultation = async (req, res) => {
  try {
    const {
      institutionName,
      institutionType,
      studentScale,
      areasOfInterest,
      fullName,
      officialEmail,
      designation,
      phone,
      expectedTimeline,
      additionalNotes,
      confidentialityConsent,
    } = req.body;

    // Required fields validation
    if (
      !institutionName ||
      !institutionType ||
      !studentScale ||
      !areasOfInterest ||
      !Array.isArray(areasOfInterest) ||
      areasOfInterest.length === 0 ||
      !fullName ||
      !officialEmail ||
      !designation ||
      !expectedTimeline
    ) {
      return res.status(400).json({
        success: false,
        message: "Please fill all required fields.",
      });
    }

    // Confidentiality checkbox validation
    if (confidentialityConsent !== true) {
      return res.status(400).json({
        success: false,
        message:
          "You must agree to the confidentiality terms before submitting.",
      });
    }

    // Create consultation
    const consultation =
      await InstitutionConsultation.create({
        institutionName,
        institutionType,
        studentScale,
        areasOfInterest,
        fullName,
        officialEmail,
        designation,
        phone: phone || "",
        expectedTimeline,
        additionalNotes: additionalNotes || "",
        confidentialityConsent,
      });

    return res.status(201).json({
      success: true,
      message:
        "Consultation request submitted successfully.",
      data: consultation,
    });
  } catch (error) {
    console.error(
      "Create Institution Consultation Error:",
      error
    );

    // Mongoose validation error
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
      message:
        "Something went wrong while submitting the consultation request.",
    });
  }
};


// ======================================================
// GET ALL CONSULTATIONS
// GET /api/institution-consultations
// ======================================================

const getInstitutionConsultations = async (req, res) => {
  try {
    const consultations =
      await InstitutionConsultation.find().sort({
        createdAt: -1,
      });

    return res.status(200).json({
      success: true,
      count: consultations.length,
      data: consultations,
    });
  } catch (error) {
    console.error(
      "Get Institution Consultations Error:",
      error
    );

    return res.status(500).json({
      success: false,
      message: "Failed to fetch consultation requests.",
    });
  }
};


// ======================================================
// GET SINGLE CONSULTATION
// GET /api/institution-consultations/:id
// ======================================================

const getInstitutionConsultationById = async (req, res) => {
  try {
    const consultation =
      await InstitutionConsultation.findById(req.params.id);

    if (!consultation) {
      return res.status(404).json({
        success: false,
        message: "Consultation request not found.",
      });
    }

    return res.status(200).json({
      success: true,
      data: consultation,
    });
  } catch (error) {
    console.error(
      "Get Institution Consultation Error:",
      error
    );

    return res.status(500).json({
      success: false,
      message: "Failed to fetch consultation request.",
    });
  }
};


// ======================================================
// UPDATE STATUS
// PATCH /api/institution-consultations/:id/status
// ======================================================

const updateConsultationStatus = async (req, res) => {
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
        message: "Invalid consultation status.",
      });
    }

    const consultation =
      await InstitutionConsultation.findByIdAndUpdate(
        req.params.id,
        { status },
        {
          new: true,
          runValidators: true,
        }
      );

    if (!consultation) {
      return res.status(404).json({
        success: false,
        message: "Consultation request not found.",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Consultation status updated successfully.",
      data: consultation,
    });
  } catch (error) {
    console.error(
      "Update Consultation Status Error:",
      error
    );

    return res.status(500).json({
      success: false,
      message: "Failed to update consultation status.",
    });
  }
};


// ======================================================
// DELETE CONSULTATION
// DELETE /api/institution-consultations/:id
// ======================================================

const deleteInstitutionConsultation = async (req, res) => {
  try {
    const consultation =
      await InstitutionConsultation.findByIdAndDelete(
        req.params.id
      );

    if (!consultation) {
      return res.status(404).json({
        success: false,
        message: "Consultation request not found.",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Consultation request deleted successfully.",
    });
  } catch (error) {
    console.error(
      "Delete Institution Consultation Error:",
      error
    );

    return res.status(500).json({
      success: false,
      message: "Failed to delete consultation request.",
    });
  }
};


module.exports = {
  createInstitutionConsultation,
  getInstitutionConsultations,
  getInstitutionConsultationById,
  updateConsultationStatus,
  deleteInstitutionConsultation,
};