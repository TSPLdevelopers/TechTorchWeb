const HealthcareConsultation = require(
  "../models/HealthcareConsultation.model"
);


// ======================================================
// CREATE HEALTHCARE CONSULTATION
// POST /api/healthcare-consultations
// ======================================================

const createHealthcareConsultation = async (req, res) => {
  try {
    const {
      healthcareRequirements,
      facilityType,
      patientVolume,
      fullNameDesignation,
      workEmail,
      organizationName,
      phone,
      consultationWindow,
      challengeScope,
      healthcareNdaRequested,
    } = req.body;

    // Required fields
    if (
      !healthcareRequirements ||
      !Array.isArray(healthcareRequirements) ||
      healthcareRequirements.length === 0 ||
      !facilityType ||
      !patientVolume ||
      !fullNameDesignation ||
      !workEmail ||
      !organizationName ||
      !phone ||
      !consultationWindow
    ) {
      return res.status(400).json({
        success: false,
        message: "Please fill all required fields.",
      });
    }

    const consultation =
      await HealthcareConsultation.create({
        healthcareRequirements,
        facilityType,
        patientVolume,
        fullNameDesignation,
        workEmail,
        organizationName,
        phone,
        consultationWindow,
        challengeScope: challengeScope || "",
        healthcareNdaRequested:
          healthcareNdaRequested === true,
      });

    return res.status(201).json({
      success: true,
      message:
        "Healthcare consultation request submitted successfully.",
      data: consultation,
    });
  } catch (error) {
    console.error(
      "Create Healthcare Consultation Error:",
      error
    );

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
        "Failed to submit healthcare consultation request.",
    });
  }
};


// ======================================================
// GET ALL
// GET /api/healthcare-consultations
// ======================================================

const getHealthcareConsultations = async (req, res) => {
  try {
    const consultations =
      await HealthcareConsultation.find().sort({
        createdAt: -1,
      });

    return res.status(200).json({
      success: true,
      count: consultations.length,
      data: consultations,
    });
  } catch (error) {
    console.error(
      "Get Healthcare Consultations Error:",
      error
    );

    return res.status(500).json({
      success: false,
      message:
        "Failed to fetch healthcare consultation requests.",
    });
  }
};


// ======================================================
// GET SINGLE
// GET /api/healthcare-consultations/:id
// ======================================================

const getHealthcareConsultationById = async (req, res) => {
  try {
    const consultation =
      await HealthcareConsultation.findById(req.params.id);

    if (!consultation) {
      return res.status(404).json({
        success: false,
        message:
          "Healthcare consultation request not found.",
      });
    }

    return res.status(200).json({
      success: true,
      data: consultation,
    });
  } catch (error) {
    console.error(
      "Get Healthcare Consultation Error:",
      error
    );

    return res.status(500).json({
      success: false,
      message:
        "Failed to fetch healthcare consultation request.",
    });
  }
};


// ======================================================
// UPDATE STATUS
// PATCH /api/healthcare-consultations/:id/status
// ======================================================

const updateHealthcareConsultationStatus = async (
  req,
  res
) => {
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

    const consultation =
      await HealthcareConsultation.findByIdAndUpdate(
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
        message:
          "Healthcare consultation request not found.",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Status updated successfully.",
      data: consultation,
    });
  } catch (error) {
    console.error(
      "Update Healthcare Consultation Status Error:",
      error
    );

    return res.status(500).json({
      success: false,
      message: "Failed to update status.",
    });
  }
};


// ======================================================
// DELETE
// DELETE /api/healthcare-consultations/:id
// ======================================================

const deleteHealthcareConsultation = async (req, res) => {
  try {
    const consultation =
      await HealthcareConsultation.findByIdAndDelete(
        req.params.id
      );

    if (!consultation) {
      return res.status(404).json({
        success: false,
        message:
          "Healthcare consultation request not found.",
      });
    }

    return res.status(200).json({
      success: true,
      message:
        "Healthcare consultation request deleted successfully.",
    });
  } catch (error) {
    console.error(
      "Delete Healthcare Consultation Error:",
      error
    );

    return res.status(500).json({
      success: false,
      message:
        "Failed to delete healthcare consultation.",
    });
  }
};


module.exports = {
  createHealthcareConsultation,
  getHealthcareConsultations,
  getHealthcareConsultationById,
  updateHealthcareConsultationStatus,
  deleteHealthcareConsultation,
};