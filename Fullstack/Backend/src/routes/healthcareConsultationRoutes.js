const express = require("express");

const {
  createHealthcareConsultation,
  getHealthcareConsultations,
  getHealthcareConsultationById,
  updateHealthcareConsultationStatus,
  deleteHealthcareConsultation,
} = require(
  "../controllers/healthcareConsultationController"
);

const router = express.Router();
const authMiddleware = require("../middlewares/auth.middleware");


// Public website
router.post("/", createHealthcareConsultation);


// Admin Dashboard
router.get("/", authMiddleware, getHealthcareConsultations);

router.get("/:id", authMiddleware,
  getHealthcareConsultationById
);

router.patch("/:id/status", authMiddleware,
  updateHealthcareConsultationStatus
);

router.delete("/:id", authMiddleware,
  deleteHealthcareConsultation
);


module.exports = router;