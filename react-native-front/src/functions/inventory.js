// Houses all functions that call the API endpoints related to the Inventory Panel

export const getAllIngredients = () => {
    // console log prints in the browser's page inspection terminal
    console.log("Henlo, I'm going to start trying to getAllIngredients...");
};

export const getAllMeats = (token, userId) => {
    // console log prints in the browser's page inspection terminal
    console.log("Henlo, I'm going to start trying to getAllMeats for " + userId);

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
    return fetch('https://run.mocky.io/v3/0174f29f-c56c-4596-9eb8-54121e4ea141')
    // `http://161.35.13.212/api/ingredientCategory/${userId}?cat=meat`,
        // requestContent )
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
    return fetch('https://run.mocky.io/v3/a0a4de38-8b62-4a18-9888-b0da182a66ba')
        // `http://161.35.13.212/api/ingredientCategory/${userId}?cat=vegetable`, requestContent)
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
    return fetch('https://run.mocky.io/v3/451e2d5a-e2cf-460e-8320-66fdf4ed7444')
        // `http://161.35.13.212/api/ingredientCategory/${userId}?cat=fruit`, requestContent)
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
    return fetch('https://run.mocky.io/v3/711862a0-8c9d-4104-8980-70665983390f')
        // `http://161.35.13.212/api/ingredientCategory/${userId}?cat=dairy`, requestContent)
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
    return fetch('https://run.mocky.io/v3/4a909898-0ec2-4b39-8693-92f4e55a6bfa')
        // `http://161.35.13.212/api/ingredientCategory/${userId}?cat=spices`, requestContent)
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
    return fetch('https://run.mocky.io/v3/d099c78a-7ea8-47a2-a6a9-c1e7815cd146')
        // `http://161.35.13.212/api/ingredientCategory/${userId}?cat=miscellaneous`, requestContent)
    .then( response => {
        return response.json();
    })
    .catch(err => console.log(err));
};
