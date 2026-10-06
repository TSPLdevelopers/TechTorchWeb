const mongoose = require("mongoose");

const financialConsultationSchema = new mongoose.Schema(
  {
    // 01 - Financial Practice Areas
    practiceAreas: {
      type: [String],
      required: [true, "Please select at least one practice area"],
      validate: {
        validator: function (value) {
          return Array.isArray(value) && value.length > 0;
        },
        message: "Please select at least one practice area",
      },
    },

    // 02 - Institution & Executive Contact
    fullName: {
      type: String,
      required: [true, "Full name is required"],
      trim: true,
    },

    corporateEmail: {
      type: String,
      required: [true, "Corporate / institutional email is required"],
      trim: true,
      lowercase: true,
      match: [
        /^\S+@\S+\.\S+$/,
        "Please enter a valid email address",
      ],
    },

    organizationName: {
      type: String,
      required: [true, "Institution / organization name is required"],
      trim: true,
    },

    designation: {
      type: String,
      trim: true,
      default: "",
    },

    phone: {
      type: String,
      trim: true,
      default: "",
    },

    // 03 - Deployment Timeline
    targetTimeline: {
      type: String,
      required: [true, "Target commencement horizon is required"],
      enum: [
        "Immediate (<2 wks)",
        "Within 30 Days",
        "1–3 Months",
        "Exploratory / Feasibility Review",
      ],
    },

    technicalScope: {
      type: String,
      trim: true,
      default: "",
    },

    // Consent / Requests
    mutualNda: {
      type: Boolean,
      default: false,
    },

    architectureSession: {
      type: Boolean,
      default: false,
    },

    // Admin
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
  "FinancialConsultation",
  financialConsultationSchema
);