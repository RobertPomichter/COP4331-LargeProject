import React, { Component } from 'react';
import Image from 'react-bootstrap/Image';
import GenericMeatPicture from '../images/GenericMeat.jpg';

// The component that contains the UI for a single ingredient

class Ingredient extends Component {

    render() {
        return (
            <div>
                <h3>This image was made using HTML/JSX tags</h3>
                <div className='ingredientCircleContainer'>
                    <img className='ingredientImage' src={GenericMeatPicture}></img>
                </div>
                
            </div>
            
        );
    }
}

export default Ingredient;