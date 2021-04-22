import React, { Component } from 'react';
import Image from 'react-bootstrap/Image';
import GenericFruitPicture from '../images/GenericFruit.jpg';


class IngredientFruit extends Component {
    render() {
        return (
            <div className='ingredientContainer'>
                <div className='ingredientFruitCircleContainer'>
                    <img className='ingredientImage' src={GenericFruitPicture}></img>
                </div>
            </div>
        );
    }
}

export default IngredientFruit;