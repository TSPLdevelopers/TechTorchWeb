const mongoose = require("mongoose");

const eventSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },

    summary: {
      type: String,
      default: "",
      trim: true,
    },

    description: {
      type: String,
      default: "",
    },

    tag: {
      type: String,
      default: "",
      trim: true,
    },

    status: {
  type: String,
  enum: ["upcoming", "past", "draft"],
  default: "draft",
},

    image: {
      type: String,
      default: "",
    },

    date: {
      type: String,
      default: "",
    },

    time: {
      type: String,
      default: "",
    },

    location: {
      type: String,
      default: "",
    },

    link: {
      type: String,
      default: "",
    },
  },
  {
    timestamps: true,
  }
);

module.exports =
  mongoose.models.Event || mongoose.model("Event", eventSchema);