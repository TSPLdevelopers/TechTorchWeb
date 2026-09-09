const mongoose = require("mongoose");

const companyEnvironmentSchema = new mongoose.Schema(
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
    images: {
      type: [String],
      default: [],
    },
    workCulture: {
      type: String,
      required: true,
      trim: true,
    },
    teamActivities: {
      type: [String],
      default: [],
    },
    facilities: {
      type: [String],
      default: [],
    },
    workMode: {
      type: String,
      required: true,
      enum: ["On-site", "Remote", "Hybrid"],
    },
   
  },
  { timestamps: true }
);

module.exports = mongoose.model("CompanyEnvironment", companyEnvironmentSchema);