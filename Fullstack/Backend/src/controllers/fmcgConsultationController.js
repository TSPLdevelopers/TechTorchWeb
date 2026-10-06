const FmcgConsultation = require(
  "../models/FmcgConsultation.model"
);


// ======================================================
// CREATE FMCG CONSULTATION
// POST /api/fmcg-consultations
// ======================================================

const createFmcgConsultation = async (req, res) => {
  try {
    const {
      businessAreas,
      technologyRequirements,
      projectStage,
      fullName,
      businessEmail,
      companyOrganization,
      phoneNumber,
      requirement,
      contactConsent,
    } = req.body;

    if (
      !businessAreas ||
      !Array.isArray(businessAreas) ||
      businessAreas.length === 0 ||
      !technologyRequirements ||
      !Array.isArray(technologyRequirements) ||
      technologyRequirements.length === 0 ||
      !projectStage ||
      !fullName ||
      !businessEmail ||
      !companyOrganization
    ) {
      return res.status(400).json({
        success: false,
        message: "Please fill all required fields.",
      });
    }

    if (contactConsent !== true) {
      return res.status(400).json({
        success: false,
        message:
          "Please agree to be contacted by TechTorch.",
      });
    }

    const consultation = await FmcgConsultation.create({
      businessAreas,
      technologyRequirements,
      projectStage,
      fullName,
      businessEmail,
      companyOrganization,
      phoneNumber: phoneNumber || "",
      requirement: requirement || "",
      contactConsent,
    });

    return res.status(201).json({
      success: true,
      message:
        "FMCG consultation request submitted successfully.",
      data: consultation,
    });
  } catch (error) {
    console.error(
      "Create FMCG Consultation Error:",
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
        "Failed to submit FMCG consultation request.",
    });
  }
};


// ======================================================
// GET ALL
// GET /api/fmcg-consultations
// ======================================================

const getFmcgConsultations = async (req, res) => {
  try {
    const consultations =
      await FmcgConsultation.find().sort({
        createdAt: -1,
      });

    return res.status(200).json({
      success: true,
      count: consultations.length,
      data: consultations,
    });
  } catch (error) {
    console.error(
      "Get FMCG Consultations Error:",
      error
    );

    return res.status(500).json({
      success: false,
      message:
        "Failed to fetch FMCG consultation requests.",
    });
  }
};


// ======================================================
// GET SINGLE
// GET /api/fmcg-consultations/:id
// ======================================================

const getFmcgConsultationById = async (req, res) => {
  try {
    const consultation =
      await FmcgConsultation.findById(req.params.id);

    if (!consultation) {
      return res.status(404).json({
        success: false,
        message: "FMCG consultation not found.",
      });
    }

    return res.status(200).json({
      success: true,
      data: consultation,
    });
  } catch (error) {
    console.error(
      "Get FMCG Consultation Error:",
      error
    );

    return res.status(500).json({
      success: false,
      message:
        "Failed to fetch FMCG consultation.",
    });
  }
};


// ======================================================
// UPDATE STATUS
// PATCH /api/fmcg-consultations/:id/status
// ======================================================

const updateFmcgConsultationStatus = async (
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
      await FmcgConsultation.findByIdAndUpdate(
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
        message: "FMCG consultation not found.",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Status updated successfully.",
      data: consultation,
    });
  } catch (error) {
    console.error(
      "Update FMCG Consultation Status Error:",
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
// DELETE /api/fmcg-consultations/:id
// ======================================================

const deleteFmcgConsultation = async (req, res) => {
  try {
    const consultation =
      await FmcgConsultation.findByIdAndDelete(
        req.params.id
      );

    if (!consultation) {
      return res.status(404).json({
        success: false,
        message: "FMCG consultation not found.",
      });
    }

    return res.status(200).json({
      success: true,
      message:
        "FMCG consultation deleted successfully.",
    });
  } catch (error) {
    console.error(
      "Delete FMCG Consultation Error:",
      error
    );

    return res.status(500).json({
      success: false,
      message: "Failed to delete FMCG consultation.",
    });
  }
};


module.exports = {
  createFmcgConsultation,
  getFmcgConsultations,
  getFmcgConsultationById,
  updateFmcgConsultationStatus,
  deleteFmcgConsultation,
};