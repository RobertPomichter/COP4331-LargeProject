// signup function
export const signup = user => {
    // fetch/send the backend then return response
    return fetch('http://localhost:5000/signup', {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            "Content-Type": 'application/json' 
        },
        body: JSON.stringify(user)
    })
        .then( response => {
            return response.json();
        })
        .catch( err => console.log(err));
};

// signin function
export const signin = user => {
    // fetch/send the backend then return response
    return fetch('http://localhost:5000/signin', {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            "Content-Type": 'application/json' 
        },
        body: JSON.stringify(user)
    })
        .then( response => {
            return response.json();
        })
        .catch( err => console.log(err));
};

// function to authenticate the user
export const authenticate = (jwt, next) => {
    if(typeof Window !== 'undefined'){
        localStorage.setItem("jwt", JSON.stringify(jwt));
        next();
    }
};

// function to signout
export const signout = (next) => {
    if(typeof window !== 'undefined'){
        localStorage.removeItem("jwt");
    }
    next();

    // fetch backend
    return fetch('http://localhost:5000/signout', {
        method: 'GET'
    })
        .then( response => {
            return response.json();
        })
        .catch( err => console.log(err));
};

// function to check if user is authenticated
export const isAuthenticated = () => {
    if(typeof window == 'undefined'){
        return false;
    }

    if(localStorage.getItem('jwt')){
        return JSON.parse(localStorage.getItem('jwt'));
    } else {
        return false;
    }
};