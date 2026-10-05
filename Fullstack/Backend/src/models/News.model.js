const mongoose = require("mongoose");

const newsSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },

    description: {
      type: String,
      default: "",
      trim: true,
    },

    image: {
      type: String,
      default: "",
    },

    category: {
      type: String,
      default: "",
      trim: true,
    },

    author: {
      type: String,
      default: "",
      trim: true,
    },

    status: {
      type: String,
      enum: ["Draft", "Published"],
      default: "Draft",
    },

    format: {
      type: String,
      enum: ["Technical Article", "News & Press Release"],
      default: "News & Press Release",
    },

    dek: {
      type: String,
      default: "",
    },

    dateline: {
      type: String,
      default: "",
    },

    wire: {
      type: String,
      default: "",
    },

    tags: {
      type: [String],
      default: [],
    },

    breakingSpotlight: {
      type: Boolean,
      default: false,
    },

    mediaKitReady: {
      type: Boolean,
      default: false,
    },

    body: {
      type: String,
      default: "",
    },

    publishTiming: {
      type: String,
      enum: ["immediate", "scheduled"],
      default: "immediate",
    },

    scheduledDate: {
      type: String,
      default: "",
    },

    slug: {
      type: String,
      default: "",
    },

    wireStatus: {
      type: String,
      default: "Dispatched",
    },

    statusDate: {
      type: String,
      default: "",
    },
  },
  {
    timestamps: true,
  }
);

const News =
  mongoose.models.News || mongoose.model("News", newsSchema);

module.exports = News;