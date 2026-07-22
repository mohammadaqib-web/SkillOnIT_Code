const express = require("express");
const authMiddleware = require("../middlewares/authMiddleware");
const { createPost, deletePost } = require("../controllers/postsController");
const upload = require("../middlewares/uploadMiddleware");
const router = express.Router();

router.post("/createPost", authMiddleware, upload.single("image"), createPost);
router.delete("/deletePost", authMiddleware, deletePost);

module.exports = router;
