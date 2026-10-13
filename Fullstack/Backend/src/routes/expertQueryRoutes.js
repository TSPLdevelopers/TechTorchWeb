const express = require("express");
const router = express.Router();
const { createExpertQuery } = require("../controllers/expertQueryController");

router.post("/", createExpertQuery);

module.exports = router;