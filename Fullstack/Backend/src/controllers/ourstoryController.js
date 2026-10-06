const OurStory = require("../models/ourstory.model");

// CREATE
const createOurStory = async (req, res) => {
  try {
    const {
      fullName,
      companyEmail,
      industry,
      message,
    } = req.body;

    if (!fullName || !companyEmail || !industry || !message) {
      return res.status(400).json({
        success: false,
        message: "Please fill all required fields",
      });
    }

    const enquiry = await OurStory.create({
      fullName,
      companyEmail,
      industry,
      message,
    });

    return res.status(201).json({
      success: true,
      message: "Our Story inquiry submitted successfully",
      data: enquiry,
    });
  } catch (error) {
    console.error("Create Our Story Error:", error);

    return res.status(500).json({
      success: false,
      message: "Server error",
      error: error.message,
    });
  }
};

// GET ALL
const getOurStories = async (req, res) => {
  try {
    const enquiries = await OurStory.find().sort({
      createdAt: -1,
    });

    return res.status(200).json({
      success: true,
      count: enquiries.length,
      data: enquiries,
    });
  } catch (error) {
    console.error("Get Our Stories Error:", error);

    return res.status(500).json({
      success: false,
      message: "Server error",
      error: error.message,
    });
  }
};

// GET BY ID
const getOurStoryById = async (req, res) => {
  try {
    const enquiry = await OurStory.findById(req.params.id);

    if (!enquiry) {
      return res.status(404).json({
        success: false,
        message: "Our Story inquiry not found",
      });
    }

    return res.status(200).json({
      success: true,
      data: enquiry,
    });
  } catch (error) {
    console.error("Get Our Story Error:", error);

    return res.status(500).json({
      success: false,
      message: "Server error",
      error: error.message,
    });
  }
};

// UPDATE STATUS
const updateOurStoryStatus = async (req, res) => {
  try {
    const { status } = req.body;

    const enquiry = await OurStory.findByIdAndUpdate(
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
        message: "Our Story inquiry not found",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Status updated successfully",
      data: enquiry,
    });
  } catch (error) {
    console.error("Update Our Story Status Error:", error);

    return res.status(500).json({
      success: false,
      message: "Server error",
      error: error.message,
    });
  }
};

// DELETE
const deleteOurStory = async (req, res) => {
  try {
    const enquiry = await OurStory.findByIdAndDelete(req.params.id);

    if (!enquiry) {
      return res.status(404).json({
        success: false,
        message: "Our Story inquiry not found",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Our Story inquiry deleted successfully",
    });
  } catch (error) {
    console.error("Delete Our Story Error:", error);

    return res.status(500).json({
      success: false,
      message: "Server error",
      error: error.message,
    });
  }
};

module.exports = {
  createOurStory,
  getOurStories,
  getOurStoryById,
  updateOurStoryStatus,
  deleteOurStory,
};