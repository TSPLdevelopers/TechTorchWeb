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
        // options offered on the Contact Us page
        "Web Development",
        "Software Development",
        "Cloud Solutions",
        "AI & Machine Learning",
        "Technology Consulting",
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
      enum: ["Email", "Phone", "Phone Call", "Online Meeting"],
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

    projectStage: { type: String, trim: true, default: "" },
    timeline: { type: String, trim: true, default: "" },

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