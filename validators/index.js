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