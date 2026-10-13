const mongoose = require("mongoose");

const expertQuerySchema = new mongoose.Schema(
  {
    fullName: { type: String, required: [true, "Full name is required"], trim: true },
    email: {
      type: String,
      required: [true, "Email is required"],
      trim: true,
      lowercase: true,
      match: [/^[^\s@]+@[^\s@]+\.[^\s@]+$/, "Please enter a valid email address"],
    },
    phone: {
      type: String,
      required: [true, "Phone number is required"],
      trim: true,
      match: [/^[6-9]\d{9}$/, "Please enter a valid 10-digit mobile number"],
    },
    company: { type: String, trim: true, default: "" },
    preferredTime: {
      type: String,
      enum: ["", "Morning", "Afternoon", "Evening"],
      default: "",
    },
    message: {
      type: String,
      required: [true, "Please tell us how we can help"],
      trim: true,
      maxlength: 5000,
    },
    status: {
      type: String,
      enum: ["new", "contacted", "in-progress", "completed", "rejected"],
      default: "new",
    },
  },
  { timestamps: true }
);

module.exports =
  mongoose.models.ExpertQuery || mongoose.model("ExpertQuery", expertQuerySchema);
