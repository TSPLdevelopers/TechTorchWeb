const express = require("express");

const router = express.Router();
const authMiddleware = require("../middlewares/auth.middleware");

const {
  createEcommerce,
  getEcommerces,
  getEcommerceById,
  updateEcommerceStatus,
  deleteEcommerce,
} = require("../controllers/ecommerceController");

// Public
router.post("/", createEcommerce);

// Admin
router.get("/", authMiddleware, getEcommerces);

router.get("/:id", authMiddleware,
  getEcommerceById
);

router.patch("/:id/status", authMiddleware,
  updateEcommerceStatus
);

router.delete("/:id", authMiddleware,
  deleteEcommerce
);

module.exports = router;