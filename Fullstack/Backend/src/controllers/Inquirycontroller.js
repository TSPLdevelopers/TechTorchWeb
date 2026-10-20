const Inquiry = require("../models/Inquiry.model");

const FORM_LABELS = {
  manufacturing: "Manufacturing",
  "msp-support": "MSP Support",
  "offshore-requirements": "Offshore Requirements",
  "offshore-team": "Offshore Team",
};

// POST /api/inquiries  (public website forms without their own collection)
const createInquiry = async (req, res) => {
  try {
    const { formType, fullName, email, company, phone, topic, message, details } = req.body || {};

    if (!Inquiry.PUBLIC_FORM_TYPES.includes(formType)) {
      return res.status(400).json({ success: false, message: "Unknown form type." });
    }

    // topic shows which form it came from in the admin Queries list
    const label = FORM_LABELS[formType];
    const fullTopic = topic ? `${label} - ${topic}` : label;

    const inquiry = await Inquiry.create({
      formType,
      fullName,
      email,
      company,
      phone,
      topic: fullTopic,
      message,
      details: details && typeof details === "object" && !Array.isArray(details) ? details : {},
    });

    return res.status(201).json({
      success: true,
      message: "Your request has been submitted successfully.",
      data: { _id: inquiry._id },
    });
  } catch (error) {
    if (error.name === "ValidationError") {
      const messages = Object.values(error.errors).map((e) => e.message);
      return res.status(400).json({ success: false, message: messages[0] || "Validation failed.", errors: messages });
    }
    console.error("Create Inquiry Error:", error);
    return res.status(500).json({ success: false, message: "Failed to submit your request." });
  }
};

module.exports = { createInquiry };