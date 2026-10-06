const express = require("express");

const {
  createFinancialConsultation,
  getFinancialConsultations,
  getFinancialConsultationById,
  updateFinancialConsultationStatus,
  deleteFinancialConsultation,
} = require(
  "../controllers/financialConsultationController.js"
);

const router = express.Router();


// Public website
router.post("/", createFinancialConsultation);


// Admin Dashboard
router.get("/", getFinancialConsultations);

router.get(
  "/:id",
  getFinancialConsultationById
);

router.patch(
  "/:id/status",
  updateFinancialConsultationStatus
);

router.delete(
  "/:id",
  deleteFinancialConsultation
);


module.exports = router;