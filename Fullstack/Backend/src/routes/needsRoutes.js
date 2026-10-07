const express = require("express");

const {
  createNeeds,
  getNeeds,
  getNeedsById,
  updateNeedsStatus,
  deleteNeeds,
} = require("../controllers/needsController");

const router = express.Router();

router.post("/", createNeeds);

router.get("/", getNeeds);

router.get("/:id", getNeedsById);

router.patch("/:id/status", updateNeedsStatus);

router.delete("/:id", deleteNeeds);

module.exports = router;