// import packages and functions
import React, { Component } from "react";
import { resetPassword } from "../auth";
import logo from '../images/LogoResized.svg';
import { Button } from'@material-ui/core';
import { Redirect, Link } from 'react-router-dom';
 
// Reset Password component
class ResetPassword extends Component {
    // state 
    constructor(props) {
        super(props);
        this.state = {
            newPassword: "",
            message: "",
            error: ""
        };
    }
 
    // method to reset the user's password
    resetPassword = e => {
        // prevent page from refreshing
        e.preventDefault();
        // update message and error in state
        this.setState({ message: "", error: "" });
 
        // this is the reset password function from auth (see import statements)
        resetPassword({
            newPassword: this.state.newPassword,
            resetPasswordLink: this.props.match.params.resetPasswordToken
        }).then(data => {
            if (data.error) {
                console.log(data.error);
                this.setState({ error: data.error });
            } else {
                this.setState({ message: data.message, newPassword: "" });
            }
        });
    };


 
    // render the page
    render() {
        return (
            <div className='landingPageContainer'>
                <div className='landingPageUIContainer'>
                    <div className='logoHeader'>
                        <img className='logo' src={logo} />
                    </div>
                    <h2 className='mt-5 mb-5 LPTitle'>Reset your Password</h2>

                    {this.state.message && (
                    <h4 className="alert alert-info">{this.state.message}</h4>
                    )}
                    {this.state.error && (
                        <h4 className="alert alert-danger">{this.state.error}</h4>
                    )}

                    <form className='landingPageForm'>
                        <div className="form-group mt-5">
                            <input type="password" className="form-control"
                                placeholder="Your new password"
                                value={this.state.newPassword}
                                name="newPassword"
                                onChange={e =>
                                    this.setState({
                                        newPassword: e.target.value,
                                        message: "",
                                        error: ""
                                    })
                                }
                                autoFocus
                            />
                        </div>
                        <div className='resetPasswordSpacer'></div>
                        <Button variant="contained" type="button" onClick={this.resetPassword}
                            className="btn btn-block landing">
                            Reset Password
                        </Button>
                        <Link className='linkToSignin' to={`/`}>
                            <Button variant="contained" type="button"
                                className="btn btn-block landing">
                                Go to Sign In
                            </Button>
                        </Link>
                        
                    </form>
                </div>
            </div>
        );

        {/* OLD RESET PASSWORD PAGE
        return (
            <div className="container">
                <h2 className="mt-5 mb-5">Reset your Password</h2>
 
                {this.state.message && (
                    <h4 className="bg-success">{this.state.message}</h4>
                )}
                {this.state.error && (
                    <h4 className="bg-warning">{this.state.error}</h4>
                )}
 
                <form>
                    <div className="form-group mt-5">
                        <input
                            type="password"
                            className="form-control"
                            placeholder="Your new password"
                            value={this.state.newPassword}
                            name="newPassword"
                            onChange={e =>
                                this.setState({
                                    newPassword: e.target.value,
                                    message: "",
                                    error: ""
                                })
                            }
                            autoFocus
                        />
                    </div>
                    <button
                        onClick={this.resetPassword}
                        className="btn btn-raised btn-primary"
                    >
                        Reset Password
                    </button>
                </form>
            </div>
        );
                        */}
    }
}

// export the class
export default ResetPassword;