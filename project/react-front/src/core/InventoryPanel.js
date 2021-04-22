import React, { Component } from 'react';
import { Card, Carousel } from 'react-bootstrap';
import { Button } from'@material-ui/core';
import { getAllIngredients } from '../apiCalls/apiInventory.js';
import Ingredient from '../app/Ingredient.js';
import IngredientFruit from '../app/IngredientFruit.js';
import IngredientMeat from '../app/IngredientMeat.js';
import IngredientVegetable from '../app/IngredientVegetable.js';
import IngredientDairy from '../app/IngredientDairy.js';
import IngredientSpices from '../app/IngredientSpices.js';
import IngredientMiscellaneous from '../app/IngredientMiscellaneous';


class InventoryPanel extends Component {
    // copied from Users.js - idea is to hold an array of ingredients
    constructor(){
        super();
        this.state = {
            ingredients: []
        }
    }

    clickGetAllIngredients = event => {
        // prevent default page reload
        event.preventDefault();

        getAllIngredients();
    }

    render() {
        return (
            <div>
                <div className='jumbotron'>
                    <h1>Inventory Testing Area</h1>
                </div>
                    <Button variant="contained" onClick={this.clickGetAllIngredients}>
                        Test: Get All Ingredients
                    </Button>

                <Card className='searchCard'>
                    <input className='inventorySearchBar' placeholder='Search Bar goes here :D'></input>
                    <Button>

                    </Button>
                </Card>

                {/* Do we want to use an official card component or just divs? */}
                <Card className='inventoryResultsCard'>
                    <Card.Title>Inventory Card</Card.Title>
                    <Card.Text>This is some sample text inside the card.
                        Different categories: Meat, Vegetable, Fruit, Dairy, Miscellaneous
                    </Card.Text>
                    <Card.Body>
                        <Ingredient></Ingredient>
                    </Card.Body>
                </Card>

                <Card className='categoryCard'>
                <Card.Title>Meats Category Card</Card.Title>
                    <Card.Text>This is some sample text inside the card.</Card.Text>
                        <div className='ingredientRowContainer'>
                            <IngredientMeat /><IngredientMeat /><IngredientMeat /><IngredientMeat />
                        </div>
                </Card>
                <Card className='categoryCard'>
                <Card.Title>Vegetables Category Card</Card.Title>
                    <Card.Text>This is some sample text inside the card.</Card.Text>
                    <Card.Body>
                        <div className='ingredientRowContainer'>
                            <IngredientVegetable /><IngredientVegetable /><IngredientVegetable />
                        </div>
                    </Card.Body>
                </Card>
                <Card className='categoryCard'>
                <Card.Title>Fruit Category Card</Card.Title>
                    <Card.Text>This is some sample text inside the card.</Card.Text>
                    <Card.Body>
                        <div className='ingredientRowContainer'>
                            <IngredientFruit /><IngredientFruit /><IngredientFruit /><IngredientFruit /><IngredientFruit />
                        </div>
                    </Card.Body>
                </Card>
                <Card className='categoryCard'>
                    <Card.Title>Dairy Category Card</Card.Title>
                        <Card.Text>This is some sample text inside the card.</Card.Text>
                        <Card.Body>
                            <div className='ingredientRowContainer'>
                                <IngredientDairy />
                            </div>
                        </Card.Body>
                </Card>
                <Card className='categoryCard'>
                    <Card.Title>Spices Category Card</Card.Title>
                        <Card.Text>This is some sample text inside the card.</Card.Text>
                        <Card.Body>
                            <div className='ingredientRowContainer'>
                            <IngredientSpices /><IngredientSpices /><IngredientSpices />
                            </div>
                        </Card.Body>
                </Card>
                <Card className='categoryCard'>
                    <Card.Title>Miscellaneous Category Card</Card.Title>
                        <Card.Text>This is some sample text inside the card.</Card.Text>
                        <Card.Body>
                            <div className='ingredientRowContainer'>
                                <IngredientMiscellaneous />
                            </div>
                        </Card.Body>
                </Card>
            </div>
        );
    }
}

export default InventoryPanel;