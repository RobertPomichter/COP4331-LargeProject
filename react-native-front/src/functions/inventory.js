// Houses all functions that call the API endpoints related to the Inventory Panel

export const getAllIngredients = () => {
    // console log prints in the browser's page inspection terminal
    console.log("Henlo, I'm going to start trying to getAllIngredients...");
};

export const getMeats = (token, userId) => {
    // console log prints in the browser's page inspection terminal
    console.log("Henlo, I'm going to start trying to getAllMeats for " + userId);

    // variable that contains the JSON communication parameters & content
    const requestContent = {
        method: 'GET',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        }
    }
    
    // fetch to the backend
    return fetch(`http://161.35.13.212/api/ingredientCategoryHave/${userId}?cat=meat`,
        requestContent )
    .then( response => {
        return response.json();
    })
    .catch(err => console.log(err));
};

export const getVegetables = (token, userId) => {
    // console log prints in the browser's page inspection terminal
    console.log("Henlo, I'm going to start trying to getAllVegetables...");

    // variable that contains the JSON communication parameters & content
    const requestContent = {
        method: 'GET',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        }
    }

    // fetch to the backend
    return fetch(`http://161.35.13.212/api/ingredientCategoryHave/${userId}?cat=vegetable`, requestContent)
    .then( response => {
        return response.json();
    })
    .catch(err => console.log(err));
};

export const getFruit = (token, userId) => {
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
    return fetch(`http://161.35.13.212/api/ingredientCategoryHave/${userId}?cat=fruit`, requestContent)
    .then( response => {
        return response.json();
    })
    .catch(err => console.log(err));
};

export const getDairy = (token, userId) => {
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
    return fetch(`http://161.35.13.212/api/ingredientCategoryHave/${userId}?cat=dairy`, requestContent)
    .then( response => {
        return response.json();
    })
    .catch(err => console.log(err));
};

export const getSpices = (token, userId) => {
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
    return fetch(`http://161.35.13.212/api/ingredientCategoryHave/${userId}?cat=spices`, requestContent)
    .then( response => {
        return response.json();
    })
    .catch(err => console.log(err));
};

export const getMiscellaneous = (token, userId) => {
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
    return fetch(`http://161.35.13.212/api/ingredientCategoryHave/${userId}?cat=miscellaneous`, requestContent)
    .then( response => {
        return response.json();
    })
    .catch(err => console.log(err));
};

export const getEmptyMeats = (token, userId) => {
    // console log prints in the browser's page inspection terminal
    console.log("Henlo, I'm going to start trying to getAllMeats for " + userId);

    // variable that contains the JSON communication parameters & content
    const requestContent = {
        method: 'GET',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        }
    }
    
    // fetch to the backend
    return fetch(`http://161.35.13.212/api/ingredientCategoryDont/${userId}?cat=meat`,
        requestContent )
    .then( response => {
        return response.json();
    })
    .catch(err => console.log(err));
};

export const getEmptyVegetables = (token, userId) => {
    // console log prints in the browser's page inspection terminal
    console.log("Henlo, I'm going to start trying to getAllVegetables...");

    // variable that contains the JSON communication parameters & content
    const requestContent = {
        method: 'GET',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        }
    }

    // fetch to the backend
    return fetch(`http://161.35.13.212/api/ingredientCategoryDont/${userId}?cat=vegetable`, requestContent)
    .then( response => {
        return response.json();
    })
    .catch(err => console.log(err));
};

export const getEmptyFruit = (token, userId) => {
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
    return fetch(`http://161.35.13.212/api/ingredientCategoryDont/${userId}?cat=fruit`, requestContent)
    .then( response => {
        return response.json();
    })
    .catch(err => console.log(err));
};

export const getEmptyDairy = (token, userId) => {
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
    return fetch(`http://161.35.13.212/api/ingredientCategoryDont/${userId}?cat=dairy`, requestContent)
    .then( response => {
        return response.json();
    })
    .catch(err => console.log(err));
};

export const getEmptySpices = (token, userId) => {
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
    return fetch(`http://161.35.13.212/api/ingredientCategoryDont/${userId}?cat=spices`, requestContent)
    .then( response => {
        return response.json();
    })
    .catch(err => console.log(err));
};

export const getEmptyMiscellaneous = (token, userId) => {
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
    return fetch(`http://161.35.13.212/api/ingredientCategoryDont/${userId}?cat=miscellaneous`, requestContent)
    .then( response => {
        return response.json();
    })
    .catch(err => console.log(err));
};
