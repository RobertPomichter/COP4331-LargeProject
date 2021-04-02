import React from 'react';
import '../App.scss';
import Menu from './Menu.js';
import { Carousel, CarouselItem } from 'react-bootstrap';
import logo from '../images/LogoResized.svg';
import Signin from '../user/Signin.js'
import Signup from '../user/Signup.js'
import ForgotPassword from '../user/ForgotPassword.js'

// Home Page Component, which will contain all JSX for the Login, Sign Up,
// and Forgot Password functions. Currently implementing each function using
// a Carousel and CarouselItem for each form.
const Home = () => (

    <div className='homeContainer'>
        <div className='homeUIContainer'>
            <div className='logoHeader'>
                <img className='logo' src={logo} />
            </div>
            <Carousel className='carousel' indicators={true} interval={null} defaultActiveIndex={1}>
                {/* Section for Forgot Password form (index 0) */}
                <CarouselItem>
                    <ForgotPassword></ForgotPassword>
                </CarouselItem>
                {/* Section for Sign In form (index 1) */}
                <CarouselItem>
                    <Signin></Signin>
                </CarouselItem>
                {/* Section for Sign Up form (index 2) */}
                <CarouselItem>
                    <Signup></Signup>
                </CarouselItem>
            </Carousel>
        </div>
    </div>
    
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
)

export default Home;