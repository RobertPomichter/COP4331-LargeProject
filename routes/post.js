// import packages and middleware
const express = require('express');
const { userById } = require('../controllers/user');
const { getPosts, createPost } = require('../controllers/post');
const { createPostValidation } = require('../validators/index');
const { signInRequired } = require('../controllers/auth');

const router = express.Router();

// get posts route requires sign in middleware
router.get('/', getPosts);

// create post route requires post validation middleware
router.post('/post', signInRequired, createPostValidation, createPost);

// any request with userId will go through middleware
router.param('userId', userById);

module.exports = router;
