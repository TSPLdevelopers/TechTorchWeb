const Infromation = require("../models/information.model");

// ======================================================
// CREATE TECHNOLOGY ENQUIRY
// POST /api/technology-enquiries
// ======================================================

const createTechnologyEnquiry = async (req, res) => {
  try {
    const {
      fullName,
      businessEmail,
      phoneNumber,
      companyOrganization,
      serviceArea,
      requirement,
      preferredContactMethod,
      contactConsent,
    } = req.body;

    // Required fields
    if (
      !fullName ||
      !businessEmail ||
      !companyOrganization ||
      !serviceArea ||
      !requirement ||
      !preferredContactMethod
    ) {
      return res.status(400).json({
        success: false,
        message: "Please fill all required fields.",
      });
    }

    // Consent validation
    if (contactConsent !== true) {
      return res.status(400).json({
        success: false,
        message:
          "Please agree to be contacted regarding your enquiry.",
      });
    }

    const enquiry = await Infromation.create({
      fullName,
      businessEmail,
      phoneNumber: phoneNumber || "",
      companyOrganization,
      serviceArea,
      requirement,
      preferredContactMethod,
      contactConsent,
    });

    return res.status(201).json({
      success: true,
      message: "Technology enquiry submitted successfully.",
      data: enquiry,
    });
  } catch (error) {
    console.error(
      "Create Technology Enquiry Error:",
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
      message: "Failed to submit technology enquiry.",
      error: error.message,
    });
  }
};


// ======================================================
// GET ALL ENQUIRIES
// GET /api/technology-enquiries
// ======================================================

const getTechnologyEnquiries = async (req, res) => {
  try {
    const enquiries = await Infromation.find().sort({
      createdAt: -1,
    });

    return res.status(200).json({
      success: true,
      count: enquiries.length,
      data: enquiries,
    });
  } catch (error) {
    console.error(
      "Get Technology Enquiries Error:",
      error
    );

    return res.status(500).json({
      success: false,
      message: "Failed to fetch technology enquiries.",
      error: error.message,
    });
  }
};


// ======================================================
// GET SINGLE ENQUIRY
// GET /api/technology-enquiries/:id
// ======================================================

const getTechnologyEnquiryById = async (req, res) => {
  try {
    const enquiry = await Infromation.findById(
      req.params.id
    );

    if (!enquiry) {
      return res.status(404).json({
        success: false,
        message: "Technology enquiry not found.",
      });
    }

    return res.status(200).json({
      success: true,
      data: enquiry,
    });
  } catch (error) {
    console.error(
      "Get Technology Enquiry Error:",
      error
    );

    return res.status(500).json({
      success: false,
      message: "Failed to fetch technology enquiry.",
      error: error.message,
    });
  }
};


// ======================================================
// UPDATE STATUS
// PATCH /api/technology-enquiries/:id/status
// ======================================================

const updateTechnologyEnquiryStatus = async (req, res) => {
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

    const enquiry =
      await Infromation.findByIdAndUpdate(
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
        message: "Technology enquiry not found.",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Enquiry status updated successfully.",
      data: enquiry,
    });
  } catch (error) {
    console.error(
      "Update Technology Enquiry Status Error:",
      error
    );

    return res.status(500).json({
      success: false,
      message: "Failed to update enquiry status.",
      error: error.message,
    });
  }
};


// ======================================================
// DELETE ENQUIRY
// DELETE /api/technology-enquiries/:id
// ======================================================

const deleteTechnologyEnquiry = async (req, res) => {
  try {
    const enquiry =
      await Infromation.findByIdAndDelete(
        req.params.id
      );

    if (!enquiry) {
      return res.status(404).json({
        success: false,
        message: "Technology enquiry not found.",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Technology enquiry deleted successfully.",
    });
  } catch (error) {
    console.error(
      "Delete Technology Enquiry Error:",
      error
    );

    return res.status(500).json({
      success: false,
      message: "Failed to delete technology enquiry.",
      error: error.message,
    });
  }
};


// ======================================================
// EXPORTS
// ======================================================

module.exports = {
  createTechnologyEnquiry,
  getTechnologyEnquiries,
  getTechnologyEnquiryById,
  updateTechnologyEnquiryStatus,
  deleteTechnologyEnquiry,
};