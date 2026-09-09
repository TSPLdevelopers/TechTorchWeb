const express = require("express");
const router = express.Router();

const {
  registerAdmin,
  loginAdmin,
  forgotPassword,
  verifyOTP,
  logoutAdmin, 
 } = require("../controllers/authController");

const authMiddleware = require("../middlewares/auth.middleware");

router.post("/register", registerAdmin);

router.post("/login", loginAdmin);
router.post("/forgot-password", forgotPassword);
router.post("/verify-otp", verifyOTP);
router.post("/logout", authMiddleware, logoutAdmin);

module.exports = router;