const express = require("express");

const router = express.Router();

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

router.get("/", getTechnologyEnquiries);


// ======================================================
// GET SINGLE TECHNOLOGY ENQUIRY
// GET /api/technology-enquiries/:id
// ======================================================

router.get("/:id", getTechnologyEnquiryById);


// ======================================================
// UPDATE STATUS
// PATCH /api/technology-enquiries/:id/status
// ======================================================

router.patch("/:id/status", updateTechnologyEnquiryStatus);


// ======================================================
// DELETE ENQUIRY
// DELETE /api/technology-enquiries/:id
// ======================================================

router.delete("/:id", deleteTechnologyEnquiry);


module.exports = router;