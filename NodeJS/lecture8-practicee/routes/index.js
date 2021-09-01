const express = require('express');
const router = express.Router();
const Blog = require('../models/blog')
const blogController = require("../controllers/blog-controller")

/* GET home page. */
router.
  get('/', blogController.getAllPosts)
  .get('/about', blogController.getAbout)
  .get('/create', blogController.getCreate)
  .post('/create', blogController.postCreate)
  .get('/blogs/:id', blogController.getBlogs)
  .post('/delete/:id', blogController.postDelete)

module.exports = router;
