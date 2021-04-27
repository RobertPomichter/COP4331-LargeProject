import React, { Component } from "react";
import { isAuthenticated } from "../auth";
import { Redirect, Link } from 'react-router-dom';
import { read } from './apiUser';
import DefaultUserAvatar from "../images/user_avatar.png";
import DeleteUser from "./DeleteUser";

// profile component
class Profile extends Component {
    constructor(){
        super();
        this.state = {
            user: "",
            redirectToSignin: false
        };
    }

    // method to initialize fetch to backend
    init = (userId) => {
        const token = isAuthenticated().token;
        
        read(userId, token)
            .then( data => {
                if(data.error){
                    this.setState({redirectToSignin: true});
                } else {
                    this.setState({user: data});
                }
            });
    }

    // method to get userId from parameters
    componentDidMount(){
        const userId = this.props.match.params.userId;

        // call to back-end fetch method
        this.init(userId);
    }

    // method to get userId from parameters
    UNSAFE_componentWillReceiveProps(props){
        const userId = props.match.params.userId;

        // call to back-end fetch method
        this.init(userId);
    }

    // render the page
    render(){
        const redirectToSignin = this.state.redirectToSignin;
        if(redirectToSignin){
            return <Redirect to='/signin'/>
        }

        // get the user
        const user = this.state.user;

        const photoUrl = user._id 
            ? `${
                process.env.REACT_APP_API_URL
            }/user/photo/${user._id}?${new Date().getTime()}` 
            : DefaultUserAvatar;

        return(
            <div className='container'>
                <h2 className='mt-5 mb-5'>Profile</h2>
                <div className='row'>
                    <div className='col-md-4'>
                        <img 
                        style={{width: 'auto', 
                                height: '200px', 
                                objectFit: 'contain'}}
                        className='img-thumbnail'
                        src={photoUrl} alt={user.name}
                        onError={i => i.target.src = `${DefaultUserAvatar}`}
                        />
                    </div>
                    <div className='col-md-8'>
                        <div className='lead mt-5'>
                            <p>Hello, {user.name}</p>
                            <p>Email: {user.email}</p>
                            <p>Account Created: {new Date(user.created).toDateString()}</p>
                        </div>
                        
                        {isAuthenticated().user && isAuthenticated().user._id === user._id && (
                                <div className='d-inline-block'>
                                    <Link 
                                        className='btn btn-raised btn-success mr-5'
                                        to={`/dashboard/user/edit/${user._id}`}    
                                    >
                                        Edit Profile
                                    </Link>
                                    <DeleteUser />
                                </div>
                            )}
                    </div>
                </div>
                <div className='row'>
                    <div className='col-md-12'>
                        <hr/>
                        <p className='lead'>{user.about}</p>
                        <hr/>
                    </div>
                </div>
            </div>
        );
    }
}

export default Profile;