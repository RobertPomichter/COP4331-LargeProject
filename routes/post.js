const express = require('express');
const postController = require('../controllers/post');
const validators = require('../validators/index');

const router = express.Router();

router.get('/', postController.getPosts);
router.post('/post', validators.createPostValidation, postController.createPost);

module.exports = router;
