const mongoose = require("mongoose");

const adminSchema = new mongoose.Schema(
  {
    contact: {
      type: String,
      required: [true, "Contact is required"],
      trim: true,
    },
    emergency: {
      type: String,
      required: [true, "Emergency contact is required"],
      trim: true,
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
      lowercase: true,
      trim: true,
    },
    password: {
      type: String,
      required: [true, "Password is required"],
    },
    activeStatus: {
      type: Boolean,
      required: true,
      default: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Admin", adminSchema);