const Telecommunication = require(
  "../models/telecommunication.model"
);

// ======================================================
// CREATE TELECOMMUNICATION REQUIREMENTS
// POST /api/telecommunication
// ======================================================

const createTelecommunication = async (req, res) => {
  try {
    const {
      focusAreas,
      fullName,
      corporateEmail,
      companyOrganizationName,
      phoneNumber,
      projectDetails,
      mutualNdaRequested,
      immediateConsultationRequested,
    } = req.body;

    // Required fields
    if (
      !fullName ||
      !corporateEmail ||
      !companyOrganizationName
    ) {
      return res.status(400).json({
        success: false,
        message: "Please fill all required fields.",
      });
    }

    // Focus areas validation
    if (
      !Array.isArray(focusAreas) ||
      focusAreas.length === 0
    ) {
      return res.status(400).json({
        success: false,
        message:
          "Please select at least one focus area.",
      });
    }

    const telecommunication =
      await Telecommunication.create({
        focusAreas,
        fullName,
        corporateEmail,
        companyOrganizationName,
        phoneNumber: phoneNumber || "",
        projectDetails: projectDetails || "",
        mutualNdaRequested:
          mutualNdaRequested === true,
        immediateConsultationRequested:
          immediateConsultationRequested === true,
      });

    return res.status(201).json({
      success: true,
      message:
        "Telecommunication requirements submitted successfully.",
      data: telecommunication,
    });
  } catch (error) {
    console.error(
      "Create Telecommunication Error:",
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
        "Failed to submit telecommunication requirements.",
      error: error.message,
    });
  }
};


// ======================================================
// GET ALL
// GET /api/telecommunication
// ======================================================

const getTelecommunications = async (req, res) => {
  try {
    const telecommunications =
      await Telecommunication.find().sort({
        createdAt: -1,
      });

    return res.status(200).json({
      success: true,
      count: telecommunications.length,
      data: telecommunications,
    });
  } catch (error) {
    console.error(
      "Get Telecommunications Error:",
      error
    );

    return res.status(500).json({
      success: false,
      message:
        "Failed to fetch telecommunication requirements.",
      error: error.message,
    });
  }
};


// ======================================================
// GET SINGLE
// GET /api/telecommunication/:id
// ======================================================

const getTelecommunicationById = async (
  req,
  res
) => {
  try {
    const telecommunication =
      await Telecommunication.findById(
        req.params.id
      );

    if (!telecommunication) {
      return res.status(404).json({
        success: false,
        message:
          "Telecommunication requirement not found.",
      });
    }

    return res.status(200).json({
      success: true,
      data: telecommunication,
    });
  } catch (error) {
    console.error(
      "Get Telecommunication Error:",
      error
    );

    return res.status(500).json({
      success: false,
      message:
        "Failed to fetch telecommunication requirement.",
      error: error.message,
    });
  }
};


// ======================================================
// UPDATE STATUS
// PATCH /api/telecommunication/:id/status
// ======================================================

const updateTelecommunicationStatus = async (
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

    const telecommunication =
      await Telecommunication.findByIdAndUpdate(
        req.params.id,
        { status },
        {
          new: true,
          runValidators: true,
        }
      );

    if (!telecommunication) {
      return res.status(404).json({
        success: false,
        message:
          "Telecommunication requirement not found.",
      });
    }

    return res.status(200).json({
      success: true,
      message:
        "Telecommunication status updated successfully.",
      data: telecommunication,
    });
  } catch (error) {
    console.error(
      "Update Telecommunication Status Error:",
      error
    );

    return res.status(500).json({
      success: false,
      message:
        "Failed to update telecommunication status.",
      error: error.message,
    });
  }
};


// ======================================================
// DELETE
// DELETE /api/telecommunication/:id
// ======================================================

const deleteTelecommunication = async (
  req,
  res
) => {
  try {
    const telecommunication =
      await Telecommunication.findByIdAndDelete(
        req.params.id
      );

    if (!telecommunication) {
      return res.status(404).json({
        success: false,
        message:
          "Telecommunication requirement not found.",
      });
    }

    return res.status(200).json({
      success: true,
      message:
        "Telecommunication requirement deleted successfully.",
    });
  } catch (error) {
    console.error(
      "Delete Telecommunication Error:",
      error
    );

    return res.status(500).json({
      success: false,
      message:
        "Failed to delete telecommunication requirement.",
      error: error.message,
    });
  }
};


// ======================================================
// EXPORTS
// ======================================================

module.exports = {
  createTelecommunication,
  getTelecommunications,
  getTelecommunicationById,
  updateTelecommunicationStatus,
  deleteTelecommunication,
};