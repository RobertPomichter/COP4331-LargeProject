const { intersection, isInteger } = require('lodash');
const mongoose = require('mongoose');

// each user has an inventory of ingredients
    // inventory 
    // inventory has an unlimited number of ingredients


const ingredientSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    category: {
        type: String,
        required: true,
        trim: true
    },
    unit: {
        type: String,
        trim: true
    },
    amount: {
        type: Number,
        default: 0
    },
    photo: {
        data: Buffer,
        contentType: String
    },
    user_id: mongoose.Schema.Types.ObjectId,
    user_email: {
        type: String,
        trim: true
    }
});

module.exports = mongoose.model("Ingredient", ingredientSchema);