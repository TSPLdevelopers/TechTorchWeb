const mongoose = require("mongoose");

const dataDecisionSchema = new mongoose.Schema(
  {
    executiveFullName: {
      type: String,
      required: true,
      trim: true,
    },

    corporateWorkEmail: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
    },

    enterpriseOrganization: {
      type: String,
      required: true,
      trim: true,
    },

    primarySolutionFocus: {
      type: String,
      required: true,
      trim: true,
    },

    architectureScope: {
      type: String,
      required: true,
      trim: true,
    },

    requestArchitectureConsultation: {
      type: Boolean,
      default: false,
    },

    status: {
      type: String,
      enum: ["new", "contacted", "in-progress", "completed", "rejected"],
      default: "new",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("dataDecision", dataDecisionSchema);