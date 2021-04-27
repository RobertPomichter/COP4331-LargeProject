import React, { Component } from 'react';
import Ingredient from '../app/Ingredient.js';

// Testing panel for the ingredient components

class IngredientTesting extends Component {

    render() {
        return (
            <div>
                <div className='jumbotron'>
                    <h1>Ingredient Component Testing Area</h1>
                </div>
                <Ingredient />
            </div>
        );
    }
}

export default IngredientTesting;