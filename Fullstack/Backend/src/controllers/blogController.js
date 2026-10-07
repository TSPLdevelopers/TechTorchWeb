const mongoose = require("mongoose");
const Blog = require("../models/Blog.model");
const asyncHandler = require("../utils/asyncHandler");

const fail = (res, code, message) => res.status(code).json({ success: false, message });
const isId = (id) => mongoose.Types.ObjectId.isValid(id);

const slugify = (t = "") =>
  t.toString().toLowerCase().trim().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "").slice(0, 80);

const cleanTags = (tags) =>
  (Array.isArray(tags) ? tags : String(tags || "").split(","))
    .map((t) => String(t).trim())
    .filter(Boolean)
    .slice(0, 8);

const pick = (b) => ({
  title: b.title?.trim(),
  excerpt: (b.excerpt || "").trim() || (b.content || "").trim().slice(0, 160),
  content: b.content?.trim(),
  coverImage: (b.coverImage || "").trim(),
  category: (b.category || "").trim(),
  tags: cleanTags(b.tags),
});

// ---------- PUBLIC ----------
const listPublished = asyncHandler(async (req, res) => {
  const blogs = await Blog.find({ status: "published" })
    .select("-content -candidate -admin")
    .sort({ publishedAt: -1, createdAt: -1 });
  res.json({ success: true, data: blogs });
});

const getPublished = asyncHandler(async (req, res) => {
  if (!isId(req.params.id)) return fail(res, 400, "Invalid blog id");
  const blog = await Blog.findOne({ _id: req.params.id, status: "published" }).select("-candidate -admin");
  if (!blog) return fail(res, 404, "Blog not found");
  res.json({ success: true, data: blog });
});

// ---------- CANDIDATE ----------
const myBlogs = asyncHandler(async (req, res) => {
  const blogs = await Blog.find({ candidate: req.candidate._id }).sort({ createdAt: -1 });
  res.json({ success: true, data: blogs });
});

const createBlog = asyncHandler(async (req, res) => {
  const data = pick(req.body);
  if (!data.title) return fail(res, 400, "Title is required");
  if (!data.content) return fail(res, 400, "Content is required");

  const blog = await Blog.create({
    ...data,
    slug: slugify(data.title),
    authorType: "candidate",
    candidate: req.candidate._id,
    authorName: req.candidate.name,
    status: "pending",
  });
  res.status(201).json({ success: true, message: "Blog submitted for review", data: blog });
});

const updateMyBlog = asyncHandler(async (req, res) => {
  if (!isId(req.params.id)) return fail(res, 400, "Invalid blog id");
  const blog = await Blog.findOne({ _id: req.params.id, candidate: req.candidate._id });
  if (!blog) return fail(res, 404, "Blog not found");

  const data = pick(req.body);
  if (!data.title || !data.content) return fail(res, 400, "Title and content are required");

  Object.assign(blog, data, { slug: slugify(data.title), status: "pending", reviewNote: "", publishedAt: null });
  await blog.save(); // edits go back to review
  res.json({ success: true, message: "Blog updated and sent for review again", data: blog });
});

const deleteMyBlog = asyncHandler(async (req, res) => {
  if (!isId(req.params.id)) return fail(res, 400, "Invalid blog id");
  const blog = await Blog.findOneAndDelete({ _id: req.params.id, candidate: req.candidate._id });
  if (!blog) return fail(res, 404, "Blog not found");
  res.json({ success: true, message: "Blog deleted" });
});

// ---------- ADMIN ----------
const adminList = asyncHandler(async (req, res) => {
  const blogs = await Blog.find().sort({ createdAt: -1 });
  res.json({ success: true, data: blogs });
});

const adminCreate = asyncHandler(async (req, res) => {
  const data = pick(req.body);
  if (!data.title || !data.content) return fail(res, 400, "Title and content are required");
  const blog = await Blog.create({
    ...data,
    slug: slugify(data.title),
    authorType: "admin",
    admin: req.admin._id,
    authorName: req.body.authorName?.trim() || req.admin.name,
    status: "published",
    publishedAt: new Date(),
  });
  res.status(201).json({ success: true, data: blog });
});

const adminUpdate = asyncHandler(async (req, res) => {
  if (!isId(req.params.id)) return fail(res, 400, "Invalid blog id");
  const blog = await Blog.findById(req.params.id);
  if (!blog) return fail(res, 404, "Blog not found");

  const { status, reviewNote } = req.body;
  if (status !== undefined) {
    if (!["pending", "published", "rejected"].includes(status)) return fail(res, 400, "Invalid status");
    blog.status = status;
    blog.publishedAt = status === "published" ? blog.publishedAt || new Date() : null;
  }
  if (reviewNote !== undefined) blog.reviewNote = String(reviewNote).trim();

  // admins may also fix content / title
  if (req.body.title !== undefined || req.body.content !== undefined) {
    const data = pick({ ...blog.toObject(), ...req.body });
    if (!data.title || !data.content) return fail(res, 400, "Title and content are required");
    Object.assign(blog, data, { slug: slugify(data.title) });
  }
  await blog.save();
  res.json({ success: true, data: blog });
});

const adminDelete = asyncHandler(async (req, res) => {
  if (!isId(req.params.id)) return fail(res, 400, "Invalid blog id");
  const blog = await Blog.findByIdAndDelete(req.params.id);
  if (!blog) return fail(res, 404, "Blog not found");
  res.json({ success: true, message: "Blog deleted" });
});

module.exports = {
  listPublished, getPublished, myBlogs, createBlog, updateMyBlog, deleteMyBlog,
  adminList, adminCreate, adminUpdate, adminDelete,
};