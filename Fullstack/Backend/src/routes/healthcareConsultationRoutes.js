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


// Public website
router.post("/", createHealthcareConsultation);


// Admin Dashboard
router.get("/", getHealthcareConsultations);

router.get(
  "/:id",
  getHealthcareConsultationById
);

router.patch(
  "/:id/status",
  updateHealthcareConsultationStatus
);

router.delete(
  "/:id",
  deleteHealthcareConsultation
);


module.exports = router;