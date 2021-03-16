const express = require('express');
const { getPosts, createPost } = require('../controllers/post');
const validators = require('../validators/index');

const router = express.Router();

router.get('/', getPosts);
router.post('/post', validators.createPostValidation, createPost);

module.exports = router;
