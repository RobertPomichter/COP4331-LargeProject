// function to authenticate the user

export const authenticate = (jwt, next) => {
    if(typeof Window !== 'undefined'){
        localStorage.setItem("jwt", JSON.stringify(jwt));
        //next();
    }
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
