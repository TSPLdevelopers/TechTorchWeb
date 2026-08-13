
const mongoose = require("mongoose");
const CompanyEnvironment = require("../models/CompanyEnvironment.model");

const getAllCompanyEnvironments = async (req, res) => {
  try {
    const items = await CompanyEnvironment.find().sort({ createdAt: -1 });
    return res.status(200).json({ success: true, count: items.length, data: items });
  } catch (error) {
    return res.status(500).json({ success: false, message: "Server error", error: error.message });
  }
};

const getCompanyEnvironmentById = async (req, res) => {
  try {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ success: false, message: "Invalid ID format" });
    }
    const item = await CompanyEnvironment.findById(id);
    if (!item) {
      return res.status(404).json({ success: false, message: "CompanyEnvironment not found" });
    }
    return res.status(200).json({ success: true, data: item });
  } catch (error) {
    return res.status(500).json({ success: false, message: "Server error", error: error.message });
  }
};

const createCompanyEnvironment = async (req, res) => {
  try {
    const newItem = new CompanyEnvironment(req.body);
    const savedItem = await newItem.save();
    return res.status(201).json({ success: true, data: savedItem });
  } catch (error) {
    return res.status(400).json({ success: false, message: "Bad request", error: error.message });
  }
};

const updateCompanyEnvironment = async (req, res) => {
  try {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ success: false, message: "Invalid ID format" });
    }
    const updatedItem = await CompanyEnvironment.findByIdAndUpdate(id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!updatedItem) {
      return res.status(404).json({ success: false, message: "CompanyEnvironment not found" });
    }
    return res.status(200).json({ success: true, data: updatedItem });
  } catch (error) {
    return res.status(400).json({ success: false, message: "Bad request", error: error.message });
  }
};

const deleteCompanyEnvironment = async (req, res) => {
  try {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ success: false, message: "Invalid ID format" });
    }
    const deletedItem = await CompanyEnvironment.findByIdAndDelete(id);
    if (!deletedItem) {
      return res.status(404).json({ success: false, message: "CompanyEnvironment not found" });
    }
    return res.status(200).json({ success: true, message: "Deleted successfully", data: deletedItem });
  } catch (error) {
    return res.status(500).json({ success: false, message: "Server error", error: error.message });
  }
};

module.exports = {
  getAllCompanyEnvironments,
  getCompanyEnvironmentById,
  createCompanyEnvironment,
  updateCompanyEnvironment,
  deleteCompanyEnvironment,
};