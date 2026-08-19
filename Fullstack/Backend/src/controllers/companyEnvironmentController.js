const mongoose = require("mongoose");
const CompanyEnvironment = require("../models/CompanyEnvironment.model");
const asyncHandler = require("../utils/asyncHandler");



const getAllCompanyEnvironments = asyncHandler(async (req, res) => {
  const items = await CompanyEnvironment.find().sort({ createdAt: -1 });

  return res.status(200).json({
    success: true,
    count: items.length,
    data: items,
  });
});



const getCompanyEnvironmentById = asyncHandler(async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({
      success: false,
      message: "Invalid ID format",
    });
  }

  const item = await CompanyEnvironment.findById(id);

  if (!item) {
    return res.status(404).json({
      success: false,
      message: "CompanyEnvironment not found",
    });
  }

  return res.status(200).json({
    success: true,
    data: item,
  });
});



const createCompanyEnvironment = asyncHandler(async (req, res) => {
  const newItem = new CompanyEnvironment(req.body);

  const savedItem = await newItem.save();

  return res.status(201).json({
    success: true,
    data: savedItem,
  });
});



const updateCompanyEnvironment = asyncHandler(async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({
      success: false,
      message: "Invalid ID format",
    });
  }

  const updatedItem = await CompanyEnvironment.findByIdAndUpdate(
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
      message: "CompanyEnvironment not found",
    });
  }

  return res.status(200).json({
    success: true,
    data: updatedItem,
  });
});


const deleteCompanyEnvironment = asyncHandler(async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({
      success: false,
      message: "Invalid ID format",
    });
  }

  const deletedItem = await CompanyEnvironment.findByIdAndDelete(id);

  if (!deletedItem) {
    return res.status(404).json({
      success: false,
      message: "CompanyEnvironment not found",
    });
  }

  return res.status(200).json({
    success: true,
    message: "Deleted successfully",
    data: deletedItem,
  });
});


module.exports = {
  getAllCompanyEnvironments,
  getCompanyEnvironmentById,
  createCompanyEnvironment,
  updateCompanyEnvironment,
  deleteCompanyEnvironment,
};