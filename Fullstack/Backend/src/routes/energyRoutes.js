const express = require("express");

const router = express.Router();

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
router.get("/", getEnergies);
router.get("/:id", getEnergyById);
router.patch("/:id/status", updateEnergyStatus);
router.delete("/:id", deleteEnergy);

module.exports = router;