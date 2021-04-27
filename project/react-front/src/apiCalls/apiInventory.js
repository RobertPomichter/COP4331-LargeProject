
// Houses all functions that call the API endpoints related to the Inventory Panel

export const getAllIngredients = () => {
    // console log prints in the browser's page inspection terminal
    console.log("Henlo, I'm going to start trying to getAllIngredients...");
};

export const getAllMeats = (token, userId) => {
    // console log prints in the browser's page inspection terminal
    console.log("Henlo, I'm going to start trying to getAllMeats...");

    // variable that contains the JSON communication parameters & content
    const requestContent = {
        method: 'GET',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`
        }
    }

    // fetch to the backend
    return fetch(`${process.env.REACT_APP_API_URL}/ingredientCategory/${userId}?cat=meat`, requestContent)
    .then( response => {
        return response.json();
    })
    .catch(err => console.log(err));
};

export const getAllVegetables = (token, userId) => {
    // console log prints in the browser's page inspection terminal
    console.log("Henlo, I'm going to start trying to getAllVegetables...");

    // variable that contains the JSON communication parameters & content
    const requestContent = {
        method: 'GET',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`
        }
    }

    // fetch to the backend
    return fetch(`${process.env.REACT_APP_API_URL}/ingredientCategory/${userId}?cat=vegetable`, requestContent)
    .then( response => {
        return response.json();
    })
    .catch(err => console.log(err));
};

export const getAllFruit = (token, userId) => {
    // console log prints in the browser's page inspection terminal
    console.log("Henlo, I'm going to start trying to getAllFruit...");

    // variable that contains the JSON communication parameters & content
    const requestContent = {
        method: 'GET',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`
        }
    }

    // fetch to the backend
    return fetch(`${process.env.REACT_APP_API_URL}/ingredientCategory/${userId}?cat=fruit`, requestContent)
    .then( response => {
        return response.json();
    })
    .catch(err => console.log(err));
};

export const getAllDairy = (token, userId) => {
    // console log prints in the browser's page inspection terminal
    console.log("Henlo, I'm going to start trying to getAllDairy...");

    // variable that contains the JSON communication parameters & content
    const requestContent = {
        method: 'GET',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`
        }
    }

    // fetch to the backend
    return fetch(`${process.env.REACT_APP_API_URL}/ingredientCategory/${userId}?cat=dairy`, requestContent)
    .then( response => {
        return response.json();
    })
    .catch(err => console.log(err));
};

export const getAllSpices = (token, userId) => {
    // console log prints in the browser's page inspection terminal
    console.log("Henlo, I'm going to start trying to getAllSpices...");

    // variable that contains the JSON communication parameters & content
    const requestContent = {
        method: 'GET',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`
        }
    }

    // fetch to the backend
    return fetch(`${process.env.REACT_APP_API_URL}/ingredientCategory/${userId}?cat=spices`, requestContent)
    .then( response => {
        return response.json();
    })
    .catch(err => console.log(err));
};

export const getAllMiscellaneous = (token, userId) => {
    // console log prints in the browser's page inspection terminal
    console.log("Henlo, I'm going to start trying to getAllMiscellaneous...");

    // variable that contains the JSON communication parameters & content
    const requestContent = {
        method: 'GET',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`
        }
    }

    // fetch to the backend
    return fetch(`${process.env.REACT_APP_API_URL}/ingredientCategory/${userId}?cat=miscellaneous`, requestContent)
    .then( response => {
        return response.json();
    })
    .catch(err => console.log(err));
};

// REFERENCE NOTE FROM ROUTING: route to add an ingredient
// router.post('/ingredient', addIngredient);
export const addIngredient = ( token, addIngredientPackage ) => {
    // console log prints in the browser's page inspection terminal
    console.log("Henlo, I'm going to start trying to addIngredient...");

    // probably don't need the authorization line, just including to follow previous examples
    const requestContent = {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`
        },
        body: JSON.stringify( addIngredientPackage ),
    }

    // fetch to the backend
    return fetch(`${process.env.REACT_APP_API_URL}/ingredient`, requestContent)
    .then( response => {
        return response.json();
    })
    .catch(err => console.log(err));
}

// REFERENCE NOTE FROM ROUTING: route to delete an ingredient
// router.delete('/deleteIngredient/:userId', deleteIngredient);
export const deleteIngredient = ( token, deleteIngredientPackage, userId ) => {
    // console log prints in the browser's page inspection terminal
    console.log("Henlo, I'm going to start trying to deleteIngredient...");

    // probably don't need the authorization line, just including to follow previous examples
    const requestContent = {
        method: 'DELETE',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`
        },
        body: JSON.stringify( deleteIngredientPackage ),
    }

    // fetch to the backend
    return fetch(`${process.env.REACT_APP_API_URL}/deleteIngredient/${userId}`, requestContent)
    .then( response => {
        return response.json();
    })
    .catch(err => console.log(err));
}

// REFERENCE NOTE FROM ROUTING: route to put an ingredient update
// router.put('/ingredientUpdate/:ingredientId', updateIngredients); 
export const updateIngredient = ( token, updateIngredientForm, ingredientId ) => {
    // console log prints in the brower's page inspection terminal
    console.log("Henlo, I'm going to start trying to updateIngredient...");

    // get ingredientId from updateIngredientPackage

    // probably don't need the authorization line, just including to follow previous examples
    const requestContent = {
        method: 'PUT',
        headers: {
            Accept: "application/json",
            Authorization: `Bearer ${token}`
        },
        body: updateIngredientForm
    }

    // fetch to the backend
    return fetch(`${process.env.REACT_APP_API_URL}/ingredientUpdate/${ingredientId}`, requestContent)
    .then( response => {
        return response.json();
    })
    .catch(err => console.log(err));
}

/* REFERENCE NOTE: UPDATE INGREDIENT API ENDPOINT FROM BACKEND 
exports.updateIngredients = (req, res, next) => {
    // grab the form

    let form = new formidable.IncomingForm();
    
    // keep the extensions
    form.keepExtensions = true;

    //parse the form
    form.parse(req, (err, fields, files) => {
        // handle any errors
        if(err){
            return res.status(400).json({
                error: "Failed to upload file"
            });
        }

        // get the ingredient from the request profile (from ingredientById function)
        let ingredient = req.profile;

        // use lodash extends function to update user
        // with data from form fields (name, email, etc.)
        ingredient = _.extend(ingredient, fields);

        // update the user updated property
        ingredient.updated = Date.now();

        // if there is a photo in the files of the form
        if(files.photo){
            // set the photo data of the user object
            ingredient.photo.data = fs.readFileSync(files.photo.path);
            ingredient.photo.contentType = files.photo.type;
        }

        // save the ingredient to the db
        ingredient.save( (err, result) => {
            // handle any errors
            if(err){
                return res.status(400).json({
                    error: "An error occured saving updates to the database."
                });
            }

            // if no errors send json response
            res.json(ingredient);
        });
    });
} */