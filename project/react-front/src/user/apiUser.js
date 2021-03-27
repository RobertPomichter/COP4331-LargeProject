// function to get single user from the backend
export const read = (userId, token) => {
    // fetch to the backend
    return fetch(`${process.env.REACT_APP_API_URL}/user/${userId}`, {
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
};

// function to get all users from the backend
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
};

// function to update the users account in the backend
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
};

// function to update the user in local storage
export const updateUserLocal = (user, next) => {
    // check that we have the window object
    if(typeof window !== undefined){
        // check that we have the jwt in local storage
        if(localStorage.getItem('jwt')){
            // grab the jwt from local storage
            let auth = JSON.parse(localStorage.getItem('jwt'));

            // update the auth user with the user argument
            auth.user = user;

            // set the local storage with the auth
            localStorage.setItem('jwt', JSON.stringify(auth));

            // go to next
            next();
        }
    }
} 

// function to delete the users account from the backend
export const remove = (userId, token) => {
    // fetch to the backend
    return fetch(`${process.env.REACT_APP_API_URL}/user/${userId}`, {
        method: "DELETE",
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
};