import React, { Component } from 'react';
import Image from 'react-bootstrap/Image';
import GenericDairyPicture from '../images/GenericDairy.jpg';

class IngredientDairy extends Component {
    render() {
        return (
            <div className='ingredientContainer'>
                <div className='ingredientDairyCircleContainer'>
                    <img className='ingredientImage' src={GenericDairyPicture}></img>
                </div>
            </div>
        );
    }
}

export default IngredientDairy;