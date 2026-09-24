const Whitepaper = require("../models/Whitepaper.model");

const createWhitepaper = async (req, res) => {
  try {
    const whitepaper = await Whitepaper.create(req.body);

    res.status(201).json({
      success: true,
      message: "Whitepaper created successfully",
      data: whitepaper,
    });
  } catch (error) {
    console.error("Create whitepaper error:", error);

    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

const getAllWhitepapers = async (req, res) => {
  try {
    const whitepapers = await Whitepaper.find().sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      data: whitepapers,
    });
  } catch (error) {
    console.error("Get whitepapers error:", error);

    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

const getWhitepaperById = async (req, res) => {
  try {
    const whitepaper = await Whitepaper.findById(req.params.id);

    if (!whitepaper) {
      return res.status(404).json({
        success: false,
        message: "Whitepaper not found",
      });
    }

    res.status(200).json({
      success: true,
      data: whitepaper,
    });
  } catch (error) {
    console.error("Get whitepaper error:", error);

    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

const updateWhitepaper = async (req, res) => {
  try {
    const whitepaper = await Whitepaper.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );

    if (!whitepaper) {
      return res.status(404).json({
        success: false,
        message: "Whitepaper not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Whitepaper updated successfully",
      data: whitepaper,
    });
  } catch (error) {
    console.error("Update whitepaper error:", error);

    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

const deleteWhitepaper = async (req, res) => {
  try {
    const whitepaper = await Whitepaper.findByIdAndDelete(req.params.id);

    if (!whitepaper) {
      return res.status(404).json({
        success: false,
        message: "Whitepaper not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Whitepaper deleted successfully",
    });
  } catch (error) {
    console.error("Delete whitepaper error:", error);

    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  createWhitepaper,
  getAllWhitepapers,
  getWhitepaperById,
  updateWhitepaper,
  deleteWhitepaper,
};