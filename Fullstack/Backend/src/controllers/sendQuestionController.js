const SendQuestion = require("../models/SendQuestion.model");

// CREATE QUESTION
const createSendQuestion = async (req, res) => {
  try {
    const {
      fullName,
      businessEmail,
      companyOrganizationName,
      topicArea,
      questionBusinessChallenge,
      urgencyTimeline,
    } = req.body;

    if (
      !fullName ||
      !businessEmail ||
      !topicArea ||
      !questionBusinessChallenge
    ) {
      return res.status(400).json({
        success: false,
        message: "Please fill all required fields.",
      });
    }

    const question = await SendQuestion.create({
      fullName,
      businessEmail,
      companyOrganizationName,
      topicArea,
      questionBusinessChallenge,
      urgencyTimeline,
    });

    return res.status(201).json({
      success: true,
      message:
        "Your question has been submitted successfully. Our advisory team will respond within 1 business day.",
      data: question,
    });
  } catch (error) {
    console.error("Create Send Question Error:", error);

    return res.status(500).json({
      success: false,
      message: "Failed to submit your question.",
      error: error.message,
    });
  }
};

// GET ALL QUESTIONS
const getSendQuestions = async (req, res) => {
  try {
    const questions = await SendQuestion.find().sort({
      createdAt: -1,
    });

    return res.status(200).json({
      success: true,
      count: questions.length,
      data: questions,
    });
  } catch (error) {
    console.error("Get Send Questions Error:", error);

    return res.status(500).json({
      success: false,
      message: "Failed to fetch questions.",
      error: error.message,
    });
  }
};

// GET SINGLE QUESTION
const getSendQuestionById = async (req, res) => {
  try {
    const question = await SendQuestion.findById(req.params.id);

    if (!question) {
      return res.status(404).json({
        success: false,
        message: "Question not found.",
      });
    }

    return res.status(200).json({
      success: true,
      data: question,
    });
  } catch (error) {
    console.error("Get Send Question Error:", error);

    return res.status(500).json({
      success: false,
      message: "Failed to fetch question.",
      error: error.message,
    });
  }
};

// UPDATE STATUS
const updateSendQuestionStatus = async (req, res) => {
  try {
    const { status } = req.body;

    const allowedStatuses = [
      "new",
      "reviewed",
      "responded",
      "closed",
    ];

    if (!allowedStatuses.includes(status)) {
      return res.status(400).json({
        success: false,
        message: "Invalid status.",
      });
    }

    const question = await SendQuestion.findByIdAndUpdate(
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
        message: "Question not found.",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Question status updated successfully.",
      data: question,
    });
  } catch (error) {
    console.error("Update Question Status Error:", error);

    return res.status(500).json({
      success: false,
      message: "Failed to update question status.",
      error: error.message,
    });
  }
};

// DELETE QUESTION
const deleteSendQuestion = async (req, res) => {
  try {
    const question = await SendQuestion.findByIdAndDelete(
      req.params.id
    );

    if (!question) {
      return res.status(404).json({
        success: false,
        message: "Question not found.",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Question deleted successfully.",
    });
  } catch (error) {
    console.error("Delete Question Error:", error);

    return res.status(500).json({
      success: false,
      message: "Failed to delete question.",
      error: error.message,
    });
  }
};

module.exports = {
  createSendQuestion,
  getSendQuestions,
  getSendQuestionById,
  updateSendQuestionStatus,
  deleteSendQuestion,
};