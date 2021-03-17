// import packages
const User = require('../models/user');

// function to update the user profile
exports.userById = (req, res, next, id) => {
    // find the user in db by their id
    User.findById(id).exec((err, user) => {
        // if there is an error or user is not found
        if(err || ! user){
            // return the 400 status and send error message
            return res.status(400).json({error: "User was not found"});
        }

        // otherwise the user was found 
        // add the profile object to the req
        // give the profile object the user
        req.profile = user;
        
        // go to next
        next();
    });
};

// function to determine if user has authorization to complete action
exports.hasAuthorization = (req, res, next) => {
    // check if user has a profile and auth
    // check if profile id matches the auth id
    const authorized = (req.profile && req.auth && req.auth._id === req.profile_id)

    // if the user is not authorized
    if(!authorized){
        // return a 403 status (Unauthorized) and a json error message
        return res.status(403).json({
            error: "Oops, you are not authorized to complete this action."
        });
    }

    // go to next
    next();
}
