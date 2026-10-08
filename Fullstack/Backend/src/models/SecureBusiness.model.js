const mongoose = require("mongoose");

const secureBusinessSchema = new mongoose.Schema(
  {
    executiveFullName: {
      type: String,
      required: true,
      trim: true,
    },

    corporateWorkEmail: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
    },

    organizationName: {
      type: String,
      required: true,
      trim: true,
    },

    industryVertical: {
      type: String,
      required: true,
      enum: [
        "Financial Services & Banking",
        "Healthcare",
        "Technology",
        "Manufacturing",
        "Government",
        "Retail & E-Commerce",
      ],
    },

    currentCriticalChallenge: {
      type: String,
      required: true,
      trim: true,
    },

    targetTimeline: {
      type: String,
      required: true,
      enum: [
        "Immediate (48h)",
        "Next 30 Days",
        "Strategic Q2/Q3",
      ],
    },

    infrastructureNotes: {
      type: String,
      trim: true,
      default: "",
    },

    status: {
      type: String,
      enum: ["new", "reviewed", "contacted", "closed"],
      default: "new",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("SecureBusiness", secureBusinessSchema);