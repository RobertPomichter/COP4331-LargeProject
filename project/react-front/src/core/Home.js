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
class Home extends Component {
    // state constructor, testing use of props (previously props were not used)
    constructor(){
        super()
        this.state = {
            index: 1    // controls which slide/form the carousel has selected
        }
    }

    // set carousel slide to the Forgot Password form (passed to Signin component)
    goToForgotPassword = () => {
        this.setState({index: 0});
    }

    // set carousel slide to the Sign In form
    goToSignin = () => {
        this.setState({index: 1});
    }

    // set carousel slide to the Sign Up form (passed to Signin component)
    goToRegister = () => {
        this.setState({index: 2});
    }

    render() {
        return (
            <div className='homeContainer'>
                <div className='homeUIContainer'>
                    <div className='logoHeader'>
                        <img className='logo' src={logo} />
                    </div>
                    <Carousel className='carousel' indicators={false} controls={false} activeIndex={this.state.index}>
                        {/* Forgot Password Menu (slide index: 0) */}
                        <CarouselItem>
                            <ForgotPassword goToSignin={this.goToSignin}/>
                        </CarouselItem>
                        {/* Sign In Menu (slide index: 1 (default)) */}
                        <CarouselItem>
                            <Signin goToForgotPassword={this.goToForgotPassword}
                                    goToRegister={this.goToRegister}/>
                        </CarouselItem>
                        {/* Sign Up Menu (slide index: 2) */}
                        <CarouselItem>
                            <Signup goToSignin={this.goToSignin}/>
                        </CarouselItem>
                    </Carousel>
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

export default Home;