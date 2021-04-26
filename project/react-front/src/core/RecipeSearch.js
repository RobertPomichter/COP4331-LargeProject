import React, { Component , useState } from 'react';
import "../_RecipeSearch.scss";
import Axios from "axios";
import Recipe from "./Recipe";
import Alert from "./Alert";
import { v4 } from "uuid";
import 'bootstrap/dist/css/bootstrap.min.css';


function RecipeSearch () {
    const [q, setQuery] = useState("");
    const [recipes, setRecipes] = useState([]);
    const [alert, setAlert] = useState("");

    const APP_ID = "6169f965";
    const APP_KEY = "1375be426d82f39810fd21666fb0fe72";
    const recipeUrl =`https://api.edamam.com/search?g=${q}&app_id=${APP_ID}&app_key=${APP_KEY}`;

    const onChange = (e) => {
        setQuery(e.target.value);
    };
    
    const displayRecipes = (e) => {
        e.preventDefault();
        loadRecipes();
    };

    // function that loads recipes from the edamam api
    const loadRecipes = async () => {
        if (q !== "") {
            try {
                const result = await Axios.get(recipeUrl);
                if (!result.data.more) {
                    return setAlert("No results found.");
                }
                console.log(result);
                setRecipes(result.data.hits);
            } catch(e) {
                console.error(e);
            }
            setQuery("");
            setAlert("");
        } else {
            setAlert("Please enter a food.");
        }
    };

    return (  
        <div className="recipeSearch text-center">
            <div className="jumbotron">
                <h2 className="display-3">Search Recipes Here</h2>
            </div>
            <div className="d-flex align-items-center">
                <form className="searchBar" onSubmit={displayRecipes}> 
                    {alert !== "" && <Alert alert={alert} />}
                    <input type="text" 
                    className="form-control form-control-lg" 
                    name="q" 
                    placeholder="Search Recipes" 
                    autoComplete="off" 
                    onChange={onChange} value={q}/>
                    <button className="btn btn-dark" type="button" value="Search" />
                </form>
            </div>
            <div className="recipes">
                {recipes != [] && recipes.map(recipe => <Recipe key={v4()} recipe={recipe} />)}
            </div>
        </div>
    );
}

export default RecipeSearch;