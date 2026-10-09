const mongoose = require("mongoose");

const digitalSolutionSchema = new mongoose.Schema(
  {
    executiveFullName: {
      type: String,
      required: true,
      trim: true,
    },

    corporateWorkEmail: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
    },

    enterpriseOrganization: {
      type: String,
      required: true,
      trim: true,
    },

    primarySolutionFocus: {
      type: String,
      required: true,
      trim: true,
    },

    architectureScope: {
      type: String,
      required: true,
      trim: true,
    },

    status: {
      type: String,
      enum: ["new", "reviewed", "contacted", "closed"],
      default: "new",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model(
  "DigitalSolution",
  digitalSolutionSchema
);