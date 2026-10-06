const mongoose = require("mongoose");

const fmcgConsultationSchema = new mongoose.Schema(
  {
    // 01 - Business Areas
    businessAreas: {
      type: [String],
      required: [true, "Please select at least one business area"],
      validate: {
        validator: function (value) {
          return Array.isArray(value) && value.length > 0;
        },
        message: "Please select at least one business area",
      },
    },

    // 02 - Technology Requirements
    technologyRequirements: {
      type: [String],
      required: [true, "Please select at least one technology requirement"],
      validate: {
        validator: function (value) {
          return Array.isArray(value) && value.length > 0;
        },
        message: "Please select at least one technology requirement",
      },
    },

    // 03 - Current Project Stage
    projectStage: {
      type: String,
      required: [true, "Current project stage is required"],
      enum: [
        "Initial Discussion",
        "Requirement Planning",
        "Existing System Improvement",
        "Software Development",
        "System Implementation",
        "Technology Support",
        "Exploring Options",
      ],
    },

    // 04 - Contact & Project Details
    fullName: {
      type: String,
      required: [true, "Full name is required"],
      trim: true,
    },

    businessEmail: {
      type: String,
      required: [true, "Business email is required"],
      trim: true,
      lowercase: true,
      match: [
        /^\S+@\S+\.\S+$/,
        "Please enter a valid business email",
      ],
    },

    companyOrganization: {
      type: String,
      required: [true, "Company / Organization is required"],
      trim: true,
    },

    phoneNumber: {
      type: String,
      trim: true,
      default: "",
    },

    requirement: {
      type: String,
      trim: true,
      default: "",
    },

    contactConsent: {
      type: Boolean,
      required: true,
      validate: {
        validator: function (value) {
          return value === true;
        },
        message:
          "You must agree to be contacted by TechTorch.",
      },
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
  "FmcgConsultation",
  fmcgConsultationSchema
);