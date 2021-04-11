import React, { Component } from 'react';
import {Switch, Route} from 'react-router-dom';
import '../App.scss';
import Menu from './Menu.js';
import Profile from '../user/Profile.js';
import Users from '../user/Users';
import EditProfile from '../user/EditProfile';
import ResetPassword from '../user/ResetPassword.js';
import PrivateRoute from "../auth/PrivateRoute";
import Home from '../user/Home.js';
import { Carousel, CarouselItem } from 'react-bootstrap';
import logo from '../images/LogoResized.svg';
import Signin from '../user/Signin.js';
import Signup from '../user/Signup.js';
import ForgotPassword from '../user/ForgotPassword.js';

// Home Page Component, which will contain all JSX for the Login, Sign Up,
// and Forgot Password functions. Currently implementing each function using
// a Carousel, with CarouselItems for each form.


// OLD COMPONENT DECLARATION:
// const Home = () => (
class Dashboard extends Component {

    render() {
        return (
            <div className='landingPageContainer'>
                <Menu />
                <div className='activeComponent'>
                <Switch>
                    {/* Changing these routes to be nested inside the Dashboard component */}
                    <PrivateRoute exact path='/dashboard' component={Home}/>
                    <PrivateRoute exact path='/dashboard/user/:userId' component={Profile} />
                    <PrivateRoute exact path='/dashboard/users' component={Users} />
                    <PrivateRoute exact path='/dashboard/user/edit/:userId' component={EditProfile} />
                    
                    <Route exact path="/dashboard/reset-password/:resetPasswordToken" component={ResetPassword} />
                </Switch>
                </div>
            </div>
        );
    }
}

export default Dashboard;