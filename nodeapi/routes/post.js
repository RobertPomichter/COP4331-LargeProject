// import packages and middleware
const express = require('express');
const { createPostValidation } = require('../validators/index');
const { signInRequired } = require('../controllers/auth');
const { userById } = require('../controllers/user');
const {     
    getPosts,
    createPost, 
    postsByUser, 
    postById,
    isPoster,
    updatePost,
    deletePost 
} = require('../controllers/post');

const router = express.Router();

// get all posts
router.get('/posts', getPosts);
// route to get posts by a userId (requires sign in)
router.get('/posts/by/:userId', signInRequired, postsByUser);
// route to create post (requires sign in and post validation)
router.post('/post/new/:userId', signInRequired, createPost, createPostValidation);
// route to update a post (requires sign in and post validation)
router.put('/post/:postId', signInRequired, updatePost, createPostValidation);
// delete a post
router.delete('/post/:postId', signInRequired, isPoster, deletePost);

// any request with userId will go through middleware
router.param('userId', userById);
// any request with postId will go through middleware
router.param('postId', postById);

module.exports = router;
