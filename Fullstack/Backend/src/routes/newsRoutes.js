const express = require("express");

const {
  createNews,
  getAllNews,
  getNewsById,
  updateNews,
  deleteNews,
} = require("../controllers/newsController");

const router = express.Router();
const authMiddleware = require("../middlewares/auth.middleware");

router.post("/", authMiddleware, createNews);

router.get("/", getAllNews);

router.get("/:id", getNewsById);

router.put("/:id", authMiddleware, updateNews);

router.delete("/:id", authMiddleware, deleteNews);

module.exports = router;