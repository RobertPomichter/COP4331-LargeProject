import React, { Component } from 'react';
import Image from 'react-bootstrap/Image';
import GenericFruitPicture from '../images/GenericFruit.jpg';

class IngredientMiscellaneous extends Component {
    render() {
        return (
            <div className='ingredientContainer'>
                <div className='ingredientMiscellaneousCircleContainer'>
                    <img className='ingredientImage' src={GenericFruitPicture}></img>
                </div>
            </div>
        );
    }
}

export default IngredientMiscellaneous;