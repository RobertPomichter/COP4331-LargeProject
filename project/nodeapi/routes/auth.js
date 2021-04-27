const express = require('express');
const { signup,
        verifyEmail, 
        signin, 
        signout, 
        signInRequired,
        forgotPassword,
        resetPassword } = require('../controllers/auth');
const { userById } = require('../controllers/user');
const { userSignupValidation,
        passwordResetValidator } = require('../validators/index');

const router = express.Router(); 

// sign up route
router.post('/signup', userSignupValidation, signup);

// verify user account route
router.put("/verify-account", verifyEmail);

// sign in route
router.post('/signin', signin);

// sign out route
router.get('/signout', signInRequired, signout); 

// password forgot and reset routes
router.put("/forgot-password", forgotPassword);
router.put("/reset-password", passwordResetValidator, resetPassword);

// any request with userId will go through middleware
router.param('userId', userById);

module.exports = router;