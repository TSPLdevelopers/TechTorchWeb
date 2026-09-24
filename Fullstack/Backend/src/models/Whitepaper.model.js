const mongoose = require("mongoose");

const whitepaperSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },

    domain: {
      type: String,
      required: true,
      trim: true,
    },

    architects: {
      type: String,
      required: true,
      trim: true,
    },

    abstract: {
      type: String,
      required: true,
      trim: true,
    },

    bullets: {
      type: [String],
      default: [],
    },

    gating: {
      type: String,
      enum: ["gated", "open"],
      default: "gated",
    },

    fileName: {
      type: String,
      default: "",
    },

    fileSize: {
      type: String,
      default: "",
    },

    fileUrl: {
      type: String,
      default: "",
    },

    status: {
      type: String,
      enum: ["draft", "published"],
      default: "draft",
    },

    published: {
      type: String,
      default: "",
    },

    downloads: {
      type: Number,
      default: 0,
    },

    leadConversion: {
      type: String,
      default: "0%",
    },

    avgReadTime: {
      type: String,
      default: "0m",
    },
  },
  {
    timestamps: true,
  }
);

const Whitepaper =
  mongoose.models.Whitepaper ||
  mongoose.model("Whitepaper", whitepaperSchema);

module.exports = Whitepaper;