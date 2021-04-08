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