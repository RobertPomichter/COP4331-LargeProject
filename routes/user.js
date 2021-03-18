// import packages
const express = require('express');
const { 
    allUsers, 
    userById, 
    getUser, 
    updateUser,
    deleteUser,
    hasAuthorization 
} = require('../controllers/user');
const { signInRequired } = require('../controllers/auth');

// creat router using the express package
const router = express.Router();

// any request with userId will go through middleware
router.param('userId', userById);

// route to get all users
router.get('/users', signInRequired, allUsers); 
// route to get a single user
router.get('/user/:userId', signInRequired, getUser); 
// route to put a user update
router.put('/user/:userId', signInRequired, hasAuthorization, updateUser);
// route to put a delete user
router.delete('/user/:userId', signInRequired, hasAuthorization, deleteUser);

module.exports = router;