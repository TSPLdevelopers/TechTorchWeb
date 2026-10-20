const mongoose = require("mongoose");
const Interest = require("../models/Interest.model");
const JobOpening = require("../models/JobOpening.model");
const asyncHandler = require("../utils/asyncHandler");
const { syncInquiry, removeInquiry } = require("../utils/candidateInquiry");

const fail = (res, code, message) => res.status(code).json({ success: false, message });
const isId = (id) => mongoose.Types.ObjectId.isValid(id);
const STATUSES = ["New", "Reviewing", "Shortlisted", "Contacted", "Rejected"];

// Resume link ko compulsory rakhna hai to true, optional karna ho to false
const RESUME_REQUIRED = true;

// ---------- CANDIDATE ----------
const showInterest = asyncHandler(async (req, res) => {
  const { jobId, area, message, resumeUrl } = req.body;
  let job = null;

  // ---- compulsory fields (blank / sirf spaces allowed nahi) ----
  const msg = String(message || "").trim();
  const resume = String(resumeUrl || "").trim();

  if (msg.length < 10) {
    return fail(res, 400, "Please write a short message (at least 10 characters)");
  }
  if (RESUME_REQUIRED && !resume) {
    return fail(res, 400, "Please add your resume link");
  }
  if (resume && !/^https?:\/\/\S+$/i.test(resume)) {
    return fail(res, 400, "Resume link must start with http:// or https://");
  }

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
    message: msg,
    resumeUrl: resume,
  });

  // admin ke Queries mein bhejo
  await syncInquiry({
    formType: "candidate-interest",
    refId: interest._id,
    user: req.candidate,
    topic: `Candidate Interest: ${interest.jobTitle || interest.area || "General"}`,
    message: interest.message,
    details: { jobTitle: interest.jobTitle, area: interest.area, resumeUrl: interest.resumeUrl },
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
  await removeInquiry("candidate-interest", doc._id);
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
  await removeInquiry("candidate-interest", doc._id);
  res.json({ success: true, message: "Deleted" });
});

module.exports = { showInterest, myInterests, withdrawInterest, adminList, adminUpdateStatus, adminDelete };