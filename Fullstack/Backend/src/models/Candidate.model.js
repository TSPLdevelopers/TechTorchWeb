const mongoose = require("mongoose");

const candidateSchema = new mongoose.Schema(
  {
    name: { type: String, required: [true, "Name is required"], trim: true },
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
      lowercase: true,
      trim: true,
      match: [/^\S+@\S+\.\S+$/, "Please enter a valid email"],
    },
    password: { type: String, required: true, minlength: 6 },
    phone: { type: String, trim: true, default: "" },
    city: { type: String, trim: true, default: "" },
    headline: { type: String, trim: true, default: "" }, // e.g. "React developer, 3 yrs"
    status: { type: String, enum: ["active", "inactive"], default: "active" },
    otp: { type: String, default: null },
    otpExpiry: { type: Date, default: null },
    lastLogin: { type: Date },
  },
  { timestamps: true }
);

module.exports = mongoose.models.Candidate || mongoose.model("Candidate", candidateSchema);