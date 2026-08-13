const mongoose = require("mongoose");

const opportunitySchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      required: true,
      trim: true,
    },
    requirements: {
      type: String,
      required: true,
      trim: true,
    },
    responsibilities: {
      type: String,
      required: true,
      trim: true,
    },
    skills: {
      type: [String],
      required: true,
      set: (skills) => skills.map((skill) => skill.trim()),
    },
    workMode: {
      type: String,
      required: true,
      enum: ["On-site", "Remote", "Hybrid"],
    },
    experience: {
      type: String,
      required: true,
      trim: true,
    },
    applicationLink: {
      type: String,
      required: true,
      trim: true,
    },
    applicationDeadline: {
      type: Date,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Opportunity", opportunitySchema);