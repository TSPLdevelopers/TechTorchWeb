const mongoose = require("mongoose");

// Generic enquiry used by website forms that do not have their own
// dedicated collection (Manufacturing, MSP Support, Offshore Teams...).
// Every form-specific answer is kept inside `details`.
const FORM_TYPES = [
  "manufacturing",
  "msp-support",
  "offshore-requirements",
  "offshore-team",
  "candidate-blog",
  "candidate-interest",
];

// Public website forms ke liye allowed types (candidate types sirf server banata hai)
const PUBLIC_FORM_TYPES = FORM_TYPES.filter((t) => !t.startsWith("candidate-"));

const inquirySchema = new mongoose.Schema(
  {
    formType: {
      type: String,
      required: [true, "Form type is required"],
      enum: FORM_TYPES,
      index: true,
    },
    fullName: {
      type: String,
      required: [true, "Full name is required"],
      trim: true,
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      trim: true,
      lowercase: true,
      match: [/^[^\s@]+@[^\s@]+\.[^\s@]+$/, "Please enter a valid email address"],
    },
    company: { type: String, trim: true, default: "" },
    phone: { type: String, trim: true, default: "" },
    topic: { type: String, trim: true, default: "" },
    message: { type: String, trim: true, default: "", maxlength: 5000 },
    details: { type: mongoose.Schema.Types.Mixed, default: {} },

    // candidate blog/interest ko inquiry se jodne ke liye
    refId: { type: mongoose.Schema.Types.ObjectId, index: true },
    candidate: { type: mongoose.Schema.Types.ObjectId, ref: "Candidate" },

    status: {
      type: String,
      enum: ["new", "contacted", "in-progress", "completed", "rejected"],
      default: "new",
    },
  },
  { timestamps: true }
);

module.exports =
  mongoose.models.Inquiry || mongoose.model("Inquiry", inquirySchema);
module.exports.FORM_TYPES = FORM_TYPES;
module.exports.PUBLIC_FORM_TYPES = PUBLIC_FORM_TYPES;