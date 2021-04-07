// function to signout
export const signout = (next) => {
    if(typeof window !== 'undefined'){
        localStorage.removeItem("jwt");
    }
    next();

    // fetch backend
    return fetch(`http://10.0.2.2:5000/signout`, {
        method: 'GET'
    })
        .then( response => {
            return response.json();
        })
        .catch( err => console.log(err));
};