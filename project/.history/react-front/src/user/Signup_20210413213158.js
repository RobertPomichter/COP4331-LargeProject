import React, { Component } from "react";
import { Link } from "react-router-dom";
import { signup } from "../auth";
import { Button } from'@material-ui/core';

class Signup extends Component{
    // state constructor
    constructor(){
        super()
        this.state = {
            name: "",
            email: "",
            password: "",
            error: "",
            open: false
        }
    }

    // function to handle the change to the form
    handleChange = (name) => event => {
        this.setState({error: ""});
        this.setState({[name]: event.target.value});
    }

    // function to send state data to the backend
    clickSubmit = event => {
        // prevent default page reload
        event.preventDefault();

        // destructure the state
        const {name, email, password} = this.state;

        // create user object to send to backend
        const user = {
            name,
            email,
            password
        };

        // call to signup method and handle errors
        signup(user)
        .then(data => {
            if(data.error){
                this.setState({
                    error: data.error
                });
            }
            else {
                this.setState({
                    name: "",
                    email: "",
                    password: "",
                    error: "",
                    open: true
                });
            }
        });
    };

    // signup form method
    signupForm = (name, email, password) => {
        return (<form className='landingPageForm'>
                    <div className='form-group'>
                        <input 
                            onChange={this.handleChange("name")} 
                            type='text' 
                            className='form-control'
                            value={name}
                            placeholder='Name' 
                        />
                    </div>
                    <div className='form-group'>
                        <input 
                            onChange={this.handleChange("email")} 
                            type='email' 
                            className='form-control'
                            value={email}
                            placeholder='Email'
                        />
                    </div>
                    <div className='form-group'>
                        <input 
                            onChange={this.handleChange("password")} 
                            type='password' 
                            className='form-control' 
                            value={password}
                            placeholder='Password'  
                        />
                    </div>
                    <div className="landingPageSpacer"></div>
                    <Button variant="contained" onClick={this.clickSubmit} className='btn btn-block landing'>
                        Submit
                    </Button>
                    {/* Setting type="button" disables default page refreshing on button press*/}
                    <Button variant="contained" type="button" className='btn btn-block landing' onClick={this.props.goToSignin}>
                        Return to Login
                    </Button>
                </form>);
    };
    
    // render the JSX to a page 
    render(){
        // destructure the state
        const {name, email, password, error, open} = this.state;
        
        return(
            <div className='container'>
                <h2 className='mt-5 mb-5 LPTitle'>Create Your Account</h2>

                <div 
                    className='alert alert-danger' 
                    style={{display: error ? "" : 'none'}}>
                        {error}
                </div>
                <div 
                    className='alert alert-info' 
                    style={{display: open ? "" : 'none'}}>
                        Successfully created an account! Please
                            <span onClick={this.props.goToSignin} className='signinText'>sign in</span>
                </div>

                {this.signupForm(name, email, password)}
            </div>
        ); 
    }
}

export default Signup;