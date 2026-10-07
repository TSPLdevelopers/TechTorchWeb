const ExploreQuestion = require("../models/ExploreQuestion.model");

// CREATE
const createExploreQuestion = async (req, res) => {
  try {
    const {
      fullName,
      businessEmail,
      companyName,
      inquiryArea,
      question,
      urgencyTimeline,
    } = req.body;

    if (!fullName || !businessEmail || !inquiryArea || !question) {
      return res.status(400).json({
        success: false,
        message:
          "Full name, business email, inquiry area and question are required",
      });
    }

    const enquiry = await ExploreQuestion.create({
      fullName,
      businessEmail,
      companyName,
      inquiryArea,
      question,
      urgencyTimeline,
    });

    res.status(201).json({
      success: true,
      message: "Question submitted successfully",
      data: enquiry,
    });
  } catch (error) {
    console.error("Create Explore Question Error:", error);

    res.status(500).json({
      success: false,
      message: "Failed to submit question",
      error: error.message,
    });
  }
};

// GET ALL
const getExploreQuestions = async (req, res) => {
  try {
    const questions = await ExploreQuestion.find()
      .sort({ createdAt: -1 })
      .lean();

    res.status(200).json({
      success: true,
      count: questions.length,
      data: questions,
    });
  } catch (error) {
    console.error("Get Explore Questions Error:", error);

    res.status(500).json({
      success: false,
      message: "Failed to fetch questions",
      error: error.message,
    });
  }
};

// GET BY ID
const getExploreQuestionById = async (req, res) => {
  try {
    const question = await ExploreQuestion.findById(req.params.id);

    if (!question) {
      return res.status(404).json({
        success: false,
        message: "Question not found",
      });
    }

    res.status(200).json({
      success: true,
      data: question,
    });
  } catch (error) {
    console.error("Get Explore Question By ID Error:", error);

    res.status(500).json({
      success: false,
      message: "Failed to fetch question",
      error: error.message,
    });
  }
};

// UPDATE STATUS
const updateExploreQuestionStatus = async (req, res) => {
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

    const question = await ExploreQuestion.findByIdAndUpdate(
      req.params.id,
      { status },
      {
        new: true,
        runValidators: true,
      }
    );

    if (!question) {
      return res.status(404).json({
        success: false,
        message: "Question not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Status updated successfully",
      data: question,
    });
  } catch (error) {
    console.error("Update Status Error:", error);

    res.status(500).json({
      success: false,
      message: "Failed to update status",
      error: error.message,
    });
  }
};

// DELETE
const deleteExploreQuestion = async (req, res) => {
  try {
    const question = await ExploreQuestion.findByIdAndDelete(
      req.params.id
    );

    if (!question) {
      return res.status(404).json({
        success: false,
        message: "Question not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Question deleted successfully",
    });
  } catch (error) {
    console.error("Delete Explore Question Error:", error);

    res.status(500).json({
      success: false,
      message: "Failed to delete question",
      error: error.message,
    });
  }
};

module.exports = {
  createExploreQuestion,
  getExploreQuestions,
  getExploreQuestionById,
  updateExploreQuestionStatus,
  deleteExploreQuestion,
};