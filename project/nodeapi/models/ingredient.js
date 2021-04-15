const { intersection, isInteger } = require('lodash');
const mongoose = require('mongoose');

const ingredientSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    category: {
        type: String,
        default: "misc",
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
    user_email: {
        type: String,
        trim: true
    }
});

module.exports = mongoose.model("Ingredient", ingredientSchema);