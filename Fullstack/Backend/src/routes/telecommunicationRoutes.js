const express = require("express");

const router = express.Router();
const authMiddleware = require("../middlewares/auth.middleware");

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
router.get("/", authMiddleware, getTelecommunications);

router.get("/:id", authMiddleware,
  getTelecommunicationById
);

router.patch("/:id/status", authMiddleware,
  updateTelecommunicationStatus
);

router.delete("/:id", authMiddleware,
  deleteTelecommunication
);


module.exports = router;