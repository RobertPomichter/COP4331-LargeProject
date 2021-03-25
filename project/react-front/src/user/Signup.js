import React, { Component } from "react";
import { signup } from "../auth";

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
    signupForm =(name, email, password) => {
        return (<form>
                    <div className='form-group'>
                        <label className='text-muted'>Name</label>
                        <input 
                            onChange={this.handleChange("name")} 
                            type='text' 
                            className='form-control'
                            value={name} 
                        />
                    </div>
                    <div className='form-group'>
                        <label className='text-muted'>Email</label>
                        <input 
                            onChange={this.handleChange("email")} 
                            type='email' 
                            className='form-control'
                            value={email} 
                        />
                    </div>
                    <div className='form-group'>
                        <label className='text-muted'>Password</label>
                        <input 
                            onChange={this.handleChange("password")} 
                            type='password' 
                            className='form-control' 
                            value={password}    
                        />
                    </div>
                    <button onClick={this.clickSubmit} className='btn btn-raised btn-primary'>
                        Submit
                    </button>
                </form>);
    };
    
    // render the JSX to a page 
    render(){
        // destructure the state
        const {name, email, password, error, open} = this.state;
        
        return(
            <div className='container'>
                <h2 className='mt-5 mb-5'>Register</h2>

                <div 
                    className='alert alert-danger' 
                    style={{display: error ? "" : 'none'}}>
                        {error}
                </div>

                <div 
                    className='alert alert-info' 
                    style={{display: open ? "" : 'none'}}>
                        Successfully created an account! Please sign in.
                </div>

                {this.signupForm(name, email, password)}
            </div>
        ); 
    }
}

export default Signup;