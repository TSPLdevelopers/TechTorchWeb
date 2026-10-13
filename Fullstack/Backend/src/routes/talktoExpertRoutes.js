const express = require("express");
const router = express.Router();
const { createTalkToExpert } = require("../controllers/talkToExpertController");

router.post("/", createTalkToExpert);

module.exports = router;