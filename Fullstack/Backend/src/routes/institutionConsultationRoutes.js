const express = require("express");

const {
  createInstitutionConsultation,
  getInstitutionConsultations,
  getInstitutionConsultationById,
  updateConsultationStatus,
  deleteInstitutionConsultation,
} = require("../controllers/institutionConsultationController");

const router = express.Router();


// Public website
router.post("/", createInstitutionConsultation);


// Admin Dashboard
router.get("/", getInstitutionConsultations);

router.get(
  "/:id",
  getInstitutionConsultationById
);

router.patch(
  "/:id/status",
  updateConsultationStatus
);

router.delete(
  "/:id",
  deleteInstitutionConsultation
);


module.exports = router;