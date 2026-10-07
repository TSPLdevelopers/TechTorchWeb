const mongoose = require("mongoose");

const startConversationSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required: [true, "Full name is required"],
      trim: true,
    },

    workEmail: {
      type: String,
      required: [true, "Work email is required"],
      trim: true,
      lowercase: true,
      match: [
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
        "Please enter a valid work email",
      ],
    },

    companyName: {
      type: String,
      trim: true,
      default: "",
    },

    phoneNumber: {
      type: String,
      trim: true,
      default: "",
    },

    service: {
      type: String,
      required: [true, "Please select a service"],
      enum: [
        "Software Development",
        "Digital Transformation",
        "ERP Solutions",
        "AI & Cloud Solutions",
        "Cybersecurity",
        "IT Consulting",
      ],
    },

    requirement: {
      type: String,
      required: [true, "Requirement is required"],
      trim: true,
      maxlength: [500, "Requirement cannot exceed 500 characters"],
    },

    currentStage: {
      type: String,
      enum: [
        "Idea Stage",
        "Planning",
        "Development",
        "Implementation",
      ],
      default: null,
    },

    expectedTimeline: {
      type: String,
      enum: [
        "Immediate",
        "Within 1 Month",
        "1–3 Months",
        "3–6 Months",
      ],
      default: null,
    },

    preferredWayToConnect: {
      type: String,
      enum: [
        "Email",
        "Phone Call",
        "Online Video Meeting",
      ],
      default: null,
    },

    ndaRequested: {
      type: Boolean,
      default: true,
    },

    status: {
      type: String,
      enum: ["new", "contacted", "in-progress", "closed"],
      default: "new",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model(
  "StartConversation",
  startConversationSchema
);