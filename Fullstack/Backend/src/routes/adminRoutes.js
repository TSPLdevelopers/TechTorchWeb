const express = require("express");
const router = express.Router();
const {
  registerAdmin,
  loginAdmin,
  getAdminProfile,
  getAdminById,
  updateAdmin,
  updateAdminPassword,
  toggleAdminStatus,
  deleteAdmin,
} = require("../controllers/admin.controller");
const { protectAdmin } = require("../middleware/adminAuth.middleware");

router.post("/register", registerAdmin);
router.post("/login", loginAdmin);
router.get("/profile", protectAdmin, getAdminProfile);
router.get("/:id", protectAdmin, getAdminById);
router.put("/:id", protectAdmin, updateAdmin);
router.put("/:id/password", protectAdmin, updateAdminPassword);
router.patch("/:id/status", protectAdmin, toggleAdminStatus);
router.delete("/:id", protectAdmin, deleteAdmin);

module.exports = router;