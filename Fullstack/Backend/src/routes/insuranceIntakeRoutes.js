const express = require("express");

const {
  createInsuranceIntake,
  getInsuranceIntakes,
  getInsuranceIntakeById,
  updateInsuranceIntakeStatus,
  deleteInsuranceIntake,
} = require("../controllers/insuranceIntakeController");

const router = express.Router();

// Public website
router.post("/", createInsuranceIntake);

// Admin APIs
router.get("/", getInsuranceIntakes);

router.get("/:id", getInsuranceIntakeById);

router.patch(
  "/:id/status",
  updateInsuranceIntakeStatus
);

router.delete(
  "/:id",
  deleteInsuranceIntake
);

module.exports = router;