import React, { Component } from 'react';
import { Button } from'@material-ui/core';
import { getAllIngredients } from '../apiCalls/apiInventory.js';

class InventoryPanel extends Component {

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
                <div className="getIngredientsContainer">
                    <Button variant="contained" onClick={this.clickGetAllIngredients}>
                        Test: Get All Ingredients
                    </Button>
                </div>
            </div>
        );
    }
}

export default InventoryPanel;