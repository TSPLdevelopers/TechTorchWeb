const mongoose = require("mongoose");

const insuranceIntakeSchema = new mongoose.Schema(
  {
    // 01 - Organization & Primary Contact
    fullName: {
      type: String,
      required: [true, "Full name is required"],
      trim: true,
    },

    corporateWorkEmail: {
      type: String,
      required: [true, "Corporate work email is required"],
      trim: true,
      lowercase: true,
      match: [
        /^\S+@\S+\.\S+$/,
        "Please enter a valid corporate work email",
      ],
    },

    organizationName: {
      type: String,
      required: [true, "Organization / Carrier name is required"],
      trim: true,
    },

    phone: {
      type: String,
      trim: true,
      default: "",
    },

    // 02 - Insurance Capabilities
    insuranceCapabilities: {
      type: [String],
      required: [true, "Please select at least one insurance capability"],
      validate: {
        validator: function (value) {
          return value && value.length > 0;
        },
        message: "Please select at least one insurance capability",
      },
    },

    // 03 - Target Timeline & Scale
    targetTimeline: {
      type: String,
      required: [true, "Target timeline is required"],
      enum: [
        "< 30 Days (Urgent)",
        "1–3 Months (Q2)",
        "3–6 Months Roadmap",
        "Exploratory",
      ],
    },

    // 04 - Technical Objectives & Environment
    technicalObjectives: {
      type: String,
      trim: true,
      default: "",
    },

    mutualNda: {
      type: Boolean,
      default: false,
    },

    architectureBriefing: {
      type: Boolean,
      default: false,
    },

    // Admin use
    status: {
      type: String,
      enum: [
        "new",
        "contacted",
        "in-progress",
        "completed",
        "rejected",
      ],
      default: "new",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model(
  "InsuranceIntake",
  insuranceIntakeSchema
);