// function to authenticate the user

export const authenticate = (jwt, next) => {
    if(typeof Window !== 'undefined'){
        localStorage.setItem("jwt", JSON.stringify(jwt));
        //next();
    }
};