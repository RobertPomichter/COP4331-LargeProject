import React, { Component } from 'react';
import EmptyFoodCategory from '../images/EmptyFoodCategory.jpg';

// Simple Component used to show the user a food category in their
// inventory is empty after attempting to retrieve its ingredients

class EmptyCategoryDisplay extends Component {

    render() {
        return (
            <div className='emptyFoodCategoryContainer'>
                <img className='emptyCategoryImage' src={EmptyFoodCategory}></img>
            </div>
        );
    }
}

export default EmptyCategoryDisplay;