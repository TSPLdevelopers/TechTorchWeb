const mongoose = require("mongoose");

const telecommunicationSchema = new mongoose.Schema(
  {
    // Project Scope & Focus Areas
    focusAreas: {
      type: [String],
      required: [true, "Please select at least one focus area."],
      enum: [
        "Network Automation & Operations",
        "ERP & Core Systems",
        "CRM & Subscriber Portals",
        "Financial & Revenue Management",
        "Custom Telemetry & Software",
        "Telecommunications",
        "Other Requirements",
      ],
      validate: {
        validator: function (value) {
          return Array.isArray(value) && value.length > 0;
        },
        message: "Please select at least one focus area.",
      },
    },

    // Contact & Organization Details
    fullName: {
      type: String,
      required: [true, "Full name is required."],
      trim: true,
    },

    corporateEmail: {
      type: String,
      required: [true, "Corporate email is required."],
      trim: true,
      lowercase: true,
      match: [
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
        "Please enter a valid corporate email.",
      ],
    },

    companyOrganizationName: {
      type: String,
      required: [
        true,
        "Company / Organization name is required.",
      ],
      trim: true,
    },

    phoneNumber: {
      type: String,
      trim: true,
      default: "",
    },

    // Project Details
    projectDetails: {
      type: String,
      trim: true,
      default: "",
    },

    // M-NDA Request
    mutualNdaRequested: {
      type: Boolean,
      default: false,
    },

    // Immediate consultation request
    immediateConsultationRequested: {
      type: Boolean,
      default: false,
    },

    // Admin status
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
  "Telecommunication",
  telecommunicationSchema
);