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
const authMiddleware = require("../middlewares/auth.middleware");


// Public website
router.post("/", createFmcgConsultation);


// Admin Dashboard
router.get("/", authMiddleware, getFmcgConsultations);

router.get("/:id", authMiddleware,
  getFmcgConsultationById
);

router.patch("/:id/status", authMiddleware,
  updateFmcgConsultationStatus
);

router.delete("/:id", authMiddleware,
  deleteFmcgConsultation
);

module.exports = router;