
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

// Populate Inventory with a Bunch of Ingredients
export const populateInventory = ( token, user_email ) => {
    const email = user_email;

    var addIngredientPackage = { name:  "Chicken Wings", category: "meat", unit: "", amount: "6", user_email: email }
    addIngredient( token, addIngredientPackage );
    addIngredientPackage = { name:  "Salmon", category: "meat", unit: "lbs", amount: "2", user_email: email }
    addIngredient( token, addIngredientPackage );
    addIngredientPackage = { name:  "Broccoli", category: "vegetable", unit: "heads", amount: "2", user_email: email }
    addIngredient( token, addIngredientPackage );
    addIngredientPackage = { name:  "Spinach", category: "vegetable", unit: "oz", amount: "8", user_email: email }
    addIngredient( token, addIngredientPackage );
    addIngredientPackage = { name:  "Potatoes", category: "vegetable", unit: "lbs", amount: "5", user_email: email }
    addIngredient( token, addIngredientPackage );
    addIngredientPackage = { name:  "Mango", category: "fruit", unit: "", amount: "4", user_email: email }
    addIngredient( token, addIngredientPackage );
    addIngredientPackage = { name:  "Bananas", category: "fruit", unit: "", amount: "3", user_email: email }
    addIngredient( token, addIngredientPackage );
    addIngredientPackage = { name:  "Apples", category: "fruit", unit: "", amount: "6", user_email: email }
    addIngredient( token, addIngredientPackage );
    addIngredientPackage = { name:  "Cheddar Cheese", category: "dairy", unit: "oz", amount: "12", user_email: email }
    addIngredient( token, addIngredientPackage );
    addIngredientPackage = { name:  "Grated Parmesan", category: "dairy", unit: "oz", amount: "8", user_email: email }
    addIngredient( token, addIngredientPackage );
    addIngredientPackage = { name:  "Whole Milk", category: "dairy", unit: "gallon", amount: "1", user_email: email }
    addIngredient( token, addIngredientPackage );
    addIngredientPackage = { name:  "Salt", category: "spices", unit: "oz", amount: "12", user_email: email }
    addIngredient( token, addIngredientPackage );
    addIngredientPackage = { name:  "Paprika", category: "spices", unit: "oz", amount: "6", user_email: email }
    addIngredient( token, addIngredientPackage );
    addIngredientPackage = { name:  "Chicken Wings", category: "spices", unit: "", amount: "6", user_email: email }
    addIngredient( token, addIngredientPackage );
    addIngredientPackage = { name:  "Flour", category: "miscellaneous", unit: "lbs", amount: "5", user_email: email }
    addIngredient( token, addIngredientPackage );
    addIngredientPackage = { name:  "Eggs", category: "miscellaneous", unit: "carton", amount: "2", user_email: email }
    addIngredient( token, addIngredientPackage );
    addIngredientPackage = { name:  "Pinto Beans", category: "miscellaneous", unit: "oz", amount: "16", user_email: email }
    addIngredient( token, addIngredientPackage );
    addIngredientPackage = { name:  "Vegetable Oil", category: "miscellaneous", unit: "fl oz", amount: "16", user_email: email }
    addIngredient( token, addIngredientPackage );
    addIngredientPackage = { name:  "Nori", category: "miscellaneous", unit: "sheets", amount: "12", user_email: email }
    addIngredient( token, addIngredientPackage );
}