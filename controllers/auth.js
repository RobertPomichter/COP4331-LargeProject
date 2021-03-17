// import packages
const jwt = require('jsonwebtoken');
const expressJwt = require('express-jwt');
const User = require('../models/user');

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
    // else create the new user
    const user = await new User(req.body);
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