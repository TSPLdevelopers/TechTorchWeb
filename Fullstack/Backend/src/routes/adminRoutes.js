const express = require("express");
const router = express.Router();

const {
  getAdminProfile,
  getAllAdmins,
  getAdminById,
  updateAdmin,
  updateAdminPassword,
  toggleAdminStatus,
  deleteAdmin,
} = require("../controllers/adminController");

const authMiddleware = require("../middlewares/auth.middleware");
const { requireSuperadmin } = authMiddleware;

router.use(authMiddleware);

router.get("/profile", getAdminProfile);
router.get("/", requireSuperadmin, getAllAdmins);
router.get("/:id", getAdminById);
router.put("/:id", updateAdmin);
router.put("/:id/password", updateAdminPassword);
router.patch("/:id/status", requireSuperadmin, toggleAdminStatus);
router.delete("/:id", requireSuperadmin, deleteAdmin);

module.exports = router;