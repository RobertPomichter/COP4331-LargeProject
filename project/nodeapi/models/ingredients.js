const { intersection, isInteger } = require('lodash');
const mongoose = require('mongoose');

const ingredientsSchema = new mongoose.Schema({
    chicken: {
        type: Number,
        default: 0,
        "category": "meat",
        "unit": ""
    },
    egg: {
        type: Number,
        default: 0,
        "category": "meat",
        "unit": ""
    },
    fish: {
        type: Number,
        default: 0,
        "category": "meat",
        "unit": ""
    },
    ground_beef: {
        type: Number,
        default: 0,
        "category": "meat",
        "unit": ""
    },
    lamb: {
        type: Number,
        default: 0,
        "category": "meat",
        "unit": ""
    },
    pork: {
        type: Number,
        default: 0,
        "category": "meat",
        "unit": ""
    },
    tofu: {
        type: Number,
        default: 0,
        "category": "meat",
        "unit": ""
    },
    turkey: {
        type: Number,
        default: 0,
        "category": "meat",
        "unit": ""
    },
    shrimp: {
        type: Number,
        default: 0,
        "category": "meat",
        "unit": ""
    },
    steak: {
        type: Number,
        default: 0,
        "category": "meat",
        "unit": ""
    },
    avocado: {
        type: Number,
        default: 0,
        "category": "vegetable",
        "unit": ""
    },
    bean: {
        type: Number,
        default: 0,
        "category": "vegetable",
        "unit": ""
    },
    broccoli: {
        type: Number,
        default: 0,
        "category": "vegetable",
        "unit": ""
    },
    brussel_sprouts: {
        type: Number,
        default: 0,
        "category": "vegetable",
        "unit": ""
    },
    carrot: {
        type: Number,
        default: 0,
        "category": "vegetable",
        "unit": ""
    },
    cauliflower: {
        type: Number,
        default: 0,
        "category": "vegetable",
        "unit": ""
    },
    celery: {
        type: Number,
        default: 0,
        "category": "vegetable",
        "unit": ""
    },
    corn: {
        type: Number,
        default: 0,
        "category": "vegetable",
        "unit": ""
    },
    cucumber: {
        type: Number,
        default: 0,
        "category": "vegetable",
        "unit": ""
    },
    eggplant: {
        type: Number,
        default: 0,
        "category": "vegetable",
        "unit": ""
    },
    garlic: {
        type: Number,
        default: 0,
        "category": "vegetable",
        "unit": ""
    },
    green_bean: {
        type: Number,
        default: 0,
        "category": "vegetable",
        "unit": ""
    },
    lettuce: {
        type: Number,
        default: 0,
        "category": "vegetable",
        "unit": ""
    },
    onion: {
        type: Number,
        default: 0,
        "category": "vegetable",
        "unit": ""
    },
    pea: {
        type: Number,
        default: 0,
        "category": "vegetable",
        "unit": ""
    },
    pepper: {
        type: Number,
        default: 0,
        "category": "vegetable",
        "unit": ""
    },
    potato: {
        type: Number,
        default: 0,
        "category": "vegetable",
        "unit": ""
    },
    tomato: {
        type: Number,
        default: 0,
        "category": "vegetable",
        "unit": ""
    },
    squash: {
        type: Number,
        default: 0,
        "category": "vegetable",
        "unit": ""
    },
    apple: {
        type: Number,
        default: 0,
        "category": "fruit",
        "unit": ""
    },
    banana: {
        type: Number,
        default: 0,
        "category": "fruit",
        "unit": ""
    },
    cantelope: {
        type: Number,
        default: 0,
        "category": "fruit",
        "unit": ""
    },
    grape: {
        type: Number,
        default: 0,
        "category": "fruit",
        "unit": ""
    },
    kiwi: {
        type: Number,
        default: 0,
        "category": "fruit",
        "unit": ""
    },
    orange: {
        type: Number,
        default: 0,
        "category": "fruit",
        "unit": ""
    },
    peach: {
        type: Number,
        default: 0,
        "category": "fruit",
        "unit": ""
    },
    pear: {
        type: Number,
        default: 0,
        "category": "fruit",
        "unit": ""
    },
    pineapple: {
        type: Number,
        default: 0,
        "category": "fruit",
        "unit": ""
    },
    raisin: {
        type: Number,
        default: 0,
        "category": "fruit",
        "unit": ""
    },
    stawberry: {
        type: Number,
        default: 0,
        "category": "fruit",
        "unit": ""
    },
    watermelon: {
        type: Number,
        default: 0,
        "category": "fruit",
        "unit": ""
    },
    bagel: {
        type: Number,
        default: 0,
        "category": "grain",
        "unit": ""
    },
    bread_wheat: {
        type: Number,
        default: 0,
        "category": "grain",
        "unit": ""
    },
    bread_white: {
        type: Number,
        default: 0,
        "category": "grain",
        "unit": ""
    },
    cereal: {
        type: Number,
        default: 0,
        "category": "grain",
        "unit": ""
    },
    chips: {
        type: Number,
        default: 0,
        "category": "grain",
        "unit": ""
    },
    crackers: {
        type: Number,
        default: 0,
        "category": "grain",
        "unit": ""
    },
    english_muffin: {
        type: Number,
        default: 0,
        "category": "grain",
        "unit": ""
    },
    pasta: {
        type: Number,
        default: 0,
        "category": "grain",
        "unit": ""
    },
    rice_brown: {
        type: Number,
        default: 0,
        "category": "grain",
        "unit": ""
    },
    rice_white: {
        type: Number,
        default: 0,
        "category": "grain",
        "unit": ""
    },
    butter: {
        type: Number,
        default: 0,
        "category": "dairy",
        "unit": ""
    },
    cheese: {
        type: Number,
        default: 0,
        "category": "dairy",
        "unit": ""
    },
    milk: {
        type: Number,
        default: 0,
        "category": "dairy",
        "unit": ""
    },
    yogurt: {
        type: Number,
        default: 0,
        "category": "dairy",
        "unit": ""
    },
    template: {
        type: Number,
        default: 0,
        "category": "",
        "unit": ""
    }
});

module.exports = mongoose.model("Ingredients", ingredientsSchema);