// import packages and middleware
const express = require('express');
const { requireSignin } = require('../controllers/auth');
const { getPosts, createPost } = require('../controllers/post');
const { createPostValidation } = require('../validators/index');
const { signInRequired } = require('../controllers/auth');

const router = express.Router();

// get posts route requires sign in middleware
router.get('/', signInRequired, getPosts);

// create post route requires post validation middleware
router.post('/post', createPostValidation, createPost);

module.exports = router;
