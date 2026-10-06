const mongoose = require("mongoose");

const ecommerceSchema = new mongoose.Schema(
  {
    // What Can We Help You With? - Multi Select
    serviceAreas: {
      type: [String],
      required: [true, "Please select at least one service area."],
      enum: [
        "E-Commerce Solutions",
        "Product Management",
        "Payment Processing",
        "Customer Relationship Management",
        "Analytics & Reporting",
        "Web & Mobile Applications",
        "Software & System Integration",
        "Maintenance & Support",
      ],
      validate: {
        validator: (value) =>
          Array.isArray(value) && value.length > 0,
        message: "Please select at least one service area.",
      },
    },

    // What Are You Looking to Achieve? - Multi Select
    objectives: {
      type: [String],
      required: [true, "Please select at least one objective."],
      enum: [
        "New E-Commerce Solution",
        "Improve Existing E-Commerce Platform",
        "Product & Inventory Management",
        "Payment Integration",
        "Customer Management",
        "Analytics & Reporting",
        "Software Development",
        "System Integration",
        "Existing System Improvement",
        "Technology Support",
        "Exploring Options",
      ],
      validate: {
        validator: (value) =>
          Array.isArray(value) && value.length > 0,
        message: "Please select at least one objective.",
      },
    },

    // Current Project Stage
    currentProjectStage: {
      type: String,
      required: [true, "Current project stage is required."],
      enum: [
        "Initial Discussion",
        "Requirement Planning",
        "Existing System Improvement",
        "Development",
        "Implementation",
        "Maintenance & Support",
        "Exploring Options",
      ],
    },

    // Requirement Details
    requirementDetails: {
      type: String,
      required: [true, "Requirement details are required."],
      trim: true,
    },

    // Contact Information
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
      required: [
        true,
        "Company / Organization is required.",
      ],
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
  "Ecommerce",
  ecommerceSchema
);