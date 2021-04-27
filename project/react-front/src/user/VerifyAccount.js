// import packages and functions
import React, { Component } from "react";
import { verifyAccount } from "../auth";
import logo from '../images/LogoResized.svg';
import { Button } from'@material-ui/core';
import { Redirect, Link } from 'react-router-dom';
 
// Account Verification component
class VerifyAccount extends Component {
    // state 
    constructor(props) {
        super(props);
        this.state = {
            verifyEmailLink: "",
            message: "",
            error: ""
        };
    }
 
    // method to verify the user's account
    verifyAccount = e => {
        // prevent page from refreshing
        e.preventDefault();
        // update message and error in state
        this.setState({ message: "", error: "" });
 
        // this is the reset password function from auth (see import statements)
        verifyAccount({
            verifyEmailLink: this.props.match.params.verifyEmailLink
        }).then(data => {
            if (data.error) {
                console.log(data.error);
                this.setState({ error: data.error });
            } else {
                this.setState({ message: data.message });
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
                    <h2 className='mt-5 mb-5 LPTitle'>Account Activation</h2>

                    {this.state.message && (
                    <h4 className="alert alert-info">{this.state.message}</h4>
                    )}
                    {this.state.error && (
                        <h4 className="alert alert-danger">{this.state.error}</h4>
                    )}

                    <form className='landingPageForm'>
                        <div className='resetPasswordSpacer'></div>
                        <Button variant="contained" type="button" onClick={this.verifyAccount}
                            className="btn btn-block landing">
                            Activate Account!
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
    }
}

// export the class
export default VerifyAccount;