const Ingredients = require('../models/ingredients');
const _ = require('lodash');
const fs = require('fs');
const formidable = require('formidable');


// middleware function to get ingredients by ID
exports.ingredientsById = (req, res, next, id) => {
    
    // find the ingredient list in db by the id
    Ingredients.findById(id).exec((err, ingredients) => {
        // if there is an error or ingredients is not found
        if(err || !ingredients){
            // return the 400 status and send error message
            return res.status(400).json({error: "Ingredient list not found."});
        }

        // otherwise the user was found 
        // add the profile object to the req
        // give the profile object the ingredients
        req.profile = ingredients;
        
        // go to next
        next();
    });
};


// function to get user ingredients
exports.getIngredients = (req, res) => {
    console.log("get ingredients function");

    // return the ingredients requested in the parameters of the route
    return res.json(req.profile);
}


// function to update user ingredients
exports.updateIngredients = (req, res, next) => {
    // grab the form
    let form = new formidable.IncomingForm();

    // keep the extensions
    form.keepExtensions = true;

    form.parse(req, (err, fields, files) => {
        // handle any errors
        if(err){
            return res.status(400).json({
                error: "Failed to upload file."
            });
        }

        // get the user from the request profile (from userById function)
        let ingredients = req.profile;

        // use lodash extends function to update user
        // with data from form fields (name, email, etc.)
        ingredients = _.extend(ingredients, fields);

        // save the user to the db
        ingredients.save( (err, result) => {
            // handle any errors
            if(err){
                return res.status(400).json({
                    error: "An error occurred saving updates to the database."
                });
            }
    
            // if no errors send json response
            res.json(ingredients);
        }); 
    });
}
