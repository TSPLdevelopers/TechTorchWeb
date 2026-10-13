const express = require("express");
const authMiddleware = require("../middlewares/auth.middleware");
const {
  listQueries,
  queryMeta,
  queryStats,
  getQuery,
  updateQueryStatus,
  deleteQuery,
} = require("../controllers/queryController");

const router = express.Router();

// Sirf logged-in admin
router.use(authMiddleware);

router.get("/", listQueries);
router.get("/meta", queryMeta);   // /:type/:id se pehle rehna chahiye
router.get("/stats", queryStats);
router.get("/:type/:id", getQuery);
router.patch("/:type/:id/status", updateQueryStatus);
router.delete("/:type/:id", deleteQuery);

module.exports = router;