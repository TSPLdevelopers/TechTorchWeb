const mongoose = require("mongoose");
const Opportunity = require("../models/Opportunity.model");
const asyncHandler = require("../utils/asyncHandler");

const getAllOpportunities = asyncHandler(async (req, res) => {
  const items = await Opportunity.find().sort({ createdAt: -1 });

  return res.status(200).json({
    success: true,
    count: items.length,
    data: items,
  });
});

const getOpportunityById = asyncHandler(async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({
      success: false,
      message: "Invalid ID format",
    });
  }

  const item = await Opportunity.findById(id);

  if (!item) {
    return res.status(404).json({
      success: false,
      message: "Opportunity not found",
    });
  }

  return res.status(200).json({
    success: true,
    data: item,
  });
});

const createOpportunity = asyncHandler(async (req, res) => {
  const newItem = new Opportunity(req.body);

  const savedItem = await newItem.save();

  return res.status(201).json({
    success: true,
    data: savedItem,
  });
});

const updateOpportunity = asyncHandler(async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({
      success: false,
      message: "Invalid ID format",
    });
  }

  const updatedItem = await Opportunity.findByIdAndUpdate(
    id,
    req.body,
    {
      new: true,
      runValidators: true,
    }
  );

  if (!updatedItem) {
    return res.status(404).json({
      success: false,
      message: "Opportunity not found",
    });
  }

  return res.status(200).json({
    success: true,
    data: updatedItem,
  });
});

const deleteOpportunity = asyncHandler(async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({
      success: false,
      message: "Invalid ID format",
    });
  }

  const deletedItem = await Opportunity.findByIdAndDelete(id);

  if (!deletedItem) {
    return res.status(404).json({
      success: false,
      message: "Opportunity not found",
    });
  }

  return res.status(200).json({
    success: true,
    message: "Deleted successfully",
    data: deletedItem,
  });
});

module.exports = {
  getAllOpportunities,
  getOpportunityById,
  createOpportunity,
  updateOpportunity,
  deleteOpportunity,
};