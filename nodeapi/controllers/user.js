// import packages
const User = require('../models/user'); // import User from "../models/user"
const _ = require('lodash');
const fs = require('fs');
const formidable = require('formidable');

// function to update the user profile
exports.userById = (req, res, next, id) => {
    
    // find the user in db by their id
    User.findById(id).exec((err, user) => {
        // if there is an error or user is not found
        if(err || !user){
            // return the 400 status and send error message
            return res.status(400).json({error: "User not found."});
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
    const authorized = req.auth && req.profile && req.auth._id == req.profile._id;

    // if the user is not authorized
    if(!authorized){
        // return a 403 status (Unauthorized) and a json error message
        return res.status(403).json({
            error: "Oops, you are not authorized to complete this action."
        });
    }

    // go to next
    next();
};

// function to get all users from the db
exports.allUsers = (req, res) => {
    User.find( (err, users) => {
        // if we get an error
        if(err || !users){
            return res.status(400).json({error: err});
        }

        // if no error then respond with users
        // recall if key and value are the same
        // we can use only the key
        return res.status(200).json(users);
    }).select("name email created updated");
};

// function to get a single user
exports.getUser = (req, res) => {
    console.log("get user function");
    
    // scrub the hashed password and salt
    req.profile.hashed_password = undefined;
    req.profile.salt = undefined;

    // return the user requested in the parameters of the route
    return res.json(req.profile);
};

exports.userPhoto = (req, res, next) => {
    if(req.profile.photo.data){
        res.set("Content-Type", req.profile.photo.contentType);
        return res.send(req.profile.photo.data);
    }

    // go to next
    next();
}

exports.updateUser = (req, res, next) => {
    // grab the form
    let form = new formidable.IncomingForm();

    // keep the extensions
    form.keepExtensions = true;

    // parse the form
    form.parse(req, (err, fields, files) => {
        // handle any errors
        if(err){
            return res.status(400).json({
                error: "Failed to upload file."
            });
        }

        // get the user from the request profile (from userById function)
        let user = req.profile;

        // use lodash extends function to update user
        // with data from form fields (name, email, etc.)
        user = _.extend(user, fields);

        // update the user updated property
        user.updated = Date.now();

        // if there is a photo in the files of the form
        if(files.photo){
            // set the photo data of the user object
            user.photo.data = fs.readFileSync(files.photo.path);
            user.photo.contentType = files.photo.type;
        }

        // save the user to the db
        user.save( (err, result) => {
            // handle any errors
            if(err){
                return res.status(400).json({
                    error: "An error occurred saving updates to the database."
                });
            }

            // scrub the hashed password and salt
            user.hashed_password = undefined;
            user.salt = undefined;
    
            // if no errors send json response
            res.json(user);
        }); 
    });
}

// function to update the user
exports.deleteUser = (req, res, next) => {
    // get the user profile
    let user = req.profile;

    // use the remove function to delete the user
    user.remove( (err, deletedUser) => {
        // handle any unexpected errors
        if(err){
            res.status(400).json({ error: "Encountered an error attempting to delete your account."});
        }

        // scrub the deleted users password and salt
        user.hashed_password = undefined;
        user.salt = undefined;

        // otherwise send a success response
        res.json({
            message: "Successfully deleted your account. We're sorry to see you go!",
            deletedUser: user 
        });
    })
    
};