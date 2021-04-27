// package imports
const express = require('express');

const {
    allIngredients,
    addIngredient,
    getUserIngredients,
    getUserIngredientsByCategory,
    getUserIngredientsByCategoryHave,
    getUserIngredientsByCategoryDontHave,
    getUserIngredientsQuery,
    updateIngredients,
    deleteIngredient,
    ingredientById
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
router.param('ingredientId', ingredientById);

// route to get all ingredients
//router.get('/ingredients', allIngredients);
// route to add an ingredient
router.post('/ingredient', addIngredient);
// route to get a user's ingredients
router.get('/ingredient/:userId', getUserIngredients);
// route to get user's ingredients of a certain category
router.get('/ingredientCategory/:userId', getUserIngredientsByCategory);
// route to get user's ingredients of a certain category they have in stock
router.get('/ingredientCategoryHave/:userId', getUserIngredientsByCategoryHave);
// route to get user's ingredients of a certain category they are out of
router.get('/ingredientCategoryDont/:userId', getUserIngredientsByCategoryDontHave);
// route to get user's ingridents by a custom front end query
router.get('/ingredientQuery/:userId', getUserIngredientsQuery);
// route to put an ingredient update
router.put('/ingredientUpdate/:ingredientId', updateIngredients); 
// route to delete an ingredient
router.delete('/deleteIngredient/:userId', deleteIngredient);

module.exports = router;