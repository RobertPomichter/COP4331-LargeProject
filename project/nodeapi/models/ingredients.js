const { intersection, isInteger } = require('lodash');
const mongoose = require('mongoose');

const ingredientsSchema = new mongoose.Schema({
    chicken: {
        type: Number,
        default: 0
    },
    egg: {
        type: Number,
        default: 0
    },
    fish: {
        type: Number,
        default: 0
    },
    ground_beef: {
        type: Number,
        default: 0
    },
    lamb: {
        type: Number,
        default: 0
    },
    pork: {
        type: Number,
        default: 0
    },
    tofu: {
        type: Number,
        default: 0
    },
    turkey: {
        type: Number,
        default: 0
    },
    shrimp: {
        type: Number,
        default: 0
    },
    steak: {
        type: Number,
        default: 0
    },
    template: {
        type: Number,
        default: 0
    }
});

module.exports = mongoose.model("Ingredients", ingredientsSchema);