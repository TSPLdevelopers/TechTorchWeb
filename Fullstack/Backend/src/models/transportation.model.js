const mongoose = require("mongoose");

const transportationSchema = new mongoose.Schema(
  {
    technologyAreas: {
      type: [String],
      required: [true, "Please select at least one technology area."],
      enum: [
        "ERP Solutions",
        "Operations Management",
        "Supply Chain Management",
        "Financial Management",
        "CRM Solutions",
        "Project Management",
        "Web Portals",
        "Software Solutions",
      ],
      validate: {
        validator: (value) =>
          Array.isArray(value) && value.length > 0,
        message: "Please select at least one technology area.",
      },
    },

    objectives: {
      type: [String],
      required: [true, "Please select at least one objective."],
      enum: [
        "New Technology Solution",
        "Existing System Improvement",
        "Software Development",
        "System Integration",
        "Cloud Requirement",
        "Digital Transformation",
        "Technology Support",
        "Exploring Options",
      ],
      validate: {
        validator: (value) =>
          Array.isArray(value) && value.length > 0,
        message: "Please select at least one objective.",
      },
    },

    currentProjectStage: {
      type: String,
      required: [true, "Current project stage is required."],
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

    requirement: {
      type: String,
      required: [true, "Requirement is required."],
      trim: true,
    },

    fullName: {
      type: String,
      required: [true, "Full name is required."],
      trim: true,
    },

    businessEmail: {
      type: String,
      required: [true, "Business email is required."],
      trim: true,
      lowercase: true,
      match: [
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
        "Please enter a valid business email.",
      ],
    },

    companyOrganization: {
      type: String,
      required: [true, "Company / Organization is required."],
      trim: true,
    },

    phoneNumber: {
      type: String,
      trim: true,
      default: "",
    },

    preferredContactMethod: {
      type: String,
      enum: ["Email", "Phone"],
      default: "Email",
    },

    contactConsent: {
      type: Boolean,
      required: [true, "Contact consent is required."],
      validate: {
        validator: (value) => value === true,
        message:
          "Please agree to be contacted by TechTorch.",
      },
    },

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
  "Transportation",
  transportationSchema
);