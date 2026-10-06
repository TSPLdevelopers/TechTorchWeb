const mongoose = require("mongoose");

const technologyEnquirySchema = new mongoose.Schema(
  {
    // 01. Full Name
    fullName: {
      type: String,
      required: [true, "Full name is required"],
      trim: true,
    },

    // 02. Business Email
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

    // 03. Phone Number
    phoneNumber: {
      type: String,
      trim: true,
      default: "",
    },

    // 04. Company / Organization
    companyOrganization: {
      type: String,
      required: [true, "Company / Organization is required"],
      trim: true,
    },

    // 05. Service / Technology Area
    serviceArea: {
      type: String,
      required: [true, "Please select a service or technology area"],
      enum: [
        "Software Development",
        "IT Consulting",
        "Cloud Infrastructure",
        "Cybersecurity",
        "Artificial Intelligence",
        "Digital Transformation",
        "Technology Support",
      ],
    },

    // 06. Requirement
    requirement: {
      type: String,
      required: [true, "Please tell us about your requirement"],
      trim: true,
    },

    // 07. Preferred Contact Method
    preferredContactMethod: {
      type: String,
      required: [true, "Preferred contact method is required"],
      enum: ["Email", "Phone"],
    },

    // Consent
    contactConsent: {
      type: Boolean,
      required: true,
      validate: {
        validator: function (value) {
          return value === true;
        },
        message:
          "You must agree to be contacted regarding your enquiry.",
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
  "TechnologyEnquiry",
  technologyEnquirySchema
);