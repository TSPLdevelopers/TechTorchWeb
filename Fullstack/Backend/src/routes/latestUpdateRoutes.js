const express = require("express");
const router = express.Router();
const {
  getAllLatestUpdates,
  getLatestUpdateById,
  createLatestUpdate,
  updateLatestUpdate,
  deleteLatestUpdate,
} = require("../controllers/latestUpdateController");

router.get("/", getAllLatestUpdates);
router.get("/:id", getLatestUpdateById);
router.post("/", createLatestUpdate);
router.put("/:id", updateLatestUpdate);
router.delete("/:id", deleteLatestUpdate);

module.exports = router;