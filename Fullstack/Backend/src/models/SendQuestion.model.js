const mongoose = require("mongoose");

const sendQuestionSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required: true,
      trim: true,
    },

    businessEmail: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
    },

    companyOrganizationName: {
      type: String,
      trim: true,
      default: "",
    },

    topicArea: {
      type: String,
      required: true,
      enum: [
        "Software Development",
        "ERP Solutions",
        "AI & Cloud",
        "Cybersecurity",
        "Digital Transformation",
      ],
    },

    questionBusinessChallenge: {
      type: String,
      required: true,
      trim: true,
      maxlength: 500,
    },

    urgencyTimeline: {
      type: String,
      enum: [
        "Exploring / General",
        "Active Project Need",
        "Immediate Decision",
      ],
      default: "Exploring / General",
    },

    status: {
      type: String,
      enum: ["new", "reviewed", "responded", "closed"],
      default: "new",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model(
  "SendQuestion",
  sendQuestionSchema
);