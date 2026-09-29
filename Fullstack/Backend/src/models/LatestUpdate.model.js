const mongoose = require("mongoose");

const latestUpdateSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },

    description: {
      type: String,
      required: true,
      trim: true,
    },

    category: {
      type: String,
      enum: ["update", "news", "announcement", "whitepaper"],
      default: "update",
    },

    image: {
      type: String,
      default: "",
    },

    link: {
      type: String,
      default: "",
    },

    author: {
      type: String,
      default: "TechTorch",
      trim: true,
    },

    status: {
      type: String,
      enum: ["published", "draft"],
      default: "published",
    },

    publishedAt: {
      type: Date,
      default: Date.now,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("LatestUpdate", latestUpdateSchema);