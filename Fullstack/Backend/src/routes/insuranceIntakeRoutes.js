const express = require("express");

const {
  createInsuranceIntake,
  getInsuranceIntakes,
  getInsuranceIntakeById,
  updateInsuranceIntakeStatus,
  deleteInsuranceIntake,
} = require("../controllers/insuranceIntakeController");

const router = express.Router();
const authMiddleware = require("../middlewares/auth.middleware");

// Public website
router.post("/", createInsuranceIntake);

// Admin APIs
router.get("/", authMiddleware, getInsuranceIntakes);

router.get("/:id", authMiddleware, getInsuranceIntakeById);

router.patch("/:id/status", authMiddleware,
  updateInsuranceIntakeStatus
);

router.delete("/:id", authMiddleware,
  deleteInsuranceIntake
);

module.exports = router;