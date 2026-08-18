const mongoose = require("mongoose");
const Candidate = require("../models/candidate.model");


const createCandidate = async (req, res) => {
  try {
    const { name, email, phone, skills, collegeYear, city, college, resume } = req.body;

    if (
      !name ||
      !email ||
      !phone ||
      !skills ||
      !Array.isArray(skills) ||
      skills.length === 0 ||
      !collegeYear ||
      !city ||
      !college ||
      !resume
    ) {
      return res.status(400).json({
        success: false,
        message:
          "name, email, phone, skills (at least one), collegeYear, city, college, and resume are required",
      });
    }

    const newCandidate = new Candidate(req.body);
    const savedCandidate = await newCandidate.save();

    return res.status(201).json({ success: true, data: savedCandidate });
  } catch (error) {
    return res.status(400).json({ success: false, message: "Bad request", error: error.message });
  }
};


const getAllCandidates = async (req, res) => {
  try {
    const candidates = await Candidate.find().sort({ createdAt: -1 });
    return res.status(200).json({ success: true, data: candidates });
  } catch (error) {
    return res.status(500).json({ success: false, message: "Server error", error: error.message });
  }
};


const getCandidateById = async (req, res) => {
  try {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ success: false, message: "Invalid ID format" });
    }

    const candidate = await Candidate.findById(id);
    if (!candidate) {
      return res.status(404).json({ success: false, message: "Candidate not found" });
    }

    return res.status(200).json({ success: true, data: candidate });
  } catch (error) {
    return res.status(500).json({ success: false, message: "Server error", error: error.message });
  }
};


const updateCandidate = async (req, res) => {
  try {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ success: false, message: "Invalid ID format" });
    }

    const updatedCandidate = await Candidate.findByIdAndUpdate(id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!updatedCandidate) {
      return res.status(404).json({ success: false, message: "Candidate not found" });
    }

    return res.status(200).json({ success: true, data: updatedCandidate });
  } catch (error) {
    return res.status(400).json({ success: false, message: "Bad request", error: error.message });
  }
};

const deleteCandidate = async (req, res) => {
  try {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ success: false, message: "Invalid ID format" });
    }

    const deletedCandidate = await Candidate.findByIdAndDelete(id);
    if (!deletedCandidate) {
      return res.status(404).json({ success: false, message: "Candidate not found" });
    }

    return res.status(200).json({ success: true, message: "Candidate deleted successfully" });
  } catch (error) {
    return res.status(500).json({ success: false, message: "Server error", error: error.message });
  }
};

module.exports = {
  createCandidate,
  getAllCandidates,
  getCandidateById,
  updateCandidate,
  deleteCandidate,
};