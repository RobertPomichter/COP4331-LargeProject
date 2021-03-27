// import packages and functions
import React, { Component } from "react";
import { resetPassword } from "../auth";
 
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
    }
}

// export the class
export default ResetPassword;