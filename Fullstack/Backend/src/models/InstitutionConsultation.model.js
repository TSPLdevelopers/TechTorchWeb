const mongoose = require("mongoose");

const institutionConsultationSchema = new mongoose.Schema(
  {
    // 01 - Institution Details
    institutionName: {
      type: String,
      required: [true, "Institution name is required"],
      trim: true,
    },

    institutionType: {
      type: String,
      required: [true, "Institution type is required"],
      enum: [
        "Higher Ed / University",
        "College / Institute",
        "Multi-Campus Network",
        "K-12 Academy",
      ],
    },

    studentScale: {
      type: String,
      required: [true, "Student count / scale is required"],
      enum: [
        "Under 2,000",
        "2,000 - 10,000",
        "10,000 - 25,000",
        "25,000+",
      ],
    },

    // 02 - Areas of Interest
    areasOfInterest: {
      type: [String],
      required: [true, "Please select at least one area of interest"],
      validate: {
        validator: function (value) {
          return value && value.length > 0;
        },
        message: "Please select at least one area of interest",
      },
    },

    // 03 - Contact Person Details
    fullName: {
      type: String,
      required: [true, "Full name is required"],
      trim: true,
    },

    officialEmail: {
      type: String,
      required: [true, "Official institutional email is required"],
      trim: true,
      lowercase: true,
      match: [
        /^\S+@\S+\.\S+$/,
        "Please enter a valid email address",
      ],
    },

    designation: {
      type: String,
      required: [true, "Designation / role is required"],
      trim: true,
    },

    phone: {
      type: String,
      trim: true,
      default: "",
    },

    expectedTimeline: {
      type: String,
      required: [true, "Expected timeline is required"],
      enum: [
        "Immediate / Within 1 Month",
        "1 - 3 Months",
        "Exploratory / Budget Planning",
      ],
    },

    additionalNotes: {
      type: String,
      trim: true,
      default: "",
    },

    // NDA / Confidentiality confirmation
    confidentialityConsent: {
      type: Boolean,
      required: true,
      validate: {
        validator: function (value) {
          return value === true;
        },
        message:
          "You must agree to the confidentiality terms",
      },
    },

    // Admin use
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

module.exports = mongoose.model(
  "InstitutionConsultation",
  institutionConsultationSchema
);