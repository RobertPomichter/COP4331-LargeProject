import React, { Component } from 'react';
import { Card, Modal } from 'react-bootstrap';
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField, InputLabel, MenuItem, FormHelperText, FormControl, Select } from '@material-ui/core';
import { getAllIngredients, getAllMeats, getAllVegetables, getAllFruit, getAllDairy, getAllSpices, getAllMiscellaneous, addIngredient } from '../apiCalls/apiInventory.js';
import { isAuthenticated } from "../auth";
import { makeStyles } from '@material-ui/core/styles';
import IngredientFruit from '../app/IngredientFruit.js';
import IngredientMeat from '../app/IngredientMeat.js';
import IngredientVegetable from '../app/IngredientVegetable.js';
import IngredientDairy from '../app/IngredientDairy.js';
import IngredientSpices from '../app/IngredientSpices.js';
import IngredientMiscellaneous from '../app/IngredientMiscellaneous';
import AddCircleTwoToneIcon from '@material-ui/icons/AddCircleTwoTone';
import IconButton from '@material-ui/core/IconButton';
import EmptyCategoryDisplay from '../app/EmptyCategoryDisplay.js';
import { read } from "../user/apiUser.js";



class InventoryPanel extends Component {
    // copied from Users.js - idea is to hold an array of ingredients
    constructor(props) {
        super(props);
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
            miscellaneous: [],
            test: 0,
            showAddForm: false,
            addName: "",
            addUnit: "",
            addAmount: "",
            addCategory: "",
            message: ""
        }
    }

    // method to get userId from parameters
    componentDidMount() {
        // get the userId from the parameters
        const userId = this.props.match.params.userId;
        console.log(userId);
        this.setState({ userId: userId });

        // get user email from backend through a read function
        const token = isAuthenticated().token;
        
        // call to get the user from the backend (in apiUser)
        read(userId, token)
            .then( data => {
                if(data.error){
                    this.setState({redirectToProfile: true});
                } else {
                    this.setState({ email: data.email });
                }
            });
    }

    clickGetAllIngredients = event => {
        // prevent default page reload
        event.preventDefault();

        this.clickGetMeats(event);
        this.clickGetVegetables(event);
        this.clickGetFruit(event);
        this.clickGetDairy(event);
        this.clickGetSpices(event);
        this.clickGetMiscellaneous(event);
    }

    clickClearAllIngredients = event => {
        // prevent default page reload
        event.preventDefault();

        this.setState ({
            meats: [],
            vegetables: [],
            fruit: [],
            dairy: [],
            spices: [],
            miscellaneous: [],
        });
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
            if (data.error) {
                console.log(data.error);
            } else {
                this.setState({ meats: data });
            }
        });
    }

    clickGetVegetables = event => {
        // prevent default page reload
        event.preventDefault();

        // get the token
        const token = isAuthenticated().token;
        // get the userId from the parameters
        const userId = this.props.match.params.userId;

        // API call to get all Vegetables
        getAllVegetables(token, userId).then(data => {
            if (data.error) {
                console.log(data.error);
            } else {
                this.setState({ vegetables: data });
            }
        });
    }

    clickGetFruit = event => {
        // prevent default page reload
        event.preventDefault();

        // get the token
        const token = isAuthenticated().token;
        // get the userId from the parameters
        const userId = this.props.match.params.userId;

        // API call to get all Fruit
        getAllFruit(token, userId).then(data => {
            if (data.error) {
                console.log(data.error);
            } else {
                this.setState({ fruit: data });
            }
        });
    }

    clickGetDairy = event => {
        // prevent default page reload
        event.preventDefault();

        // get the token
        const token = isAuthenticated().token;
        // get the userId from the parameters
        const userId = this.props.match.params.userId;

        // API call to get all Dairy
        getAllDairy(token, userId).then(data => {
            if (data.error) {
                console.log(data.error);
            } else {
                this.setState({ dairy: data });
            }
        });
    }

    clickGetSpices = event => {
        // prevent default page reload
        event.preventDefault();

        // get the token
        const token = isAuthenticated().token;
        // get the userId from the parameters
        const userId = this.props.match.params.userId;

        // API call to get all Spices
        getAllSpices(token, userId).then(data => {
            if (data.error) {
                console.log(data.error);
            } else {
                this.setState({ spices: data });
            }
        });
    }

    clickGetMiscellaneous = event => {
        // prevent default page reload
        event.preventDefault();

        // get the token
        const token = isAuthenticated().token;
        // get the userId from the parameters
        const userId = this.props.match.params.userId;

        // API call to get all Miscellaneous
        getAllMiscellaneous(token, userId).then(data => {
            if (data.error) {
                console.log(data.error);
            } else {
                this.setState({ miscellaneous: data });
            }
        });
    }

    clickAddOne = (event) => {
        // prevent default page reload
        event.preventDefault();

        this.setState({ test: this.state.test + 1 });
    }

    handleClose = () => this.setState({ showAddForm: false });
    handleShow = () => this.setState({ showAddForm: true });

    // function to update addIngredient relevant state variables
    handleChange = (stateVariableToChange) => event => {
        this.setState({[stateVariableToChange] : [event.target.value]});
    }

    // function to handle the submission of the addIngredient form
    handleAddSubmit = event => {
        this.handleClose();

        // gather information to send to API
        const name = this.state.addName;
        const category = this.state.addCategory;
        const unit = this.state.addUnit;
        const amount = this.state.addAmount;
        const photo = this.state.addPhoto;    // stretch goal?
        const user_email = this.state.user_email;

        const addIngredientPackage = {
            name,
            category,
            unit,
            amount,
            photo,
            user_email
        }
        // get the token
        const token = isAuthenticated().token;

        // call addIngredient API endpoint
        addIngredient( token, addIngredientPackage).then(data => {
            if (data.error) {
                console.log(data.error);
                this.setState({ message: "Oops! Had an error while adding ingredient :(" });
            } else {
                this.setState({ message: "Ingredient is now added :)" });
            }
        });
    }

    /* INGREDIENT MODEL FOR REFERENCE 
    name: {
        type: String,
        required: true,
        trim: true
    },
    category: {
        type: String,
        default: "misc",
        trim: true
    },
    unit: {
        type: String,
        trim: true
    },
    amount: {
        type: Number,
        default: 0
    },
    photo: {
        data: Buffer,
        contentType: String
    },
    user_email: {
        type: String,
        trim: true
    } */

    render() {
        return (
            <div>
                <div className='jumbotron'>
                    <h1>Inventory Testing Area</h1>
                </div>

                {/* Testing Buttons :) */}
                <Button variant="contained" onClick={this.clickGetAllIngredients}>
                Test: Get All Ingredients
                </Button> <br />
                <Button variant="contained" onClick={this.clickClearAllIngredients}>
                Test: Clear All Ingredients
                </Button> <br />
                <Button variant="contained" onClick={this.clickGetMeats}>
                Test: Get Meats
                </Button> <br />
                <Button variant="contained" onClick={this.clickGetVegetables}>
                Test: Get Vegetables
                </Button> <br />
                <Button variant="contained" onClick={this.clickGetFruit}>
                Test: Get Fruit
                </Button> <br />
                <Button variant="contained" onClick={this.clickGetDairy}>
                Test: Get Dairy
                </Button> <br />
                <Button variant="contained" onClick={this.clickGetSpices}>
                Test: Get Spices
                </Button> <br />
                <Button variant="contained" onClick={this.clickGetMiscellaneous}>
                Test: Get Miscellaneous
                </Button> <br />
                <Button variant="contained" onClick={this.clickAddOne}>
                Test: Add 1
                </Button>

                <div>
                    <span>{this.state.test}</span>
                </div>

                <div className='searchCard'>
                    <input className='inventorySearchBar' placeholder='Search Bar goes here :D'></input>
                </div>

                {/* AddIngredient Dialog Form (a better form of Modal) */}
                <Dialog open={this.state.showAddForm} onClose={this.handleClose} disableScrollLock='true'
                        aria-labelledby="form-dialog-title">
                    <DialogTitle id="form-dialog-title">Add Ingredient</DialogTitle>
                    <DialogContent>
                    <DialogContentText>Please fill out the following fields</DialogContentText>
                    <TextField margin="dense" label="Ingredient Name" fullWidth
                               onChange={this.handleChange("addName")}
                               value={this.state.addName}/>
                    <TextField margin="dense" label="Unit of Measurement" fullWidth
                               onChange={this.handleChange("addUnit")}
                               value={this.state.addUnit}/>
                    <TextField margin="dense" label="Amount" fullWidth
                               onChange={this.handleChange("addAmount")}
                               value={this.state.addAmount}/>
                    <TextField margin="dense" label="Reminder to check adding a photo" fullWidth/>
                    <FormControl required>
                        <InputLabel id="demo-simple-select-required-label">Category</InputLabel>
                            <Select labelId="demo-simple-select-required-label"
                                    id="demo-simple-select-required"
                                    onChange={this.handleChange("addCategory")}>
                            <MenuItem value="meat">Meat</MenuItem>
                            <MenuItem value="vegetable">Vegetable</MenuItem>
                            <MenuItem value="fruit">Fruit</MenuItem>
                            <MenuItem value="dairy">Dairy</MenuItem>
                            <MenuItem value="spices">Spices</MenuItem>
                            <MenuItem value="miscellaneous">Miscellaneous</MenuItem>
                            </Select>
                        <FormHelperText>Required</FormHelperText>
                    </FormControl>
                    </DialogContent>
                    <DialogActions>
                    <Button onClick={this.handleClose} color="primary">
                        Cancel
                    </Button>
                    <Button onClick={this.handleAddSubmit} color="primary">
                        Submit
                    </Button>
                    </DialogActions>
                </Dialog>

                {/* name: {
                    type: String,
                    required: true,
                    trim: true
                },
                category: {
                    type: String,
                    default: "misc",
                    trim: true
                },
                unit: {
                    type: String,
                    trim: true
                },
                amount: {
                    type: Number,
                    default: 0
                },
                photo: {
                    data: Buffer,
                    contentType: String
                },
                user_email: {
                    type: String,
                    trim: true
                } */}

                {/* Meat Card */}
                <div className='categoryCard'>
                    <div className='cardHeader'>
                        <div className='cardTitle'>
                            <span className='cardTitleText'>Meats</span>
                        </div>
                        <IconButton onClick={this.handleShow}>
                            <AddCircleTwoToneIcon className='addIngredientButton'
                                                  fontSize='large'/>
                        </IconButton>
                    </div>
                    <div className='ingredientRowContainer'>
                        {/* This section performs the Ingredient Component creation and information
                        mapping */}
                        {this.state.meats.map((item, index) => (
                            <IngredientMeat meatName={item.name} meatUnit={item.unit}
                                            meatAmount={item.amount}/>
                        ))}
                    </div>
                </div>

                {/* Vegetables Card */}
                <div className='categoryCard'>
                    <div className='cardHeader'>
                        <div className='cardTitle'>
                            <span className='cardTitleText'>Vegetables</span>
                        </div>
                        <IconButton onClick={this.handleShow}>
                            <AddCircleTwoToneIcon className='addIngredientButton'
                                                  fontSize='large' />
                        </IconButton>
                    </div>
                    <div className='ingredientRowContainer'>
                        {/* This section performs the Ingredient Component creation and information
                        mapping */}
                        {this.state.vegetables.map((item, index) => (
                            <IngredientVegetable vegetableName={item.name} vegetableUnit={item.unit}
                                                 vegetableAmount={item.amount}/>
                        ))}
                    </div>
                </div>

                {/* Fruit Card */}
                <div className='categoryCard'>
                    <div className='cardHeader'>
                        <div className='cardTitle'>
                            <span className='cardTitleText'>Fruit</span>
                        </div>
                        <IconButton onClick={this.handleShow}>
                            <AddCircleTwoToneIcon className='addIngredientButton'
                                                  fontSize='large'/>
                        </IconButton>
                    </div>
                    <div className='ingredientRowContainer'>
                        {/* This section performs the Ingredient Component creation and information
                        mapping */}
                        {this.state.fruit.map((item, index) => (
                            <IngredientFruit fruitName={item.name} fruitUnit={item.unit}
                                             fruitAmount={item.amount}/>
                        ))}
                    </div>
                </div>

                {/* Dairy Card */}
                <div className='categoryCard'>
                    <div className='cardHeader'>
                        <div className='cardTitle'>
                            <span className='cardTitleText'>Dairy</span>
                        </div>
                        <IconButton onClick={this.handleShow}>
                            <AddCircleTwoToneIcon className='addIngredientButton'
                                                  fontSize='large'/>
                        </IconButton>
                    </div>
                    <div className='ingredientRowContainer'>
                        {/* This section performs the Ingredient Component creation and information
                        mapping */}
                        {this.state.dairy.map((item, index) => (
                            <IngredientDairy dairyName={item.name} dairyUnit={item.unit}
                                             dairyAmount={item.amount}/>
                        ))}
                    </div>
                </div>

                {/* Spices Card */}
                <div className='categoryCard'>
                    <div className='cardHeader'>
                        <div className='cardTitle'>
                            <span className='cardTitleText'>Spices</span>
                        </div>
                        <IconButton onClick={this.handleShow}>
                            <AddCircleTwoToneIcon className='addIngredientButton'
                                                  fontSize='large'/>
                        </IconButton>
                    </div>
                    <div className='ingredientRowContainer'>
                        {/* This section performs the Ingredient Component creation and information
                        mapping */}
                        {this.state.spices.map((item, index) => (
                            <IngredientSpices spicesName={item.name} spicesUnit={item.unit}
                                              spicesAmount={item.amount}/>
                        ))}
                    </div>
                </div>

                {/* Miscellaneous Card */}
                <div className='categoryCard'>
                    <div className='cardHeader'>
                        <div className='cardTitle'>
                            <span className='cardTitleText'>Miscellaneous</span>
                        </div>
                        <IconButton onClick={this.handleShow}>
                            <AddCircleTwoToneIcon className='addIngredientButton'
                                                  fontSize='large'/>
                        </IconButton>
                    </div>
                    <div className='ingredientRowContainer'>
                        {/* This section performs the Ingredient Component creation and information
                        mapping */}
                        {this.state.miscellaneous.map((item, index) => (
                            <IngredientMiscellaneous miscellaneousName={item.name} miscellaneousUnit={item.unit}
                                                     miscellaneousAmount={item.amount}/>
                        ))}
                    </div>
                </div>

                {/* Meat Example Card */}
                <div className='categoryCard'>
                    <div className='cardHeader'>
                        <div className='cardTitle'>
                            <span className='cardTitleText'>Meats Example Card</span>
                        </div>
                        <IconButton>
                            <AddCircleTwoToneIcon className='addIngredientButton' fontSize='large' />
                        </IconButton>
                    </div>
                    <div className='ingredientRowContainer'>
                        <IngredientMeat /><IngredientMeat /><IngredientMeat /><IngredientMeat />
                    </div>
                </div>
            </div>
        );
    }
}

export default InventoryPanel;