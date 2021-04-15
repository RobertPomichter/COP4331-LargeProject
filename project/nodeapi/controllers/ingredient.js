// import packages
const Ingredient = require('../models/ingredient'); // import User from "../models/user"
const { db } = require('../models/ingredient');

exports.addIngredient = async (req, res) => {
    // check if ingredient exists via similar robert code in auth.js (don't forget comma for name and user_email)

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
    const category = req.body.category;

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
    const category = req.body.category;

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
    const category = req.body.category;

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
