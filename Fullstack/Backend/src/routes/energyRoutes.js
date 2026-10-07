const express = require("express");

const router = express.Router();
const authMiddleware = require("../middlewares/auth.middleware");

const {
  createEnergy,
  getEnergies,
  getEnergyById,
  updateEnergyStatus,
  deleteEnergy,
} = require("../controllers/energyController");

// Public
router.post("/", createEnergy);

// Admin
router.get("/", authMiddleware, getEnergies);
router.get("/:id", authMiddleware, getEnergyById);
router.patch("/:id/status", authMiddleware, updateEnergyStatus);
router.delete("/:id", authMiddleware, deleteEnergy);

module.exports = router;