const express = require("express");
const router = express.Router();
const {
  getAllFeaturedStories,
  getFeaturedStoryById,
  createFeaturedStory,
  updateFeaturedStory,
  deleteFeaturedStory,
} = require("../controllers/featuredStoryController");

router.get("/", getAllFeaturedStories);
router.get("/:id", getFeaturedStoryById);
router.post("/", createFeaturedStory);
router.put("/:id", updateFeaturedStory);
router.delete("/:id", deleteFeaturedStory);

module.exports = router;