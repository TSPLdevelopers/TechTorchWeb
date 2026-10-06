const mongoose = require("mongoose");

const healthcareConsultationSchema = new mongoose.Schema(
  {
    // 01 - Primary Healthcare Requirement
    healthcareRequirements: {
      type: [String],
      required: [true, "Please select at least one healthcare requirement"],
      validate: {
        validator: function (value) {
          return Array.isArray(value) && value.length > 0;
        },
        message: "Please select at least one healthcare requirement",
      },
    },

    // 02 - Facility Type & Scale
    facilityType: {
      type: String,
      required: [true, "Facility type is required"],
      enum: [
        "Hospital",
        "Clinic",
        "Diagnostic Center",
        "Medical College",
        "Healthcare Network",
        "Other",
      ],
    },

    patientVolume: {
      type: String,
      required: [true, "Daily patient / transaction volume is required"],
      enum: [
        "< 500 / day",
        "500 – 2,500",
        "2.5k - 10k",
        "10,000+",
      ],
    },

    // 03 - Contact & Integration Scope
    fullNameDesignation: {
      type: String,
      required: [true, "Full name and designation are required"],
      trim: true,
    },

    workEmail: {
      type: String,
      required: [true, "Work / institutional email is required"],
      trim: true,
      lowercase: true,
      match: [
        /^\S+@\S+\.\S+$/,
        "Please enter a valid email address",
      ],
    },

    organizationName: {
      type: String,
      required: [true, "Organization / hospital name is required"],
      trim: true,
    },

    phone: {
      type: String,
      required: [true, "Phone / WhatsApp number is required"],
      trim: true,
    },

    consultationWindow: {
      type: String,
      required: [true, "Preferred consultation window is required"],
      enum: [
        "Morning (09:00 - 12:00)",
        "Afternoon (13:00 - 17:00)",
        "Global / Flexible Zone",
      ],
    },

    challengeScope: {
      type: String,
      trim: true,
      default: "",
    },

    // NDA request
    healthcareNdaRequested: {
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
  "HealthcareConsultation",
  healthcareConsultationSchema
);