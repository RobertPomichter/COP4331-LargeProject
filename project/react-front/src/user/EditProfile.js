import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { isAuthenticated } from "../auth";
import { read, update, updateUserLocal } from "./apiUser";
import Loading from "../Loading";
import DefaultUserAvatar from "../images/user_avatar.png";

class EditProfile extends Component {
    // state
    constructor(){
        super();
        this.state ={
            userId: "",
            name: "",
            email: "",
            about: "",
            password: "",
            redirectToProfile: false,
            error: "",
            fileSize: 0,
            loading: false
        }
    }

    // method to initialize fetch to backend
    init = (userId) => {
        const token = isAuthenticated().token;
        
        // call to get the user from the backend (in apiUser)
        read(userId, token)
            .then( data => {
                if(data.error){
                    this.setState({redirectToProfile: true});
                } else {
                    this.setState({
                        userId: data._id, 
                        name: data.name, 
                        email: data.email,
                        about: data.about,
                        error: ""});
                }
            });
    }

    // method to get userId from parameters
    componentDidMount(){
        // use FormData api to store formData in userData
        this.userData = new FormData();

        // get the userId from the parameters
        const userId = this.props.match.params.userId;

        // call to back-end fetch method
        this.init(userId);
    }    

    // method to check if the input fields are valid
    isValid = () => {
        const {name, password, fileSize} = this.state;

        // check if file size exceeds limit of 3 MB
        if(fileSize > 300000){
            this.setState({ error: "File size must be smaller than 3MB.", loading: false});
            return false; 
         }

        // User must have a name
        if(name.length === 0){
           this.setState({ error: "Please enter a name.", loading: false});
           return false; 
        }    
         
        // User must have a password with at least 6 characters
        if(password.length >= 1 && password.length < 6){
            this.setState({ 
                error: "To update your password\
                        please enter a password with at least 6 characters",
                loading: false});
            return false;
        }
        return true;
    }

    // function to handle the change to the form
    handleChange = (name) => event => {
        // clear any errors
        this.setState({error: ""});
        
        // check if the target value from the event is a photo
        const value = name === "photo" ? event.target.files[0] : event.target.value;

        const fileSize = name === "photo" ? event.target.files[0].size : 0;

        // give the value of photo to the userData
        this.userData.set(name, value);

        // for any non-photo state give the value
        this.setState({[name]: value, fileSize});
    }

    // function to send state data to the backend
    clickSubmit = event => {
        // prevent default page reload
        event.preventDefault();

        // change loading state to true
        this.setState({loading: true});

        // Check if the state is valid
        if(this.isValid()) {
            // grab the token and userId
            const token = isAuthenticated().token;
            const userId = this.props.match.params.userId;

            // call to update function
            update(this.userData, userId, token).then(data => {
                if(data.error){
                    this.setState({error: data.error});
                }
                else {
                    // update user in local storage with data
                    updateUserLocal(data, () => {
                        this.setState({
                            redirectToProfile: true
                        });
                    });
                }
            });   
        }
    };

    // signup form method
    updateForm = (name, email, about, password) => {
        return (<form>
                    <div className='form-group'>
                        <label className='text-muted'>Profile Image</label>
                        <input 
                            onChange={this.handleChange("photo")} 
                            type="file"
                            accept='image/*' 
                            className='form-control' 
                        />
                    </div>                    
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
                        <label className='text-muted'>About</label>
                        <textarea 
                            onChange={this.handleChange("about")} 
                            type='text' 
                            className='form-control'
                            value={about} 
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
                    <button onClick={this.clickSubmit} 
                        className='btn btn-raised btn-primary'
                    >
                        Update
                    </button>
                </form>);
    };
    
    render(){
        const { userId, 
                name, 
                email, 
                about,
                password, 
                redirectToProfile,
                error,
                loading} = this.state;
        
        // check if redirect
        if(redirectToProfile){
            return (
                <Redirect to={`/dashboard/user/${userId}`}/>
            );
        }

        const photoUrl = userId 
            ? `${
                process.env.REACT_APP_API_URL
            }/user/photo/${userId}?${new Date().getTime()}` 
            : DefaultUserAvatar;
        
        return (
            <div className='container'>
                <h2 className='mt-5 mb-5'>Edit Profile</h2>

                <div 
                    className='alert alert-danger' 
                    style={{display: error ? "" : 'none'}}>
                        {error}
                </div>

                <img 
                style={{ height: "200px", width: "auto" }}
                className="img-thumbnail"
                src={photoUrl} alt={name}
                onError={i => i.target.src = `${DefaultUserAvatar}`}
                />

                {loading ? (<Loading />):("")} 

                {this.updateForm(name, email, about, password)}
            </div>
        );
    }
}

export default EditProfile;