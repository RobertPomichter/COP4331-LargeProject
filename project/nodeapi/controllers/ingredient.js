// import packages
const Ingredient = require('../models/ingredient'); // import User from "../models/user"
const { db } = require('../models/ingredient');
const user = require('../models/user');
const _ = require('lodash');
const fs = require('fs');
const formidable = require('formidable');

exports.ingredientById = (req, res, next, id) => {

    // find the ingredient in db by their id
    Ingredient.findById(id).exec((err, ingredient) => {
        // if there is an error or user is not found
        if(err || !user){
            //return the 400 status and send error message
            return res.status(400).json({
                error: "Ingredient not found"
            });
        }

        // otherwise the ingredient was found
        // add the profile object to the req
        // give the progile object the user
        req.profile = ingredient;

        // go to next
        next();
    })
}

exports.addIngredient = async (req, res) => {
    // check if ingredient exists via similar robert code in auth.js (don't forget comma for name and user_email)

    // Check and see if the ingredient being added is already in the ingredient list
    // MAX FOUND A TYPO: was req.body.email and not req.body.user_email
    const ingredientExists = await Ingredient.findOne({email: req.body.user_email}, {name: req.body.name}); //{email: req.body.email}, {
	if(ingredientExists) 
        return res.status(403).json({ 
		    error: "That food already exists as an ingredient"
	    });

    // create the new ingredient
    const ingredient = await new Ingredient(req.body);
    //save the new ingredient
    await ingredient.save();
    res.status(200).json({message: "Ingredient Added!"});
}

exports.getUserIngredients = (req, res) => {
    console.log("Beginning of getUserIngredients");
    const email = req.profile.email;

    db.collection("ingredients").find({user_email: email}).toArray(function(err, result) {
        if (err) {
            return res.json({error: "Error fetching ingredients from the db"}); 
        }
        console.log("Ingredients fetched successfully.");
        return res.json(result);
    });
}

exports.getUserIngredientsByCategory = (req, res) => {
    console.log("Beginning of getUserIngredients");
    const email = req.profile.email;
    const category = req.query.cat;

    db.collection("ingredients").find({user_email: email, category: category}).toArray(function(err, result) {
        if (err) {
            return res.json({error: "Error fetching ingredients from the db"}); 
        }
        console.log("Ingredients fetched successfully.");
        return res.json(result);
    });
}

exports.getUserIngredientsByCategoryDontHave = (req, res) => {
    console.log("Beginning of getUserIngredients");
    const email = req.profile.email;
    const category = req.query.cat;

    db.collection("ingredients").find({user_email: email, category: category, amount: 0}).toArray(function(err, result) {
        if (err) {
            return res.json({error: "Error fetching ingredients from the db"}); 
        }
        console.log("Ingredients fetched successfully.");
        return res.json(result);
    });
}

exports.getUserIngredientsByCategoryHave = (req, res) => {
    console.log("Beginning of getUserIngredients");
    const email = req.profile.email;
    const category = req.query.cat;

    db.collection("ingredients").find({user_email: email, category: category, amount: { $ne : 0 } }).toArray(function(err, result) {
        if (err) {
            return res.json({error: "Error fetching ingredients from the db"}); 
        }
        console.log("Ingredients fetched successfully.");
        return res.json(result);
    });
}

// custom querry currently under construction
exports.getUserIngredientsQuery = (req, res) => {
    console.log("Beginning of getUserIngredients");
    const query = req.query;

    // dont forget to also pass the email in this query
    db.collection("ingredients").find(query).toArray(function(err, result) {
        if (err) {
            return res.json({error: "Error fetching ingredients from the db"}); 
        }
        console.log("Ingredients fetched successfully.");
        return res.json(result);
    });
}

exports.updateIngredients = (req, res, next) => {
    // grab the form

    let form = new formidable.IncomingForm();
    
    // keep the extensions
    form.keepExtensions = true;

    //parse the form
    form.parse(req, (err, fields, files) => {
        // handle any errors
        if(err){
            return res.status(400).json({
                error: "Failed to upload file"
            });
        }

        // get the ingredient from the request profile (from ingredientById function)
        let ingredient = req.profile;

        // use lodash extends function to update user
        // with data from form fields (name, email, etc.)
        ingredient = _.extend(ingredient, fields);

        // update the user updated property
        ingredient.updated = Date.now();

        // if there is a photo in the files of the form
        if(files.photo){
            // set the photo data of the user object
            ingredient.photo.data = fs.readFileSync(files.photo.path);
            ingredient.photo.contentType = files.photo.type;
        }

        // save the ingredient to the db
        ingredient.save( (err, result) => {
            // handle any errors
            if(err){
                return res.status(400).json({
                    error: "An error occured saving updates to the database."
                });
            }

            // if no errors send json response
            res.json(ingredient);
        });
    });
}
