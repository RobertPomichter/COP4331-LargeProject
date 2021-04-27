import React, { Component } from 'react';


class RecipeTesting extends Component {

    render() {
        return (
            <div className='jumbotron'>
                <h1>Recipe Testing Area</h1>
                <span>
                    Play with Edamam's Recipe Search API to see how we can format
                    its returned list of recipes.
                </span>
                <br></br>
                <span>
                    Link to Edamam's API page: <a href="https://developer.edamam.com/edamam-recipe-api">
                    https://developer.edamam.com/edamam-recipe-api</a>
                </span>
            </div>
        );
    }
}

export default RecipeTesting;