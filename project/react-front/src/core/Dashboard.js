import React, { Component } from 'react';
import '../App.scss';
import Menu from './Menu.js';
import { Carousel, CarouselItem } from 'react-bootstrap';
import logo from '../images/LogoResized.svg';
import Signin from '../user/Signin.js'
import Signup from '../user/Signup.js'
import ForgotPassword from '../user/ForgotPassword.js'

// Home Page Component, which will contain all JSX for the Login, Sign Up,
// and Forgot Password functions. Currently implementing each function using
// a Carousel, with CarouselItems for each form.


// OLD COMPONENT DECLARATION:
// const Home = () => (
class Dashboard extends Component {

    render() {
        return (
            <div className='homeContainer'>
                <Menu />
                <div className='jumbotron'>
                    <h1>Welcome to the Dashboard!</h1>
                </div>
            </div>
        );
    }
    /*
    <div className='homeContainer'>
        <div className='homeUIContainer'>
            <div className='logoHeader'>
                <img className='logo' src={logo} />
            </div>
            <Carousel className='carousel' indicators={true} interval={null} defaultActiveIndex={1}>
                <CarouselItem>
                    <ForgotPassword></ForgotPassword>
                </CarouselItem>
                <CarouselItem>
                    <Signin></Signin>
                    <button className='btn btn-block landing'>
                        Register
                    </button>
                </CarouselItem>
                <CarouselItem>
                    <Signup></Signup>
                </CarouselItem>
            </Carousel>
        </div>
    </div>
    */

    /* OLD HOME PAGE SETUP
    <div>
        <div className="bg">
        </div>
        <div className='jumbotron' style={{ backgroundImage: `url($background)`}}>
            <h2>Home</h2>
            <p className='lead'>Welcome to the React Frontend</p>
        </div>
    </div>
    */
}

export default Dashboard;