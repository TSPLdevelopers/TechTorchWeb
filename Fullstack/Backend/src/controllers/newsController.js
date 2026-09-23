const News = require("../models/News.model");

const slugify = (text = "") => {
  return text
    .toString()
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 80);
};


// CREATE NEWS
const createNews = async (req, res) => {
  try {
    const {
      title,
      description,
      image,
      category,
      author,
      status,
      format,
      dek,
      dateline,
      wire,
      tags,
      breakingSpotlight,
      mediaKitReady,
      body,
      publishTiming,
      scheduledDate,
    } = req.body;

    if (!title || !title.trim()) {
      return res.status(400).json({
        success: false,
        message: "Title is required",
      });
    }

    const news = await News.create({
      title: title.trim(),
      description: description || body || dek || "",
      image: image || "",
      category: category || "",
      author: author || "",
      status: status || "Draft",

      format: format || "News & Press Release",
      dek: dek || "",
      dateline: dateline || "",
      wire: wire || "",
      tags: Array.isArray(tags) ? tags : [],
      breakingSpotlight: Boolean(breakingSpotlight),
      mediaKitReady: Boolean(mediaKitReady),
      body: body || "",
      publishTiming: publishTiming || "immediate",
      scheduledDate: scheduledDate || "",

      slug: slugify(title),
      wireStatus:
        status === "Published" ? "Dispatched" : "Draft",
      statusDate: status === "Published" ? "Just now" : "Draft",
    });

    return res.status(201).json({
      success: true,
      message:
        status === "Published"
          ? "News published successfully"
          : "News draft saved successfully",
      data: news,
    });
  } catch (error) {
    console.error("Create News Error:", error);

    return res.status(500).json({
      success: false,
      message: "Failed to create news",
      error: error.message,
    });
  }
};


// GET ALL NEWS
const getAllNews = async (req, res) => {
  try {
    const news = await News.find().sort({
      createdAt: -1,
    });

    return res.status(200).json({
      success: true,
      data: news,
    });
  } catch (error) {
    console.error("Get News Error:", error);

    return res.status(500).json({
      success: false,
      message: "Failed to fetch news",
      error: error.message,
    });
  }
};


// GET SINGLE NEWS
const getNewsById = async (req, res) => {
  try {
    const news = await News.findById(req.params.id);

    if (!news) {
      return res.status(404).json({
        success: false,
        message: "News not found",
      });
    }

    return res.status(200).json({
      success: true,
      data: news,
    });
  } catch (error) {
    console.error("Get News By ID Error:", error);

    return res.status(500).json({
      success: false,
      message: "Failed to fetch news",
      error: error.message,
    });
  }
};


// UPDATE NEWS
const updateNews = async (req, res) => {
  try {
    const updates = { ...req.body };

    if (updates.title) {
      updates.slug = slugify(updates.title);
    }

    const news = await News.findByIdAndUpdate(
      req.params.id,
      updates,
      {
        new: true,
        runValidators: true,
      }
    );

    if (!news) {
      return res.status(404).json({
        success: false,
        message: "News not found",
      });
    }

    return res.status(200).json({
      success: true,
      message: "News updated successfully",
      data: news,
    });
  } catch (error) {
    console.error("Update News Error:", error);

    return res.status(500).json({
      success: false,
      message: "Failed to update news",
      error: error.message,
    });
  }
};


// DELETE NEWS
const deleteNews = async (req, res) => {
  try {
    const news = await News.findByIdAndDelete(req.params.id);

    if (!news) {
      return res.status(404).json({
        success: false,
        message: "News not found",
      });
    }

    return res.status(200).json({
      success: true,
      message: "News deleted successfully",
    });
  } catch (error) {
    console.error("Delete News Error:", error);

    return res.status(500).json({
      success: false,
      message: "Failed to delete news",
      error: error.message,
    });
  }
};


module.exports = {
  createNews,
  getAllNews,
  getNewsById,
  updateNews,
  deleteNews,
};