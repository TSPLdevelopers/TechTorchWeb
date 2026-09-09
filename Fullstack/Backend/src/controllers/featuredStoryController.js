const mongoose = require("mongoose");
const FeaturedStory = require("../models/FeaturedStory.model");
const asyncHandler = require("../utils/asyncHandler");
const getAllFeaturedStories = asyncHandler(async (req, res) => {
  const items = await FeaturedStory.find().sort({ createdAt: -1 });

  return res.status(200).json({
    success: true,
    count: items.length,
    data: items,
  });
});
const getFeaturedStoryById = asyncHandler(async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({
      success: false,
      message: "Invalid ID format",
    });
  }

  const item = await FeaturedStory.findById(id);
  if (!item) {
    return res.status(404).json({
      success: false,
      message: "FeaturedStory not found",
    });
  }

  return res.status(200).json({
    success: true,
    data: item,
  });
});
const createFeaturedStory = asyncHandler(async (req, res) => {
  const newItem = new FeaturedStory(req.body);

  const savedItem = await newItem.save();

  return res.status(201).json({
    success: true,
    data: savedItem,
  });
});
const updateFeaturedStory = asyncHandler(async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({
      success: false,
      message: "Invalid ID format",
    });
  }
 const updatedItem = await FeaturedStory.findByIdAndUpdate(
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
      message: "FeaturedStory not found",
    });
  }

  return res.status(200).json({
    success: true,
    data: updatedItem,
  });
});
const deleteFeaturedStory = asyncHandler(async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({
      success: false,
      message: "Invalid ID format",
    });
  }
   const deletedItem = await FeaturedStory.findByIdAndDelete(id);

  if (!deletedItem) {
    return res.status(404).json({
      success: false,
      message: "FeaturedStory not found",
    });
  }

  return res.status(200).json({
    success: true,
    message: "Deleted successfully",
    data: deletedItem,
  });
});


module.exports = {
  getAllFeaturedStories,
  getFeaturedStoryById,
  createFeaturedStory,
  updateFeaturedStory,
  deleteFeaturedStory,
};