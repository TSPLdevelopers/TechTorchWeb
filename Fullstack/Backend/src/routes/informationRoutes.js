const express = require("express");

const router = express.Router();
const authMiddleware = require("../middlewares/auth.middleware");

const {
  createTechnologyEnquiry,
  getTechnologyEnquiries,
  getTechnologyEnquiryById,
  updateTechnologyEnquiryStatus,
  deleteTechnologyEnquiry,
} = require("../controllers/informationController");


// ======================================================
// CREATE TECHNOLOGY ENQUIRY
// POST /api/technology-enquiries
// ======================================================

router.post("/", createTechnologyEnquiry);


// ======================================================
// GET ALL TECHNOLOGY ENQUIRIES
// GET /api/technology-enquiries
// ======================================================

router.get("/", authMiddleware, getTechnologyEnquiries);


// ======================================================
// GET SINGLE TECHNOLOGY ENQUIRY
// GET /api/technology-enquiries/:id
// ======================================================

router.get("/:id", authMiddleware, getTechnologyEnquiryById);


// ======================================================
// UPDATE STATUS
// PATCH /api/technology-enquiries/:id/status
// ======================================================

router.patch("/:id/status", authMiddleware, updateTechnologyEnquiryStatus);


// ======================================================
// DELETE ENQUIRY
// DELETE /api/technology-enquiries/:id
// ======================================================

router.delete("/:id", authMiddleware, deleteTechnologyEnquiry);


module.exports = router;