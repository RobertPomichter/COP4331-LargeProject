import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import Loading from '../Loading'; 
import { signin, authenticate } from "../auth";

class Signin extends Component{
    // state constructor
    constructor(){
        super()
        this.state = {
            email: "",
            password: "",
            error: "",
            redirectToReferer: false,
            loading: false
        }
    }

    // method to handle the change to the form
    handleChange = (name) => event => {
        this.setState({error: ""});
        this.setState({[name]: event.target.value});
    }

    // function to send state data to the backend
    clickSubmit = event => {
        // prevent default page reload
        event.preventDefault();

        this.setState({loading: true});

        // destructure the state
        const {email, password} = this.state;

        // create user object to send to backend
        const user = {
            email,
            password
        };

        // call to signin method and handle errors
        signin(user)
        .then(data => {
            if(data.error){
                this.setState({
                    error: data.error,
                    loading: false
                });
            }
            else {
                // authenticate
                authenticate(data, () => {
                    this.setState({redirectToReferer: true});
                });
            }
        });
    };

    // signin form method
    signinForm =(email, password) => {
        return (<form className='landingPageForm'>
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
                    {/* Old Button: 
                    <button onClick={this.clickSubmit} className='btn btn-raised btn-primary'>
                        Submit
                    </button>*/}
                    <button type="button" onClick={this.props.goToForgotPassword} className='btn btn-block landing'>
                        Forgot Password?
                    </button>

                    <button onClick={this.clickSubmit} className='btn btn-block landing'>
                        Sign In
                    </button>
                    <button type="button" className='btn btn-block landing' onClick={this.props.goToRegister}>
                        Register
                    </button>

                    {/*
                        <button onClick={this.clickRegister} className='btn btn-block landing'>
                            Register
                        </button>
                    */}
 
                </form>);
    };
    
    // render the JSX to a page 
    render() {
        // destructure the state
        const {email, password, error, redirectToReferer, loading} = this.state;
        
        // if user is authenticated then redirect
        if(redirectToReferer){
            return <Redirect to='/' />
        }

        return(
            <div className='container'>
                <h2 className='mt-5 mb-5'>Sign In</h2>

                <div 
                    className='alert alert-danger' 
                    style={{display: error ? "" : 'none'}}>
                        {error}
                </div>

                {loading ? (<Loading />):("")}

                {this.signinForm(email, password)}

                {/*}
                <p>
                    <Link to="/forgot-password" 
                        className="btn btn-raised btn-danger"
                    >
                        {" "}
                        Forgot Password
                    </Link>
                </p>
                */}
            </div>
        ); 
    }
}

export default Signin;