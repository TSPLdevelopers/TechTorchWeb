const mongoose = require("mongoose");

const exploreQuestionSchema = new mongoose.Schema(
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

    companyName: {
      type: String,
      trim: true,
      default: "",
    },

    inquiryArea: {
      type: String,
      required: [true, "Area of inquiry is required"],
      enum: [
        "Software Development",
        "ERP Solutions",
        "AI & Cloud",
        "Cybersecurity",
        "Digital Transformation",
      ],
    },

    question: {
      type: String,
      required: [true, "Question or business challenge is required"],
      trim: true,
      maxlength: [500, "Question cannot exceed 500 characters"],
    },

    urgencyTimeline: {
      type: String,
      enum: [
        "Exploring / General",
        "Active Project Need",
        "Immediate Decision",
      ],
      default: null,
    },

    status: {
      type: String,
      enum: [
        "new",
        "contacted",
        "in-progress",
        "closed",
      ],
      default: "new",
    },
  },
  {
    timestamps: true,
  }
);

module.exports =
  mongoose.models.ExploreQuestion ||
  mongoose.model("ExploreQuestion", exploreQuestionSchema);