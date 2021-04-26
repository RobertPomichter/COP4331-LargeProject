
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
export const addIngredient = ( token, addIngredientPackage) => {
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
        body: JSON.stringify(addIngredientPackage),
    }

    // fetch to the backend
    return fetch(`${process.env.REACT_APP_API_URL}/ingredient`, requestContent)
    .then( response => {
        return response.json();
    })
    .catch(err => console.log(err));
}