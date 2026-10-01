const express = require("express");

const router = express.Router();

const {
  registerAdmin,
  loginAdmin,
  forgotPassword,
  verifyOTP,
  resetPassword,
  logoutAdmin,
} = require("../controllers/authController");

const authMiddleware = require("../middlewares/auth.middleware");

router.post("/register", registerAdmin);

router.post("/login", loginAdmin);

router.post("/forgot-password", forgotPassword);

router.post("/verify-otp", verifyOTP);

router.post("/reset-password", resetPassword);

router.post("/logout", authMiddleware, logoutAdmin);

router.get("/profile", authMiddleware, getAdminProfile);

router.get("/:id", authMiddleware, getAdminById);

router.put("/:id", authMiddleware, updateAdmin);

router.put("/:id/password", authMiddleware, updateAdminPassword);

router.patch("/:id/status", authMiddleware, toggleAdminStatus);

router.delete("/:id", authMiddleware, deleteAdmin);

module.exports = router;