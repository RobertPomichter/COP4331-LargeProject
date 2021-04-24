// signup function

export const signup = user => {
    
    // fetch/send the backend then return response
    return fetch(`http://161.35.13.212/api/signup`, {
        method: 'POST',
        headers: {
            'Accept' : 'application/json',
            'Content-Type': 'application/json' 
        },
        body: JSON.stringify(user)
    })
        .then( response => {
            console.log(JSON.stringify(response.json));
            return response.json();
            
        })
        .catch( err => console.log(err));
};

//${process.env.REACT_APP_API_URL}/signup
//https://run.mocky.io/v3/4d213e1a-01a4-476e-93e6-490d7fb379dd
