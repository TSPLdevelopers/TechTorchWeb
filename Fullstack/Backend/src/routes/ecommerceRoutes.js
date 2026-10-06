const express = require("express");

const router = express.Router();

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
router.get("/", getEcommerces);

router.get(
  "/:id",
  getEcommerceById
);

router.patch(
  "/:id/status",
  updateEcommerceStatus
);

router.delete(
  "/:id",
  deleteEcommerce
);

module.exports = router;