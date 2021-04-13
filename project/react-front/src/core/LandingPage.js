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
class LandingPage extends Component {
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

    // set carousel slide to the Sign In form (passed to Signup, ForgotPassword components)
    goToSignin = () => {
        this.setState({index: 1});
    }

    // set carousel slide to the Sign Up form (passed to Signin component)
    goToRegister = () => {
        this.setState({index: 2});
    }

    render() {
        return (
            <div className='landingPageContainer'>
                <div className='landingPageUIContainer'>
                    <div className='logoHeader'>
                        <img className='logo' src={logo} />
                    </div>
                    <Carousel className='carousel' indicators={false} controls={false} activeIndex={this.state.index}>
                        {/* Forgot Password Menu (slide index: 0) */}
                        <CarouselItem className='carouselSlide'>
                            <ForgotPassword goToSignin={this.goToSignin}/>
                        </CarouselItem>
                        {/* Sign In Menu (slide index: 1 (default)) */}
                        <CarouselItem className='carouselSlide'>
                            <Signin goToForgotPassword={this.goToForgotPassword}
                                    goToRegister={this.goToRegister}/>
                        </CarouselItem>
                        {/* Sign Up Menu (slide index: 2) */}
                        <CarouselItem className='carouselSlide'>
                            <Signup goToSignin={this.goToSignin}/>
                        </CarouselItem>
                    </Carousel>
                </div>
            </div>
        );
    }
}

export default LandingPage;