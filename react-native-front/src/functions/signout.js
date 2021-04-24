export const signout = (next) => {
    if(typeof window !== 'undefined'){
        localStorage.removeItem("jwt");
    }
    next();

    // fetch backend
    return fetch(`http://161.35.13.212/api/signout`, {
        method: 'GET'
    })
        .then( response => {
            return response.json();
        })
        .catch( err => console.log(err));
};