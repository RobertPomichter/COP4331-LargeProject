import React, { Component } from 'react';
import { isAuthenticated } from "../auth";
import { list } from "./apiUser";
import DefaultUserAvatar from "../images/user_avatar.png";
import { Link } from "react-router-dom";

class Users extends Component {
    constructor(){
        super();
        this.state = {
            users: []
        }
    }
    
    componentDidMount(){
        // get the token
        const token = isAuthenticated().token;
        
        // call to api for users
        list(token).then(data => {
            if(data.error){
                console.log(data.error);
            } else {
                this.setState({users: data});
            }
        }) 
    }

    renderUsers = (users) => (
        
        <div className='row'>
            {users.map((user, i) => (
                <div className="card col-md-4" style={{width: '18rem'}} key={user}>
                    <img 
                        style={{width: '100%', 
                                height: '50%', 
                                objectFit: 'contain'}}
                        className='img-thumbnail'
                        src={`${
                                process.env.REACT_APP_API_URL
                                }/user/photo/${user._id}`} 
                        onError={i => i.target.src = `${DefaultUserAvatar}`}
                        alt={user.name}
                        />
                    <div className="card-body">
                        <h5 className="card-title">{user.name}</h5>
                        <p className="card-text">{user.email}</p>
                        <Link className="btn btn-raised btn-primary btn-sm" 
                                    style={{backgroundColor: '#ff9900'}}
                                    to={`/dashboard/user/${user._id}`}
                        >
                            {user.name}'s Profile
                        </Link>
                    </div>
              </div>
            ))}
        </div>
    )

    render(){
        // grab the users array from the state
        const {users} = this.state;

        return(
            <div className='container'>
                <h2 className='mt-5 mb-5'>Users</h2>
                
                {this.renderUsers(users)}
            </div>
        );
    }
}

export default Users;