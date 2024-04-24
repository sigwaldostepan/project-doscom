const {
  createPost,
  deletePost,
  editPost,
  getPosts,
  getPostById,
} = require("../controllers/posts");

const express = require("express");
const router = express.Router();

router.get("/", getPosts);
router.get("/:id", getPostById);
router.post("/", createPost);
router.put("/:id", editPost);
router.delete("/:id", deletePost);

module.exports = router;
