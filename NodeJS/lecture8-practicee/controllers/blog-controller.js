const Blog = require('../models/blog')

const getAllPosts = async (req, res) => {
  const blogs = await Blog.find()
  console.log(blogs)
  res.render('index', { title: 'Express', blogs });
}

const getAbout = (req, res) => {
  res.render('about')
};

const getCreate = (req, res) => {
  res.render('create')
};

const postCreate = async (req, res) => {
  // console.log(req.body)
  try {
    await Blog.create(req.body)
    res.redirect('/')
  } catch (error) {
    console.log(error)
  }
};

const getBlogs = async (req, res) => {
  const blog = await Blog.findById(req.params.id)
  console.log(blog)
  res.render('details', { blog })
};

const postDelete = async (req, res) => {
  await Blog.findByIdAndDelete(req.params.id)
  res.redirect('/')
};

module.exports = {
  getAllPosts,
  getAbout,
  getCreate,
  postCreate,
  getBlogs,
  postDelete
}