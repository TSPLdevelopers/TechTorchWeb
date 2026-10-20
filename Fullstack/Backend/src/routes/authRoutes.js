
const express = require("express");

const router = express.Router();

const {
  registerAdmin,
  registerCandidate,
  getMe,
  loginAdmin,
  forgotPassword,
  verifyOTP,
  resetPassword,
  logoutAdmin,
  getAdminProfile,
} = require("../controllers/authController");

const {
  getAdminById,
  updateAdmin,
  updateAdminPassword,
  toggleAdminStatus,
  deleteAdmin,
} = require("../controllers/adminController");

const authMiddleware = require("../middlewares/auth.middleware");
const { anyAuth } = authMiddleware;

// ================= AUTH ROUTES =================

router.post("/register", registerAdmin);
router.post("/register-candidate", registerCandidate);

router.post("/login", loginAdmin);
router.post("/forgot-password", forgotPassword);
router.post("/verify-otp", verifyOTP);
router.post("/reset-password", resetPassword);
router.post("/logout", logoutAdmin);

// Admin or Candidate: Get logged-in account
router.get("/me", protect, getMe);

// Admin only: Get admin profile
router.get("/profile", authMiddleware, getAdminProfile);

// ================= ADMIN MANAGEMENT ROUTES =================

router.get("/:id", authMiddleware, getAdminById);

router.put("/:id", authMiddleware, updateAdmin);

router.put("/:id/password", authMiddleware, updateAdminPassword);

router.patch("/:id/status", authMiddleware, toggleAdminStatus);

router.delete("/:id", authMiddleware, deleteAdmin);

module.exports = router;
