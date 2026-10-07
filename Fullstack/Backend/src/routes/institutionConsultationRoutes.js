const express = require("express");

const {
  createInstitutionConsultation,
  getInstitutionConsultations,
  getInstitutionConsultationById,
  updateConsultationStatus,
  deleteInstitutionConsultation,
} = require("../controllers/institutionConsultationController");

const router = express.Router();
const authMiddleware = require("../middlewares/auth.middleware");


// Public website
router.post("/", createInstitutionConsultation);


// Admin Dashboard
router.get("/", authMiddleware, getInstitutionConsultations);

router.get("/:id", authMiddleware,
  getInstitutionConsultationById
);

router.patch("/:id/status", authMiddleware,
  updateConsultationStatus
);

router.delete("/:id", authMiddleware,
  deleteInstitutionConsultation
);


module.exports = router;