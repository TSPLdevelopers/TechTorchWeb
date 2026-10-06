const mongoose = require("mongoose");

const generalEnquirySchema = new mongoose.Schema(
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
        /^\S+@\S+\.\S+$/,
        "Please enter a valid business email",
      ],
    },

    phoneNumber: {
      type: String,
      trim: true,
      default: "",
    },

    companyOrganization: {
      type: String,
      required: [true, "Company / Organization is required"],
      trim: true,
    },

    areaOfInterest: {
      type: String,
      required: [true, "Please select an area of interest"],
      enum: [
        "ERP & Business Processes",
        "Supply Chain",
        "Software & Integration",
        "Digital Transformation",
        "Technology Support",
      ],
    },

    requirement: {
      type: String,
      trim: true,
      default: "",
    },

    preferredContactMethod: {
      type: String,
      required: [true, "Preferred contact method is required"],
      enum: ["Email", "Phone"],
    },

    contactConsent: {
      type: Boolean,
      required: true,
      validate: {
        validator: function (value) {
          return value === true;
        },
        message:
          "You must agree to be contacted regarding your enquiry",
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
  "GeneralEnquiry",
  generalEnquirySchema
);