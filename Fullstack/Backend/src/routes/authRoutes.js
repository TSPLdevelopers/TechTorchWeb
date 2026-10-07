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

router.post("/register", registerAdmin);
router.post("/register-candidate", registerCandidate);

router.post("/login", loginAdmin);

router.post("/forgot-password", forgotPassword);

router.post("/verify-otp", verifyOTP);

router.post("/reset-password", resetPassword);

router.post("/logout", logoutAdmin); // works for admins and candidates, even with an expired session
router.get("/me", anyAuth, getMe);

router.get("/profile", authMiddleware, getAdminProfile);

router.get("/:id", authMiddleware, getAdminById);

router.put("/:id", authMiddleware, updateAdmin);

router.put("/:id/password", authMiddleware, updateAdminPassword);

router.patch("/:id/status", authMiddleware, toggleAdminStatus);

router.delete("/:id", authMiddleware, deleteAdmin);

module.exports = router;