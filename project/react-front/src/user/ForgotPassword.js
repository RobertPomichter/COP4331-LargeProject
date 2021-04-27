// import functions and packages
import React, { Component, useState } from "react";
import { forgotPassword } from "../auth";
import { Button } from'@material-ui/core';

// forgot password component
class ForgotPassword extends Component {
    // state
    state = {
        email: "",
        message: "",
        error: "",
    };

    // forgot password method
    forgotPassword = e => {
        e.preventDefault();
        this.setState({ message: "", error: "" });
        
        // this is the forgot password function from auth (see import statements)
        forgotPassword(this.state.email).then(data => {
            if (data.error) {
                console.log(data.error);
                this.setState({ error: data.error });
            } else {
                console.log(data.message);
                this.setState({ message: data.message });
            }
        });
    };

    // render the page
    render() {
        // destructure the state
        const {message, error} = this.state;

        return (
            <div className="container">
                <h2 className="mt-5 mb-5 LPTitle">Reset Password</h2>
                <div 
                    className='alert alert-danger' 
                    style={{display: message ? "" : 'none'}}>
                        {message}
                </div>
                <div 
                    className='alert alert-danger' 
                    style={{display: error ? "" : 'none'}}>
                        {error}
                </div>
                <form className="landingPageForm">
                    <div className="form-group mt-5">
                        <input className='inputField'
                            type="email"
                            placeholder="Your email address"
                            value={this.state.email}
                            name="email"
                            onChange={e =>
                                this.setState({
                                    email: e.target.value,
                                    message: "",
                                    error: ""
                                })
                            }
                            autoFocus
                        />
                    </div>
                    <div className="landingPageSpacer"></div>
                    <Button variant="contained" onClick={this.forgotPassword} className="btn btn-block landing">
                        Send Password Reset Link
                    </Button>
                    <Button variant="contained" type="button" className='btn btn-block landing' onClick={this.props.goToSignin}>
                        Return to Login
                    </Button>
                </form>
            </div>
        );
    }
}

export default ForgotPassword;