// import packages
const express = require('express');

const { 
    ingredientsById,
    getIngredients,
    updateIngredients 
} = require('../controllers/ingredients');

const { 
    signInRequired 
} = require('../controllers/auth');

// create router using the express package
const router = express.Router();

// any request with userId will go through middleware
router.param('ingredientId', ingredientsById);

// route to get all in one model ingredients
route.get('/ingredients/:ingredientId', getIngredients);
// route to update all ingredients
route.put('/ingredients/:ingredientId', updateIngredients);

module.exports = router;