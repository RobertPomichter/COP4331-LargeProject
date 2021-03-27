import React, { Component } from "react";
import { isAuthenticated, signout } from "../auth";
import { remove } from "./apiUser";
import { Redirect } from 'react-router-dom';

class DeleteUser extends Component {
    // state without constructor or super
    state = {
        redirect: false
    }

    // method to delete the account
    deleteAccount = () => {
        const token = isAuthenticated().token;
        const userId = isAuthenticated().user._id;

        remove(userId, token).then(data => {
            if(data.error){
                console.log(data.error);
            } else {
                signout( () => console.log("User's account was successfully deleted."));
                // update the state
                this.setState({redirect: true});
            }
        });
    }

    // method to confirm deletion
    deleteConfirmed = () => {
        let confirmed = window.confirm(
            "Are you sure you want to delete your account?"
        );

        if(confirmed){
            this.deleteAccount();
        }
    }
    
    render(){
        // check the state for redirect
        if(this.state.redirect){
            return <Redirect to='/'/>
        } 
        
        return(
            <button onClick={this.deleteConfirmed} className='btn btn-raised btn-danger mr-5'>
                Delete Account
            </button>
        );
    }
}

export default DeleteUser;