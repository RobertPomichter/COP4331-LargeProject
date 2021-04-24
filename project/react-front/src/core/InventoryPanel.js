import React, { Component } from 'react';
import { Card, Carousel } from 'react-bootstrap';
import { Button } from'@material-ui/core';
import { getAllIngredients, getAllMeats } from '../apiCalls/apiInventory.js';
import { isAuthenticated } from "../auth";
import Ingredient from '../app/Ingredient.js';
import IngredientFruit from '../app/IngredientFruit.js';
import IngredientMeat from '../app/IngredientMeat.js';
import IngredientVegetable from '../app/IngredientVegetable.js';
import IngredientDairy from '../app/IngredientDairy.js';
import IngredientSpices from '../app/IngredientSpices.js';
import IngredientMiscellaneous from '../app/IngredientMiscellaneous';
import AddCircleTwoToneIcon from '@material-ui/icons/AddCircleTwoTone';
import IconButton from '@material-ui/core/IconButton';
import { read } from "../user/apiUser";


class InventoryPanel extends Component {
    // copied from Users.js - idea is to hold an array of ingredients
    constructor(){
        super();
        this.state = {
            userId: "",
            name: "",
            email: "",
            error: "",
            meats: [],
            vegetables: [],
            fruit: [],
            dairy: [],
            spices: [],
            miscellaneous: []
        }
    }

    /* // method to initialize fetch to backend
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
    } */

    // method to get userId from parameters
    componentDidMount(){
        // use FormData api to store formData in userData
        //this.userData = new FormData();

        // get the userId from the parameters
        const userId = this.props.match.params.userId;
        console.log(userId);
        this.setState({ userId: userId });

        // call to back-end fetch method
        //this.init(userId);
    }    

    clickGetAllIngredients = event => {
        // prevent default page reload
        event.preventDefault();

        getAllIngredients();
    }

    clickGetMeats = event => {
        // prevent default page reload
        event.preventDefault();

        // get the token
        const token = isAuthenticated().token;
        // get the userId from the parameters
        const userId = this.props.match.params.userId;

        // API call to get all Meats
        getAllMeats(token, userId).then(data => {
            if(data.error){
                console.log(data.error);
            } else {
                this.setState({meats: data});
            }
        });

        //console.log(data);
    }

    /* EXAMPLE FROM GET ALL USERS 
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
    } */

    displayMeats = (meats) => {
        {meats.map(())}
    }

    /* EXAMPLE FOR RENDERING STATE ARRAY FROM USERS 
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
                                    to={`/user/${user._id}`}
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
    } */

    render() {
        return (
            <div>
                <div className='jumbotron'>
                    <h1>Inventory Testing Area</h1>
                </div>
                    <Button variant="contained" onClick={this.clickGetAllIngredients}>
                        Test: Get All Ingredients
                    </Button> <br />
                    <Button variant="contained" onClick={this.clickGetMeats}>
                        Test: Get Meats
                    </Button>

                <Card className='searchCard'>
                    <input className='inventorySearchBar' placeholder='Search Bar goes here :D'></input>
                    <Button>

                    </Button>
                </Card>

                {/* Do we want to use an official card component or just divs?
                    Just divs might be easier and more flexible */}

                {/* <Card className='inventoryResultsCard'>
                    <Card.Title>Inventory Card</Card.Title>
                    <Card.Text>This is some sample text inside the card.
                        Different categories: Meat, Vegetable, Fruit, Dairy, Miscellaneous
                    </Card.Text>
                    <Card.Body>
                        <Ingredient></Ingredient>
                    </Card.Body>
                </Card> */}

                {/* Bootstrap Card Version */}
                {/* <Card className='categoryCard'>
                <Card.Title>Meats Category Card (Bootstrap)</Card.Title>
                    <Card.Text>This is some sample text inside the card.</Card.Text>
                        <div className='ingredientRowContainer'>
                            <IngredientMeat /><IngredientMeat /><IngredientMeat /><IngredientMeat />
                        </div>
                </Card> */}

                {/* Manual Card Version */}
                <div className='categoryCard'>
                    <div className='cardHeader'>
                        <div className='cardTitle'>
                            <span className='cardTitleText'>Meats Category Card (Live)</span>
                        </div>
                        <IconButton>
                            <AddCircleTwoToneIcon className='addIngredientButton' fontSize='large'/>
                        </IconButton>  
                    </div>
                    <div className='ingredientRowContainer'>
                    </div>
                </div>

                {/* Manual Card Version */}
                <div className='categoryCard'>
                    <div className='cardHeader'>
                        <div className='cardTitle'>
                            <span className='cardTitleText'>Meats Category Card (Manual)</span>
                        </div>
                        <IconButton>
                            <AddCircleTwoToneIcon className='addIngredientButton' fontSize='large'/>
                        </IconButton>  
                    </div>
                    <div className='ingredientRowContainer'>
                        <IngredientMeat /><IngredientMeat /><IngredientMeat /><IngredientMeat />
                    </div>
                </div>

                {/* <Card className='categoryCard'>
                <Card.Title>Vegetables Category Card</Card.Title>
                    <Card.Text>This is some sample text inside the card.</Card.Text>
                    <Card.Body>
                        <div className='ingredientRowContainer'>
                            <IngredientVegetable /><IngredientVegetable /><IngredientVegetable />
                        </div>
                    </Card.Body>
                </Card>
                <Card className='categoryCard'>
                <Card.Title>Fruit Category Card</Card.Title>
                    <Card.Text>This is some sample text inside the card.</Card.Text>
                    <Card.Body>
                        <div className='ingredientRowContainer'>
                            <IngredientFruit /><IngredientFruit /><IngredientFruit /><IngredientFruit /><IngredientFruit />
                        </div>
                    </Card.Body>
                </Card>
                <Card className='categoryCard'>
                    <Card.Title>Dairy Category Card</Card.Title>
                        <Card.Text>This is some sample text inside the card.</Card.Text>
                        <Card.Body>
                            <div className='ingredientRowContainer'>
                                <IngredientDairy />
                            </div>
                        </Card.Body>
                </Card>
                <Card className='categoryCard'>
                    <Card.Title>Spices Category Card</Card.Title>
                        <Card.Text>This is some sample text inside the card.</Card.Text>
                        <Card.Body>
                            <div className='ingredientRowContainer'>
                            <IngredientSpices /><IngredientSpices /><IngredientSpices />
                            </div>
                        </Card.Body>
                </Card>
                <Card className='categoryCard'>
                    <Card.Title>Miscellaneous Category Card</Card.Title>
                        <Card.Text>This is some sample text inside the card.</Card.Text>
                        <Card.Body>
                            <div className='ingredientRowContainer'>
                                <IngredientMiscellaneous />
                            </div>
                        </Card.Body>
                </Card> */}
            </div>
        );
    }
}

export default InventoryPanel;