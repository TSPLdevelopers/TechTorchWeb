const express = require("express");
const router = express.Router();
const authMiddleware = require("../middlewares/auth.middleware");
const {
  getAllLatestUpdates,
  getLatestUpdateById,
  createLatestUpdate,
  updateLatestUpdate,
  deleteLatestUpdate,
} = require("../controllers/latestUpdateController");

router.get("/", getAllLatestUpdates);
router.get("/:id", getLatestUpdateById);
router.post("/", authMiddleware, createLatestUpdate);
router.put("/:id", authMiddleware, updateLatestUpdate);
router.delete("/:id", authMiddleware, deleteLatestUpdate);

module.exports = router;