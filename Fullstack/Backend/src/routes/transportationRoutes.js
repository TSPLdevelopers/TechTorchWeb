const express = require("express");

const router = express.Router();

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
router.get("/", getTransportations);

router.get(
  "/:id",
  getTransportationById
);

router.patch(
  "/:id/status",
  updateTransportationStatus
);

router.delete(
  "/:id",
  deleteTransportation
);

module.exports = router;