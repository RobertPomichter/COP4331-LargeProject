import React, { Component } from 'react';
import { Card, Carousel } from 'react-bootstrap';
import { Button } from'@material-ui/core';
import { getAllIngredients, getAllMeats } from '../apiCalls/apiInventory.js';
import Ingredient from '../app/Ingredient.js';
import IngredientFruit from '../app/IngredientFruit.js';
import IngredientMeat from '../app/IngredientMeat.js';
import IngredientVegetable from '../app/IngredientVegetable.js';
import IngredientDairy from '../app/IngredientDairy.js';
import IngredientSpices from '../app/IngredientSpices.js';
import IngredientMiscellaneous from '../app/IngredientMiscellaneous';
import AddCircleTwoToneIcon from '@material-ui/icons/AddCircleTwoTone';
import IconButton from '@material-ui/core/IconButton';


class InventoryPanel extends Component {
    // copied from Users.js - idea is to hold an array of ingredients
    constructor(){
        super();
        this.state = {
            meats: [],
            vegetables: [],
            fruit: [],
            dairy: [],
            spices: [],
            miscellaneous: []
        }
    }

    clickGetAllIngredients = event => {
        // prevent default page reload
        event.preventDefault();

        getAllIngredients();
    }

    clickGetMeats = event => {
        // prevent default page reload
        event.preventDefault();

        getAllMeats();
    }

    render() {
        return (
            <div>
                <div className='jumbotron'>
                    <h1>Inventory Testing Area</h1>
                </div>
                    <Button variant="contained" onClick={this.clickGetAllIngredients}>
                        Test: Get All Ingredients
                    </Button> <br />
                    <Button variant="contained" onClick={this.clickGetMeats}>
                        Test: Get Meats
                    </Button>

                <Card className='searchCard'>
                    <input className='inventorySearchBar' placeholder='Search Bar goes here :D'></input>
                    <Button>

                    </Button>
                </Card>

                {/* Do we want to use an official card component or just divs?
                    Just divs might be easier and more flexible */}

                {/* <Card className='inventoryResultsCard'>
                    <Card.Title>Inventory Card</Card.Title>
                    <Card.Text>This is some sample text inside the card.
                        Different categories: Meat, Vegetable, Fruit, Dairy, Miscellaneous
                    </Card.Text>
                    <Card.Body>
                        <Ingredient></Ingredient>
                    </Card.Body>
                </Card> */}

                {/* Bootstrap Card Version */}
                {/* <Card className='categoryCard'>
                <Card.Title>Meats Category Card (Bootstrap)</Card.Title>
                    <Card.Text>This is some sample text inside the card.</Card.Text>
                        <div className='ingredientRowContainer'>
                            <IngredientMeat /><IngredientMeat /><IngredientMeat /><IngredientMeat />
                        </div>
                </Card> */}

                {/* Manual Card Version */}
                <div className='categoryCard'>
                    <div className='cardHeader'>
                        <div className='cardTitle'>
                            <span className='cardTitleText'>Meats Category Card (Live)</span>
                        </div>
                        <IconButton>
                            <AddCircleTwoToneIcon className='addIngredientButton' fontSize='large'/>
                        </IconButton>  
                    </div>
                    <div className='ingredientRowContainer'>
                    </div>
                </div>

                {/* Manual Card Version */}
                <div className='categoryCard'>
                    <div className='cardHeader'>
                        <div className='cardTitle'>
                            <span className='cardTitleText'>Meats Category Card (Manual)</span>
                        </div>
                        <IconButton>
                            <AddCircleTwoToneIcon className='addIngredientButton' fontSize='large'/>
                        </IconButton>  
                    </div>
                    <div className='ingredientRowContainer'>
                        <IngredientMeat /><IngredientMeat /><IngredientMeat /><IngredientMeat />
                    </div>
                </div>

                {/* <Card className='categoryCard'>
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
                </Card> */}
            </div>
        );
    }
}

export default InventoryPanel;