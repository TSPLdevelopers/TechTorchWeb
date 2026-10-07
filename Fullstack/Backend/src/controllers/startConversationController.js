const StartConversation = require("../models/StartConversation.model");

// ==========================================
// CREATE START CONVERSATION / ENQUIRY
// POST /api/start-conversation
// ==========================================
const createStartConversation = async (req, res) => {
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
      ndaRequested,
    } = req.body;

    // Required field validation
    if (!fullName || !workEmail || !service || !requirement) {
      return res.status(400).json({
        success: false,
        message:
          "Full name, work email, service and requirement are required",
      });
    }

    // Create enquiry
    const enquiry = await StartConversation.create({
      fullName,
      workEmail,
      companyName,
      phoneNumber,
      service,
      requirement,
      currentStage,
      expectedTimeline,
      preferredWayToConnect,
      ndaRequested:
        ndaRequested !== undefined ? ndaRequested : true,
    });

    return res.status(201).json({
      success: true,
      message: "Enquiry submitted successfully. We will get in touch with you soon.",
      data: enquiry,
    });
  } catch (error) {
    console.error("Create Start Conversation Error:", error);

    return res.status(500).json({
      success: false,
      message: "Failed to submit enquiry",
      error: error.message,
    });
  }
};

// ==========================================
// GET ALL ENQUIRIES
// GET /api/start-conversation
// ==========================================
const getStartConversations = async (req, res) => {
  try {
    const enquiries = await StartConversation.find()
      .sort({ createdAt: -1 })
      .lean();

    return res.status(200).json({
      success: true,
      count: enquiries.length,
      data: enquiries,
    });
  } catch (error) {
    console.error("Get Start Conversations Error:", error);

    return res.status(500).json({
      success: false,
      message: "Failed to fetch enquiries",
      error: error.message,
    });
  }
};

// ==========================================
// GET SINGLE ENQUIRY
// GET /api/start-conversation/:id
// ==========================================
const getStartConversationById = async (req, res) => {
  try {
    const enquiry = await StartConversation.findById(req.params.id);

    if (!enquiry) {
      return res.status(404).json({
        success: false,
        message: "Enquiry not found",
      });
    }

    return res.status(200).json({
      success: true,
      data: enquiry,
    });
  } catch (error) {
    console.error("Get Start Conversation Error:", error);

    return res.status(500).json({
      success: false,
      message: "Failed to fetch enquiry",
      error: error.message,
    });
  }
};

// ==========================================
// UPDATE STATUS
// PATCH /api/start-conversation/:id/status
// ==========================================
const updateStartConversationStatus = async (req, res) => {
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

    const enquiry = await StartConversation.findByIdAndUpdate(
      req.params.id,
      { status },
      { new: true, runValidators: true }
    );

    if (!enquiry) {
      return res.status(404).json({
        success: false,
        message: "Enquiry not found",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Status updated successfully",
      data: enquiry,
    });
  } catch (error) {
    console.error("Update Status Error:", error);

    return res.status(500).json({
      success: false,
      message: "Failed to update status",
      error: error.message,
    });
  }
};

// ==========================================
// DELETE ENQUIRY
// DELETE /api/start-conversation/:id
// ==========================================
const deleteStartConversation = async (req, res) => {
  try {
    const enquiry = await StartConversation.findByIdAndDelete(
      req.params.id
    );

    if (!enquiry) {
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
    console.error("Delete Start Conversation Error:", error);

    return res.status(500).json({
      success: false,
      message: "Failed to delete enquiry",
      error: error.message,
    });
  }
};

module.exports = {
  createStartConversation,
  getStartConversations,
  getStartConversationById,
  updateStartConversationStatus,
  deleteStartConversation,
};