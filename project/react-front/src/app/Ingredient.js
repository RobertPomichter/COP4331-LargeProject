import React, { Component } from 'react';
import Image from 'react-bootstrap/Image';
import GenericMeatPicture from '../images/GenericMeat.jpg';
import GenericVegetablePicture from '../images/GenericVegetable.png';
import GenericFruitPicture from '../images/GenericFruit.jpg';

// The component that contains the UI for a single ingredient

// TODO: Convert to a universal class that can take in arguments to determine
// what conditional styling should be applied. Also, look into maybe creating 
// a state to keep track of frequently used bits of information about the
// ingredient.

class Ingredient extends Component {

    render() {
        return (
            <div>
                <div className='ingredientMeatCircleContainer'>
                    <img className='ingredientImage' src={GenericMeatPicture}></img>
                </div>
                <div className='ingredientVegetableCircleContainer'>
                    <img className='ingredientImage' src={GenericVegetablePicture}></img>
                </div>
                <div className='ingredientFruitCircleContainer'>
                    <img className='ingredientImage' src={GenericFruitPicture}></img>
                </div>
            </div>
        );
    }
}

export default Ingredient;