const mongoose = require("mongoose");

const ourstorySchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required: true,
      trim: true,
    },

    companyEmail: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
    },

    industry: {
      type: String,
      required: true,
      trim: true,
    },

    message: {
      type: String,
      required: true,
      trim: true,
    },

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

module.exports = mongoose.model("OurStory", ourstorySchema);