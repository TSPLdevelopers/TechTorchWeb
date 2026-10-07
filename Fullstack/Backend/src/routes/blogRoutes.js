const express = require("express");
const c = require("../controllers/blogController");
const authMiddleware = require("../middlewares/auth.middleware");
const { candidateAuth } = authMiddleware;

const router = express.Router();

// candidate (declared before "/:id" so these paths are not treated as ids)
router.get("/mine", candidateAuth, c.myBlogs);
router.post("/", candidateAuth, c.createBlog);
router.put("/mine/:id", candidateAuth, c.updateMyBlog);
router.delete("/mine/:id", candidateAuth, c.deleteMyBlog);

// admin
router.get("/admin/all", authMiddleware, c.adminList);
router.post("/admin", authMiddleware, c.adminCreate);
router.put("/admin/:id", authMiddleware, c.adminUpdate);
router.delete("/admin/:id", authMiddleware, c.adminDelete);

// public
router.get("/", c.listPublished);
router.get("/:id", c.getPublished);

module.exports = router;