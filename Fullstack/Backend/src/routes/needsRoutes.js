const express = require("express");
const {
  createNeeds,
  getNeeds,
  getNeedsById,
  updateNeedsStatus,
  deleteNeeds,
} = require("../controllers/needsController");

const router = express.Router();
const authMiddleware = require("../middlewares/auth.middleware");

router.post("/", createNeeds);
router.get("/", authMiddleware, getNeeds);
router.get("/:id", authMiddleware, getNeedsById);
router.patch("/:id/status", authMiddleware, updateNeedsStatus);
router.delete("/:id", authMiddleware, deleteNeeds);

module.exports = router;