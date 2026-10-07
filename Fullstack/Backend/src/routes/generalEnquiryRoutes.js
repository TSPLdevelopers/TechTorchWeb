const express = require("express");

const {
  createGeneralEnquiry,
  getGeneralEnquiries,
  getGeneralEnquiryById,
  updateGeneralEnquiryStatus,
  deleteGeneralEnquiry,
} = require(
  "../controllers/generalEnquiryController"
);

const router = express.Router();
const authMiddleware = require("../middlewares/auth.middleware");


// Public website
router.post("/", createGeneralEnquiry);


// Admin Dashboard
router.get("/", authMiddleware, getGeneralEnquiries);

router.get("/:id", authMiddleware,
  getGeneralEnquiryById
);

router.patch("/:id/status", authMiddleware,
  updateGeneralEnquiryStatus
);

router.delete("/:id", authMiddleware,
  deleteGeneralEnquiry
);

module.exports = router;