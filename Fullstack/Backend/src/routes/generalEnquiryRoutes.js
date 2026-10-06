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


// Public website
router.post("/", createGeneralEnquiry);


// Admin Dashboard
router.get("/", getGeneralEnquiries);

router.get(
  "/:id",
  getGeneralEnquiryById
);

router.patch(
  "/:id/status",
  updateGeneralEnquiryStatus
);

router.delete(
  "/:id",
  deleteGeneralEnquiry
);

module.exports = router;