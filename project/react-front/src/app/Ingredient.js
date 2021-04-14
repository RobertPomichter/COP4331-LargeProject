import React, { Component } from 'react';
import GenericMeatPicture from '../images/GenericMeat.jpg';

// The component that contains the UI for a single ingredient

class Ingredient extends Component {

    render() {
        return (
            <img className='ingredient' src={GenericMeatPicture}></img>
        );
    }
}

export default Ingredient;