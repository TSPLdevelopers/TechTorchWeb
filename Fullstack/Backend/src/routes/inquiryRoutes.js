const express = require("express");
const { createInquiry } = require("../controllers/Inquirycontroller");

const router = express.Router();

// Public website forms. Admins read / manage everything through /api/queries.
router.post("/", createInquiry);

module.exports = router;