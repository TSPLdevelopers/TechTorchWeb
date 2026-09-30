const express = require("express");

const {
  createWhitepaper,
  getAllWhitepapers,
  getWhitepaperById,
  updateWhitepaper,
  deleteWhitepaper,
} = require("../controllers/whitepaperController");

const router = express.Router();

router.post("/", createWhitepaper);
router.get("/", getAllWhitepapers);
router.get("/:id", getWhitepaperById);
router.put("/:id", updateWhitepaper);
router.delete("/:id", deleteWhitepaper);

module.exports = router;