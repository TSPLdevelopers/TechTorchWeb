const express = require("express");

const {
  createFmcgConsultation,
  getFmcgConsultations,
  getFmcgConsultationById,
  updateFmcgConsultationStatus,
  deleteFmcgConsultation,
} = require(
  "../controllers/fmcgConsultationController"
);

const router = express.Router();


// Public website
router.post("/", createFmcgConsultation);


// Admin Dashboard
router.get("/", getFmcgConsultations);

router.get(
  "/:id",
  getFmcgConsultationById
);

router.patch(
  "/:id/status",
  updateFmcgConsultationStatus
);

router.delete(
  "/:id",
  deleteFmcgConsultation
);

module.exports = router;