// import packages
const jwt = require('jsonwebtoken');
const expressJwt = require('express-jwt');
const User = require('../models/user');
const Ingredients = require('../models/ingredients');
const _ = require("lodash");
const { sendEmail } = require("../helpers");

// import env variables
const dotenv = require('dotenv');
dotenv.config();

// signup controller
exports.signup = async (req, res) => {
    // check if the email is already taken
    const userExists = await User.findOne({email: req.body.email});
    if(userExists) return res.status(403).json({
        error: "Email is already taken"
    });
    // create the new ingredient list
    const ingredients = await new Ingredients();
    await ingredients.save();
    // else create the new user
    const user = await new User(req.body);
    // now add the ingredient's objectid to the relevant field in the user data
    user.ingedientsId = ingredients._id; 
    // saving the user
    await user.save();
    res.status(200).json({message: "Successfully registered!"});
}

// sign in controller
exports.signin = (req, res) => {
    // deconstruct the request
    const { email, password } = req.body;
    
    // find the user based on email
    User.findOne({email}, (err, user) =>{
        // if findOne returns an error or no user
        if(err || !user){
            return res.status(401).json({
                error: "Sorry, we could not find your account. Please register or verify the email is correct."
            });
        }

        // if findOne returns the user verify the password/email combo
        // use authenticate method in the user model
        if(!user.authenticate(password)) {
            return res.status(401).json({
                error: "Sorry, the password and email combination is incorrect.",
            });
        }

        // generate a token for the user
        const token = jwt.sign({_id: user._id}, process.env.JWT_SECRET);

        // persist the token as 'Q' in cookie with expiry date
        res.cookie("Q", token, {expires: new Date(Date.now() + 900000), httpOnly: true});

        // return response with user and token to frontend
        const { _id, name, email } = user;
        return res.status(200).json({
            token, 
            user: { 
                _id, 
                name, 
                email }
            });
    });
}

// required sign in controller
// restricts posts to logged in users
exports.signInRequired = expressJwt({
    secret: process.env.JWT_SECRET,
    algorithms: ["HS256"], // added later
    userProperty: "auth",
});

// signout controller
exports.signout = (req, res) => {
    res.clearCookie("Q");
    res.status(200).json({
        message: "Succesfully signed out!"
    });
}

// function for forgotPassword 
exports.forgotPassword = (req, res) => {
    // check the body contains something
    if (!req.body) {
        return res.status(400).json({ message: "No request body" });
    }
    if (!req.body.email){
        return res.status(400).json({ message: "Please provide an email" });
    }        

    // extract the email from the body of the request
    const { email } = req.body;

    // find the user based on email
    User.findOne({ email }, (err, user) => {
        // if err or no user
        if (err || !user)
            return res.status("401").json({
                error: "User with that email does not exist!"
            });
 
        // generate a token with user id and secret
        const token = jwt.sign(
            { _id: user._id, iss: "NODEAPI" },
            process.env.JWT_SECRET
        );
 
        // email data
        const emailData = {
            from: "noreply@node-react.com",
            to: email,
            subject: "Password Reset Instructions",
            text: `Please use the following link to reset your password: ${
                process.env.CLIENT_URL
            }/reset-password/${token}`,
            html: `<p>Please use the following link to reset your password:</p> <p>${
                process.env.CLIENT_URL
            }/reset-password/${token}</p>`
        };
 
        return user.updateOne({ resetPasswordLink: token }, (err, success) => {
            if (err) {
                return res.json({ message: err });
            } else {
                sendEmail(emailData);
                return res.status(200).json({
                    message: `Email has been sent to ${email}. Follow the instructions to reset your password.`
                });
            }
        });
    });
}
 
// function to reset the user's password
exports.resetPassword = (req, res) => {
    // extract the new password and the link from the request
    const { resetPasswordLink, newPassword } = req.body;
 
    // first find the user in the database with user's resetPasswordLink
    User.findOne({ resetPasswordLink }, (err, user) => {
        // if err or no user
        if (err || !user)
            return res.status("401").json({
                error: "Invalid Link!"
            });
 
        const updatedFields = {
            password: newPassword,
            resetPasswordLink: ""
        };
 
        // update the user using lodash extend method
        user = _.extend(user, updatedFields);
        user.updated = Date.now();
 
        // save the user to the db
        user.save((err, result) => {
            if (err) {
                return res.status(400).json({
                    error: err
                });
            }
            res.json({
                message: `You can now login with your new password.`
            });
        });
    });
};