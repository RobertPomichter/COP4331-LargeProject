import React, { Component } from 'react';
import Image from 'react-bootstrap/Image';
import GenericMeatPicture from '../images/GenericMeat.jpg';


class MeatIngredient extends Component {
    render() {
        return (
            <div className='ingredientContainer'>
                <div className='ingredientMeatCircleContainer'>
                    <img className='ingredientImage' src={GenericMeatPicture}></img>
                </div>
            </div>
        );
    }
}

export default MeatIngredient;