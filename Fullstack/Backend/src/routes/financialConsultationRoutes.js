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
const authMiddleware = require("../middlewares/auth.middleware");


// Public website
router.post("/", createFinancialConsultation);


// Admin Dashboard
router.get("/", authMiddleware, getFinancialConsultations);

router.get("/:id", authMiddleware,
  getFinancialConsultationById
);

router.patch("/:id/status", authMiddleware,
  updateFinancialConsultationStatus
);

router.delete("/:id", authMiddleware,
  deleteFinancialConsultation
);


module.exports = router;