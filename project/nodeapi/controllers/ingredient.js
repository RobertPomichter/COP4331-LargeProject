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
    const email = req.profile.email;

    //res.json({message: "this is working"});
    //res.json(req.profile);

    console.log("pre");

    //var ings = db.collection("ingredients").find({"email": email});
    //console.log(ings);

    
    db.collection("ingredients").find({email: email}).toArray(function(err, result) {
        if (err) throw err;
        console.log(result);
    });
    

    /*
    var MongoClient = require('mongodb').MongoClient;
    var url = "mongodb://localhost:5000/";

    MongoClient.connect(url, function(err, db) {
        if (err) throw err;
        var dbo = db.db("mydb");
        var query = {email: email2};
        dbo.collection("ingredients").find(query).toArray(function(err, result) {
            if (err) throw err;
            console.log(result);
            db.close();
        });
    });
    */

    console.log("post");
    res.json(email);
}