const mongoose = require("mongoose");

const jobOpeningSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },

    format: {
      type: String,
      default: "Full-Time Enterprise Requisition",
    },

    department: {
      type: String,
      default: "",
      trim: true,
    },

    location: {
      type: String,
      default: "",
      trim: true,
    },

    seniority: {
      type: String,
      default: "",
      trim: true,
    },

    pitch: {
      type: String,
      default: "",
    },

    compMin: {
      type: Number,
      default: 0,
    },

    compMax: {
      type: Number,
      default: 0,
    },

    hiringManager: {
      initials: { type: String, default: "" },
      name: { type: String, default: "" },
      title: { type: String, default: "" },
    },

    recruiter: {
      initials: { type: String, default: "" },
      name: { type: String, default: "" },
      title: { type: String, default: "" },
    },

    urgency: {
      type: String,
      default: "immediate",
    },

    tags: {
      type: [String],
      default: [],
    },

    checks: {
      type: [Boolean],
      default: [true, true, true],
    },

    syndication: {
      type: [Boolean],
      default: [true, true, true],
    },

    status: {
      type: String,
      enum: [
        "Active / Open",
        "Draft / Unlisted",
        "Closing Soon",
      ],
      default: "Draft / Unlisted",
    },

    applicants: {
      type: Number,
      default: 0,
    },

    sub: {
      type: String,
      default: "Awaiting Review",
    },

    posted: {
      type: Date,
      default: Date.now,
    },

    draft: {
      type: Boolean,
      default: true,
    },

    costCenter: {
      type: String,
      default: "",
    },
  },
  {
    timestamps: true,
  }
);

const JobOpening =
  mongoose.models.JobOpening ||
  mongoose.model("JobOpening", jobOpeningSchema);

module.exports = JobOpening;