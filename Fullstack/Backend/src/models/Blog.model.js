const mongoose = require("mongoose");

const blogSchema = new mongoose.Schema(
  {
    title: { type: String, required: [true, "Title is required"], trim: true, maxlength: 160 },
    slug: { type: String, default: "", index: true },
    excerpt: { type: String, trim: true, default: "", maxlength: 300 },
    content: { type: String, required: [true, "Content is required"], minlength: [50, "Blog must be at least 50 characters"] },
    coverImage: { type: String, trim: true, default: "" },
    category: { type: String, trim: true, default: "" },
    tags: { type: [String], default: [] },

    // who wrote it
    authorType: { type: String, enum: ["candidate", "admin"], required: true },
    candidate: { type: mongoose.Schema.Types.ObjectId, ref: "Candidate", default: null },
    admin: { type: mongoose.Schema.Types.ObjectId, ref: "Admin", default: null },
    authorName: { type: String, required: true, trim: true },

    // candidate posts wait for admin review; admin posts publish immediately
    status: { type: String, enum: ["pending", "published", "rejected"], default: "pending", index: true },
    reviewNote: { type: String, trim: true, default: "" },
    publishedAt: { type: Date, default: null },
  },
  { timestamps: true }
);

module.exports = mongoose.models.Blog || mongoose.model("Blog", blogSchema);