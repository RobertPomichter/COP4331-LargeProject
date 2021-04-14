// import packages
const Ingredient = require('../models/ingredient'); // import User from "../models/user"
const { db } = require('../models/ingredient');

exports.addIngredient = async (req, res) => {
    // create the new ingredient
    const ingredient = await new Ingredient(req.body);
    //save the new ingredient
    await ingredient.save();
    res.status(200).json({message: "Ingredient Added!"});
}

exports.getUserIngredients = async (req, res) => {
    console.log("Beginning of getUserIngredients");
    const email = req.profile.email;

    //best working one
    db.collection("ingredients").find({user_email: email}).toArray(function(err, result) {
        if (err) throw err;
        console.log(result);
    });
    
    /* 
    // alternate implementation to consider
    Ingredient.find({user_email: email}).exec((err, ingredients) => {
        if(err || !ingredients) return res.status(400).json({error: "Ingredients not found."});
        console.log(ingredients);
    });
    */

    console.log("End of getUserIngredients");
    res.json(email);
}