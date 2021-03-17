const dotenv = require('dotenv');
dotenv.config();

exports.createPostValidation = (req, res, next) => {
    //title validation
    req.check('title', "Please enter a title.").notEmpty();
    req.check('title', "Title must be between 1 and 50 characters.").isLength({
        min: 1,
        max: 50
    });

    //body validation
    req.check('body', "Please enter a body.").notEmpty();
    req.check('body', "Body must be between 1 and 2000 characters.").isLength({
        min: 1,
        max: 2000
    });

    // check for errors
    const errors = req.validationErrors();
    // if errors exist show them as they appear
    if(errors){
        const firstError = errors.map((err) => err.msg)[0]
        return res.status(400).json({error: firstError});
    }

    // go to next middleware
    next();
};

exports.userSignupValidation = (req, res, next) => {
    //name validation
    req.check('name', "Please enter a name.").notEmpty();
    req.check('name', "Title must be between 1 and 50 characters.").isLength({
        min: 1,
        max: 50
    });
    
    //email validation using RFC 5322 official standard REGEX
    req.check('email', "Please enter an email.").notEmpty();
    req.check('email', "Email must be between 1 and 35 characters.")
    .matches(process.env.RFC)
    .withMessage("Email must be a valid email address.");

    //password validation
    req.check('password', "Please enter a password.").notEmpty();
    req.check('email', "Password must be between 6 and 20 characters.").isLength({
        min: 6,
        max: 20
    });

    // check for errors
    const errors = req.validationErrors();
    // if errors exist show them as they appear
    if(errors){
        const firstError = errors.map((err) => err.msg)[0]
        return res.status(400).json({error: firstError});
    }

    // go to next middleware
    next();
};