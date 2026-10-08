const express = require("express");

const {
  createSecureBusiness,
  getSecureBusinesses,
  getSecureBusinessById,
  updateSecureBusinessStatus,
  deleteSecureBusiness,
} = require("../controllers/secureBusinessController");

const router = express.Router();

router.post("/", createSecureBusiness);

router.get("/", getSecureBusinesses);

router.get("/:id", getSecureBusinessById);

router.patch("/:id/status", updateSecureBusinessStatus);

router.delete("/:id", deleteSecureBusiness);

module.exports = router;