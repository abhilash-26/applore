const express = require("express");
const {
  createBlog,
  getAllBlog,
  getAllApprovedBlog,
  approveBlog,
} = require("../controllers/blogController");
const router = express.Router();

router.post("/create", createBlog);

router.post("/get-all", getAllBlog);

router.post("/get-all-approved", getAllApprovedBlog);

router.post("/approve-blog", approveBlog);

module.exports = router;
