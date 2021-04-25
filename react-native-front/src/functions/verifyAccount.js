// function for activate account
export const verifyAccount = verifyEmailLink => {
    // make request to the backend
    return fetch(`http://161.35.13.212/api/verify-account/`, {
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