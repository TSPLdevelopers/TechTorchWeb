const ExpertQuery = require("../models/ExpertQuery.model");

const createExpertQuery = async (req, res) => {
  try {
    const { fullName, email, phone, company, preferredTime, details } = req.body;

    await ExpertQuery.create({
      fullName,
      email,
      phone,
      company,
      preferredTime,
      message: details,
    });

    res.status(201).json({
      success: true,
      message: "Thank you! Your request has been submitted successfully.",
    });
  } catch (error) {
    if (error.name === "ValidationError") {
      const msg = Object.values(error.errors).map((e) => e.message).join(", ");
      return res.status(400).json({ success: false, message: msg });
    }
    console.error("Expert Query Error:", error);
    res.status(500).json({ success: false, message: "Failed to submit your request." });
  }
};

module.exports = { createExpertQuery };