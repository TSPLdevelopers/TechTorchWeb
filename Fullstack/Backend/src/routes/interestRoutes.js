const express = require("express");
const c = require("../controllers/interestController");
const authMiddleware = require("../middlewares/auth.middleware");
const { candidateAuth } = authMiddleware;

const router = express.Router();

// candidate
router.post("/", candidateAuth, c.showInterest);
router.get("/mine", candidateAuth, c.myInterests);
router.delete("/mine/:id", candidateAuth, c.withdrawInterest);

// admin
router.get("/", authMiddleware, c.adminList);
router.patch("/:id/status", authMiddleware, c.adminUpdateStatus);
router.delete("/:id", authMiddleware, c.adminDelete);

module.exports = router;