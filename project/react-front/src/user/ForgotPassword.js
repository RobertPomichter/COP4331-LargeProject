// import functions and packages
import React, { Component, useState } from "react";
import { forgotPassword } from "../auth";

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

        return (
            <div className="container">
                <h2 className="mt-5 mb-5">Request Password Reset</h2>

                
                {this.state.message && (
                    <h4>{this.state.message}</h4>
                )} 
                {this.state.error && (
                    <h4>{this.state.error}</h4>
                )} 
                
                <form className="landingPageForm">
                    <div className="form-group mt-5">
                        <input
                            type="email"
                            className="form-control"
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
                    <button
                        onClick={this.forgotPassword}
                        className="btn btn-raised btn-primary"
                    >
                        Send Password Rest Link
                    </button>
                    <button type="button" className='btn btn-block landing' onClick={this.props.goToSignin}>
                        Return to Login
                    </button>
                </form>
            </div>
        );
    }
}

export default ForgotPassword;