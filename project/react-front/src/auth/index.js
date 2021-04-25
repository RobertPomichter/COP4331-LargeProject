// signup function
export const signup = user => {
    // fetch/send the backend then return response
    return fetch(`${process.env.REACT_APP_API_URL}/signup`, {
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

// function for activate account
export const verifyAccount = verifyEmailLink => {
    // make request to the backend
    return fetch(`${process.env.REACT_APP_API_URL}/verify-account/`, {
        method: "PUT",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
        },
        body: JSON.stringify(verifyEmailLink)
    })
        .then(response => {
            return response.json();
        })
        .catch(err => console.log(err));
};

// signin function
export const signin = user => {
    // fetch/send the backend then return response
    return fetch(`${process.env.REACT_APP_API_URL}/signin`, {
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
    return fetch(`${process.env.REACT_APP_API_URL}/signout`, {
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

// function for forgot password
export const forgotPassword = email => {
    // make a request to the backend
    return fetch(`${process.env.REACT_APP_API_URL}/forgot-password/`, {
        method: "PUT",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ email })
    })
        .then(response => {
            console.log("forgot password response: ", response);
            return response.json();
        })
        .catch(err => console.log(err));
};
 
// function for reset password
export const resetPassword = resetInfo => {
    // make request to the backend
    return fetch(`${process.env.REACT_APP_API_URL}/reset-password/`, {
        method: "PUT",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
        },
        body: JSON.stringify(resetInfo)
    })
        .then(response => {
            return response.json();
        })
        .catch(err => console.log(err));
};