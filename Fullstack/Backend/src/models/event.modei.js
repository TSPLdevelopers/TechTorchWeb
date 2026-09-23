const mongoose = require("mongoose");

const eventSchema = new mongoose.Schema(
  {
    status: {
      type: String,
      enum: ["upcoming", "past", "draft"],
      default: "draft",
    },

    tag: {
      type: String,
      default: "FLAGSHIP PLENARY",
      trim: true,
    },

    title: {
      type: String,
      required: true,
      trim: true,
    },

    summary: {
      type: String,
      default: "",
    },

    dateRange: {
      type: String,
      default: "Date TBD",
    },

    timing: {
      type: String,
      default: "Time TBD",
    },

    venue: {
      type: String,
      default: "Venue TBD",
    },

    format: {
      type: String,
      enum: ["Hybrid", "In-Person", "Virtual"],
      default: "Hybrid",
    },

    tiers: {
      type: [Number],
      default: [150, 350, 250],
    },

    registered: {
      type: Number,
      default: 0,
      min: 0,
    },
  },
  {
    timestamps: true,
  }
);

module.exports =
  mongoose.models.Event || mongoose.model("Event", eventSchema);