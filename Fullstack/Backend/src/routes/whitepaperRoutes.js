const express = require("express");

const {
  createWhitepaper,
  getAllWhitepapers,
  getWhitepaperById,
  updateWhitepaper,
  deleteWhitepaper,
} = require("../controllers/whitepaperController");

const router = express.Router();
const authMiddleware = require("../middlewares/auth.middleware");

router.post("/", authMiddleware, createWhitepaper);
router.get("/", getAllWhitepapers);
router.get("/:id", getWhitepaperById);
router.put("/:id", authMiddleware, updateWhitepaper);
router.delete("/:id", authMiddleware, deleteWhitepaper);

module.exports = router;