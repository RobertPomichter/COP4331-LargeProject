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