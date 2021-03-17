const express = require('express');
const { signup, signin, signout } = require('../controllers/auth');
const { userSignupValidation } = require('../validators/index');

const router = express.Router();

// sign up route
router.post('/signup', userSignupValidation, signup);

// sign in route
router.post('/signin', signin);

// sign out route
router.get('/signout', signout); 

module.exports = router;