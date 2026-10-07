const express = require("express");

const router = express.Router();
const authMiddleware = require("../middlewares/auth.middleware");

const {
  createTransportation,
  getTransportations,
  getTransportationById,
  updateTransportationStatus,
  deleteTransportation,
} = require(
  "../controllers/transportationController"
);


// Public
router.post("/", createTransportation);


// Admin
router.get("/", authMiddleware, getTransportations);

router.get("/:id", authMiddleware,
  getTransportationById
);

router.patch("/:id/status", authMiddleware,
  updateTransportationStatus
);

router.delete("/:id", authMiddleware,
  deleteTransportation
);

module.exports = router;