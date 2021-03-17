const express = require('express');
const { signup, signin } = require('../controllers/auth');
const { userSignupValidation } = require('../validators/index');

const router = express.Router();

router.post('/signup', userSignupValidation, signup);
router.post('/signin', signin);

module.exports = router;