//signin function

export const signin = user => {
    // fetch/send the backend then return response
    return fetch(`http://161.35.13.212/api/signin`, {
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

//${process.env.REACT_APP_API_URL}/signin
