const mongoose = require("mongoose");

// A candidate showing interest in a job opening or in a general area.
const interestSchema = new mongoose.Schema(
  {
    candidate: { type: mongoose.Schema.Types.ObjectId, ref: "Candidate", required: true, index: true },
    job: { type: mongoose.Schema.Types.ObjectId, ref: "JobOpening", default: null },
    jobTitle: { type: String, trim: true, default: "" }, // kept even if the job is later deleted
    area: { type: String, trim: true, default: "" }, // used when there is no specific job
    message: { type: String, trim: true, default: "", maxlength: 1000 },
    resumeUrl: { type: String, trim: true, default: "" },
    status: {
      type: String,
      enum: ["New", "Reviewing", "Shortlisted", "Contacted", "Rejected"],
      default: "New",
    },
  },
  { timestamps: true }
);

// one interest per candidate per job
interestSchema.index({ candidate: 1, job: 1 }, { unique: true, partialFilterExpression: { job: { $type: "objectId" } } });

module.exports = mongoose.models.Interest || mongoose.model("Interest", interestSchema);