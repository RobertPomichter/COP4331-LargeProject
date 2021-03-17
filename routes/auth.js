const express = require('express');
const { signup } = require('../controllers/auth');
const { userSignupValidation } = require('../validators/index');

const router = express.Router();

router.post('/signup', userSignupValidation, signup);

module.exports = router;