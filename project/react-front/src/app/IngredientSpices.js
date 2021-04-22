import React, { Component } from 'react';
import Image from 'react-bootstrap/Image';
import GenericSpicesPicture from '../images/GenericSpices.jpg';

class IngredientSpices extends Component {
    render() {
        return (
            <div className='ingredientContainer'>
                <div className='ingredientSpicesCircleContainer'>
                    <img className='ingredientImage' src={GenericSpicesPicture}></img>
                </div>
            </div>
        );
    }
}

export default IngredientSpices;