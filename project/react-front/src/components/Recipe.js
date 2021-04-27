import React, { Component, useState } from 'react';
import { v4 } from "uuid";
import { Button } from'@material-ui/core';

const Recipe = ({ recipe }) => {

    const [show, setShow] = useState(false);
    const { label, image, url, ingredients } = recipe.recipe;

    const RecipeDetails = () => {
        return ingredients.map(ingredient => {
            return (
                <ul key={v4()} className="ingredient-list">
                    <li className="ingredient-text">{ingredient.text}</li>
                    <li className="ingredient-weight">Weight - {ingredient.weight}</li>
                </ul>
            );
        });
    };
  
    return (
      <div className="recipe">
        <h3>{label}</h3>
        <img src={image} alt={label} />
        <a href={url} target="_blank" rel="noopener noreferrer">
          URL
        </a>
        <button onClick={() => setShow(!show)}>Ingredients</button>
        {show && <RecipeDetails ingredients={ingredients} />}
      </div>
    );
};

export default Recipe;