const express = require("express");
const {
  createSecureBusiness,
  getSecureBusinesses,
  getSecureBusinessById,
  updateSecureBusinessStatus,
  deleteSecureBusiness,
} = require("../controllers/secureBusinessController");

const router = express.Router();
const authMiddleware = require("../middlewares/auth.middleware");

router.post("/", createSecureBusiness);
router.get("/", authMiddleware, getSecureBusinesses);
router.get("/:id", authMiddleware, getSecureBusinessById);
router.patch("/:id/status", authMiddleware, updateSecureBusinessStatus);
router.delete("/:id", authMiddleware, deleteSecureBusiness);

module.exports = router;