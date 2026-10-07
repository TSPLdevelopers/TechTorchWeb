const GeneralEnquiry = require(
  "../models/GeneralEnquiry.model"
);


// ======================================================
// CREATE ENQUIRY
// POST /api/general-enquiries
// ======================================================

const createGeneralEnquiry = async (req, res) => {
  try {
    const {
      fullName,
      businessEmail,
      phoneNumber,
      companyOrganization,
      areaOfInterest,
      requirement,
      preferredContactMethod,
      contactConsent,
      projectStage,
      timeline,
    } = req.body;

    // Required fields
    if (
      !fullName ||
      !businessEmail ||
      !companyOrganization ||
      !areaOfInterest ||
      !preferredContactMethod
    ) {
      return res.status(400).json({
        success: false,
        message: "Please fill all required fields.",
      });
    }

    // Consent required
    if (contactConsent !== true) {
      return res.status(400).json({
        success: false,
        message:
          "Please agree to be contacted regarding your enquiry.",
      });
    }

    const enquiry = await GeneralEnquiry.create({
      fullName,
      businessEmail,
      phoneNumber: phoneNumber || "",
      companyOrganization,
      areaOfInterest,
      requirement: requirement || "",
      preferredContactMethod,
      contactConsent,
      projectStage: projectStage || "",
      timeline: timeline || "",
    });

    return res.status(201).json({
      success: true,
      message: "Enquiry submitted successfully.",
      data: enquiry,
    });
  } catch (error) {
    console.error("Create General Enquiry Error:", error);

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
      message: "Failed to submit enquiry.",
    });
  }
};


// ======================================================
// GET ALL ENQUIRIES
// GET /api/general-enquiries
// ======================================================

const getGeneralEnquiries = async (req, res) => {
  try {
    const enquiries = await GeneralEnquiry.find().sort({
      createdAt: -1,
    });

    return res.status(200).json({
      success: true,
      count: enquiries.length,
      data: enquiries,
    });
  } catch (error) {
    console.error("Get General Enquiries Error:", error);

    return res.status(500).json({
      success: false,
      message: "Failed to fetch enquiries.",
    });
  }
};


// ======================================================
// GET SINGLE ENQUIRY
// GET /api/general-enquiries/:id
// ======================================================

const getGeneralEnquiryById = async (req, res) => {
  try {
    const enquiry = await GeneralEnquiry.findById(
      req.params.id
    );

    if (!enquiry) {
      return res.status(404).json({
        success: false,
        message: "Enquiry not found.",
      });
    }

    return res.status(200).json({
      success: true,
      data: enquiry,
    });
  } catch (error) {
    console.error("Get General Enquiry Error:", error);

    return res.status(500).json({
      success: false,
      message: "Failed to fetch enquiry.",
    });
  }
};


// ======================================================
// UPDATE STATUS
// PATCH /api/general-enquiries/:id/status
// ======================================================

const updateGeneralEnquiryStatus = async (req, res) => {
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

    const enquiry = await GeneralEnquiry.findByIdAndUpdate(
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
        message: "Enquiry not found.",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Enquiry status updated successfully.",
      data: enquiry,
    });
  } catch (error) {
    console.error(
      "Update General Enquiry Status Error:",
      error
    );

    return res.status(500).json({
      success: false,
      message: "Failed to update enquiry status.",
    });
  }
};


// ======================================================
// DELETE ENQUIRY
// DELETE /api/general-enquiries/:id
// ======================================================

const deleteGeneralEnquiry = async (req, res) => {
  try {
    const enquiry = await GeneralEnquiry.findByIdAndDelete(
      req.params.id
    );

    if (!enquiry) {
      return res.status(404).json({
        success: false,
        message: "Enquiry not found.",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Enquiry deleted successfully.",
    });
  } catch (error) {
    console.error("Delete General Enquiry Error:", error);

    return res.status(500).json({
      success: false,
      message: "Failed to delete enquiry.",
    });
  }
};


module.exports = {
  createGeneralEnquiry,
  getGeneralEnquiries,
  getGeneralEnquiryById,
  updateGeneralEnquiryStatus,
  deleteGeneralEnquiry,
};