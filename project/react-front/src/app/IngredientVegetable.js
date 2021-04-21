import React, { Component } from 'react';
import Image from 'react-bootstrap/Image';
import GenericVegetablePicture from '../images/GenericVegetable.png';

class VegetableIngredient extends Component {
    render() {
        return (
            <div className='ingredientContainer'>
                <div className='ingredientVegetableCircleContainer'>
                    <img className='ingredientImage' src={GenericVegetablePicture}></img>
                </div>
            </div>
        );
    }
}

export default VegetableIngredient;