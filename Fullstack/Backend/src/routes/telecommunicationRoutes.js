const express = require("express");

const router = express.Router();

const {
  createTelecommunication,
  getTelecommunications,
  getTelecommunicationById,
  updateTelecommunicationStatus,
  deleteTelecommunication,
} = require(
  "../controllers/telecommunicationController"
);


// Public
router.post("/", createTelecommunication);


// Admin
router.get("/", getTelecommunications);

router.get(
  "/:id",
  getTelecommunicationById
);

router.patch(
  "/:id/status",
  updateTelecommunicationStatus
);

router.delete(
  "/:id",
  deleteTelecommunication
);


module.exports = router;