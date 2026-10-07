const mongoose = require("mongoose");
const Interest = require("../models/Interest.model");
const JobOpening = require("../models/JobOpening.model");
const asyncHandler = require("../utils/asyncHandler");

const fail = (res, code, message) => res.status(code).json({ success: false, message });
const isId = (id) => mongoose.Types.ObjectId.isValid(id);
const STATUSES = ["New", "Reviewing", "Shortlisted", "Contacted", "Rejected"];

// ---------- CANDIDATE ----------
const showInterest = asyncHandler(async (req, res) => {
  const { jobId, area, message, resumeUrl } = req.body;
  let job = null;

  if (jobId) {
    if (!isId(jobId)) return fail(res, 400, "Invalid job id");
    job = await JobOpening.findById(jobId);
    if (!job) return fail(res, 404, "This job opening no longer exists");
    const exists = await Interest.findOne({ candidate: req.candidate._id, job: job._id });
    if (exists) return fail(res, 409, "You have already shown interest in this role");
  } else if (!area || !String(area).trim()) {
    return fail(res, 400, "Choose a job opening or an area of interest");
  }

  const interest = await Interest.create({
    candidate: req.candidate._id,
    job: job?._id || null,
    jobTitle: job?.title || "",
    area: job ? "" : String(area).trim(),
    message: message || "",
    resumeUrl: resumeUrl || "",
  });
  res.status(201).json({ success: true, message: "Interest submitted", data: interest });
});

const myInterests = asyncHandler(async (req, res) => {
  const list = await Interest.find({ candidate: req.candidate._id }).sort({ createdAt: -1 });
  res.json({ success: true, data: list });
});

const withdrawInterest = asyncHandler(async (req, res) => {
  if (!isId(req.params.id)) return fail(res, 400, "Invalid id");
  const doc = await Interest.findOneAndDelete({ _id: req.params.id, candidate: req.candidate._id });
  if (!doc) return fail(res, 404, "Not found");
  res.json({ success: true, message: "Interest withdrawn" });
});

// ---------- ADMIN ----------
const adminList = asyncHandler(async (req, res) => {
  const list = await Interest.find().populate("candidate", "name email phone city headline").sort({ createdAt: -1 });
  res.json({ success: true, data: list });
});

const adminUpdateStatus = asyncHandler(async (req, res) => {
  if (!isId(req.params.id)) return fail(res, 400, "Invalid id");
  if (!STATUSES.includes(req.body.status)) return fail(res, 400, "Invalid status");
  const doc = await Interest.findByIdAndUpdate(req.params.id, { status: req.body.status }, { new: true })
    .populate("candidate", "name email phone city headline");
  if (!doc) return fail(res, 404, "Not found");
  res.json({ success: true, data: doc });
});

const adminDelete = asyncHandler(async (req, res) => {
  if (!isId(req.params.id)) return fail(res, 400, "Invalid id");
  const doc = await Interest.findByIdAndDelete(req.params.id);
  if (!doc) return fail(res, 404, "Not found");
  res.json({ success: true, message: "Deleted" });
});

module.exports = { showInterest, myInterests, withdrawInterest, adminList, adminUpdateStatus, adminDelete };