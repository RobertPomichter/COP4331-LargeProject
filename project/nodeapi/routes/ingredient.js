// package imports
const express = require('express');

const {
    allIngredients,
    addIngredient,
    getUserIngredients
} = require('../controllers/ingredient');

const { 
    signInRequired 
} = require('../controllers/auth');

const { 
    userById
} = require('../controllers/user');

// create router using the express package
const router = express.Router();

// any request with userId will go through middleware
router.param('userId', userById);

// route to get all ingredients
//router.get('/ingredients', allIngredients);
// route to add an ingredient
router.post('/ingredient', addIngredient);
// route to get a user's ingredients
router.get('/ingredient/:userId', getUserIngredients);

module.exports = router;