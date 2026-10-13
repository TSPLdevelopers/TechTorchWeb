const TalkToExpert = require("../models/TalkToExpert.model");

const createTalkToExpert = async (req, res) => {
  try {
    const { fullName, email, phone, company, preferredTime, message } = req.body;

    const doc = await TalkToExpert.create({
      fullName,
      email,
      phone,
      company,
      preferredTime,
      message,
    });

    res.status(201).json({
      success: true,
      message: "Thank you! Our team will get back to you shortly.",
      data: { _id: doc._id },
    });
  } catch (error) {
    if (error.name === "ValidationError") {
      const msg = Object.values(error.errors).map((e) => e.message).join(", ");
      return res.status(400).json({ success: false, message: msg });
    }
    console.error("Talk To Expert Error:", error);
    res.status(500).json({ success: false, message: "Failed to submit request." });
  }
};

module.exports = { createTalkToExpert };