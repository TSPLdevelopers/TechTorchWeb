const FinancialConsultation = require(
  "../models/FinancialConsultation.model.js"
);


// ======================================================
// CREATE FINANCIAL CONSULTATION
// POST /api/financial-consultations
// ======================================================

const createFinancialConsultation = async (req, res) => {
  try {
    const {
      practiceAreas,
      fullName,
      corporateEmail,
      organizationName,
      designation,
      phone,
      targetTimeline,
      technicalScope,
      mutualNda,
      architectureSession,
    } = req.body;

    if (
      !practiceAreas ||
      !Array.isArray(practiceAreas) ||
      practiceAreas.length === 0 ||
      !fullName ||
      !corporateEmail ||
      !organizationName ||
      !targetTimeline
    ) {
      return res.status(400).json({
        success: false,
        message: "Please fill all required fields.",
      });
    }

    const consultation =
      await FinancialConsultation.create({
        practiceAreas,
        fullName,
        corporateEmail,
        organizationName,
        designation: designation || "",
        phone: phone || "",
        targetTimeline,
        technicalScope: technicalScope || "",
        mutualNda: mutualNda === true,
        architectureSession:
          architectureSession === true,
      });

    return res.status(201).json({
      success: true,
      message:
        "Financial consultation request submitted successfully.",
      data: consultation,
    });
  } catch (error) {
    console.error(
      "Create Financial Consultation Error:",
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
        "Failed to submit financial consultation request.",
    });
  }
};


// ======================================================
// GET ALL
// GET /api/financial-consultations
// ======================================================

const getFinancialConsultations = async (req, res) => {
  try {
    const consultations =
      await FinancialConsultation.find().sort({
        createdAt: -1,
      });

    return res.status(200).json({
      success: true,
      count: consultations.length,
      data: consultations,
    });
  } catch (error) {
    console.error(
      "Get Financial Consultations Error:",
      error
    );

    return res.status(500).json({
      success: false,
      message:
        "Failed to fetch financial consultation requests.",
    });
  }
};


// ======================================================
// GET SINGLE
// GET /api/financial-consultations/:id
// ======================================================

const getFinancialConsultationById = async (req, res) => {
  try {
    const consultation =
      await FinancialConsultation.findById(req.params.id);

    if (!consultation) {
      return res.status(404).json({
        success: false,
        message:
          "Financial consultation request not found.",
      });
    }

    return res.status(200).json({
      success: true,
      data: consultation,
    });
  } catch (error) {
    console.error(
      "Get Financial Consultation Error:",
      error
    );

    return res.status(500).json({
      success: false,
      message:
        "Failed to fetch financial consultation request.",
    });
  }
};


// ======================================================
// UPDATE STATUS
// PATCH /api/financial-consultations/:id/status
// ======================================================

const updateFinancialConsultationStatus = async (
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
      await FinancialConsultation.findByIdAndUpdate(
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
          "Financial consultation request not found.",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Status updated successfully.",
      data: consultation,
    });
  } catch (error) {
    console.error(
      "Update Financial Consultation Status Error:",
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
// DELETE /api/financial-consultations/:id
// ======================================================

const deleteFinancialConsultation = async (req, res) => {
  try {
    const consultation =
      await FinancialConsultation.findByIdAndDelete(
        req.params.id
      );

    if (!consultation) {
      return res.status(404).json({
        success: false,
        message:
          "Financial consultation request not found.",
      });
    }

    return res.status(200).json({
      success: true,
      message:
        "Financial consultation request deleted successfully.",
    });
  } catch (error) {
    console.error(
      "Delete Financial Consultation Error:",
      error
    );

    return res.status(500).json({
      success: false,
      message:
        "Failed to delete financial consultation.",
    });
  }
};


module.exports = {
  createFinancialConsultation,
  getFinancialConsultations,
  getFinancialConsultationById,
  updateFinancialConsultationStatus,
  deleteFinancialConsultation,
};