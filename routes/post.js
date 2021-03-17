const express = require('express');
const { getPosts, createPost } = require('../controllers/post');
const { createPostValidation } = require('../validators/index');

const router = express.Router();

router.get('/', getPosts);
router.post('/post', createPostValidation, createPost);

module.exports = router;
