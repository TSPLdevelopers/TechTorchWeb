const mongoose = require("mongoose");

const energySchema = new mongoose.Schema(
  {
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
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
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

    primaryBusinessArea: {
      type: String,
      required: [true, "Primary business area is required"],
      enum: [
        "Energy & Utilities",
        "Oil & Gas",
        "Renewable Energy",
        "Power Generation",
        "Power Distribution",
        "Utilities Management",
        "Energy Technology",
        "Other",
      ],
    },

    technologyAreas: {
      type: [String],
      required: [true, "Technology area is required"],
      validate: {
        validator: function (value) {
          return Array.isArray(value) && value.length > 0;
        },
        message: "Please select at least one technology area.",
      },
      enum: [
        "ERP Solutions",
        "Operations Management",
        "Financial Management",
        "CRM Solutions",
        "Project Management",
        "Web Portals",
        "Custom Software Development",
        "Software Engineering",
        "Cloud Infrastructure",
        "Cyber Security",
        "Artificial Intelligence",
        "Software Development & Support",
        "IT Consultancy",
        "Resource & Staffing",
        "Business Process Outsourcing",
        "Other",
      ],
    },

    currentProjectStage: {
      type: String,
      enum: [
        "Initial Discussion",
        "Requirement Planning",
        "Existing System Improvement",
        "Software Development",
        "System Implementation",
        "Technology Support",
        "Exploring Options",
      ],
      default: "",
    },

    requirement: {
      type: String,
      required: [true, "Requirement is required"],
      trim: true,
    },

    preferredContactMethod: {
      type: String,
      enum: ["Email", "Phone"],
      default: "Email",
    },

    preferredContactTime: {
      type: String,
      enum: [
        "Morning",
        "Afternoon",
        "Evening",
        "Any Convenient Time",
      ],
      default: "",
    },

    contactConsent: {
      type: Boolean,
      required: [true, "Contact consent is required"],
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
  "Energy",
  energySchema
);