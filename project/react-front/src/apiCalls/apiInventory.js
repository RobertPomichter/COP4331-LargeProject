
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
        },
        body: JSON.stringify({ category: 'meat' })
    }

    // fetch to the backend
    return fetch(`${process.env.REACT_APP_API_URL}/ingredientCategory/${userId}`, requestContent)
    .then( response => {
        return response.json();
    })
    .catch(err => console.log(err));
};

/* EXAMPLE FROM GETTING ALL USERS // function to get all users from the backend
export const list = (token) => {
    // fetch to the backend
    return fetch(`${process.env.REACT_APP_API_URL}/users`, {
        method: "GET",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
        }
    })
    .then( response => {
        return response.json();
    })
    .catch(err => console.log(err));
}; */

/* ANOTHER EXAMPLE // function to update the users account in the backend
export const update = (userData, userId, token) => {
    console.log("USER DATA UPDATE: ", userData);
    
    // fetch to the backend
    return fetch(`${process.env.REACT_APP_API_URL}/user/${userId}`, {
        method: "PUT",
        headers: {
            Accept: "application/json",
            Authorization: `Bearer ${token}`
        },
        body: userData
    })
    .then( response => {
        return response.json();
    })
    .catch(err => console.log(err));
}; */