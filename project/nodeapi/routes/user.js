// import packages
const express = require('express');

const { 
    allUsers, 
    userById, 
    getUser, 
    updateUser,
    deleteUser,
    hasAuthorization,
    userPhoto,
    addIngredient,
    addTestElement
} = require('../controllers/user');

const { 
    signInRequired 
} = require('../controllers/auth');


// create router using the express package
const router = express.Router();

// any request with userId will go through middleware
router.param('userId', userById);

// route to get all users
router.get('/users', signInRequired, allUsers); 
// route to get a single user
router.get('/user/:userId', signInRequired, getUser); 
// route to get user photo
router.get('/user/photo/:userId', userPhoto);
// route to put a user update
router.put('/user/:userId', signInRequired, hasAuthorization, updateUser);
// route to put a delete user
router.delete('/user/:userId', signInRequired, hasAuthorization, deleteUser);
// route to add an ingredient
// router.put('/addIngredient/:userId', addIngredient);
// route to add an ingredient
router.put('/addTest/:userId', addTestElement);

module.exports = router;