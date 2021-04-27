import React, { Component } from 'react';
import { Card, Modal, Container, Col, Row } from 'react-bootstrap';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField, InputLabel, MenuItem, FormHelperText, FormControl, Select } from '@material-ui/core';
import { getAllIngredients, getAllMeats, getAllVegetables, getAllFruit, getAllDairy, getAllSpices, getAllMiscellaneous, addIngredient, populateInventory } from '../apiCalls/apiInventory.js';
import { isAuthenticated } from "../auth";
import { makeStyles } from '@material-ui/core/styles';
import IngredientFruit from '../app/IngredientFruit.js';
import IngredientMeat from '../app/IngredientMeat.js';
import IngredientVegetable from '../app/IngredientVegetable.js';
import IngredientDairy from '../app/IngredientDairy.js';
import IngredientSpices from '../app/IngredientSpices.js';
import IngredientMiscellaneous from '../app/IngredientMiscellaneous';
import IngredientFruitNone from '../app/IngredientFruitNone.js';
import IngredientMeatNone from '../app/IngredientMeatNone.js';
import IngredientVegetableNone from '../app/IngredientVegetableNone.js';
import IngredientDairyNone from '../app/IngredientDairyNone.js';
import IngredientSpicesNone from '../app/IngredientSpiceNones.js';
import IngredientMiscellaneousNone from '../app/IngredientMiscellaneousNone.js';
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
            user_email: "",
            error: "",
            meats: [],
            vegetables: [],
            fruit: [],
            dairy: [],
            spices: [],
            miscellaneous: [],
            noMeats: [],
            noVegetables: [],
            noFruit: [],
            noDairy: [],
            noSpices: [],
            noMiscellaneous: [],
            showAddForm: false,
            addName: "",
            addUnit: "",
            addAmount: "",
            addCategory: "",
            message: "",
            dropdownCategory: ""
        }
    }

    // method to get userId from parameters
    componentDidMount() {
        // get the userId from the parameters
        const userId = this.props.match.params.userId;
        console.log(userId);
        this.setState({ userId: userId });

        const token = isAuthenticated().token;
        
        // get user email from backend through a read function
        read(userId, token)
            .then( data => {
                if(data.error){
                    this.setState({redirectToProfile: true});
                } else {
                    this.setState({ user_email: data.email });
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
            noMeats: [],
            noVegetables: [],
            noFruit: [],
            noDairy: [],
            noSpices: [],
            noMiscellaneous: [],
        });
    }

    clickGetMeats = event => {
        // prevent default page reload
        event.preventDefault();

        // get the token
        const token = isAuthenticated().token;
        // get the userId from the parameters
        const userId = this.props.match.params.userId;

        // API call to get full Meats
        getAllMeats(token, userId).then(data => {
            if (data.error) {
                console.log(data.error);
            } else {
                this.setState({ meats: data });
            }
        });

        // API call to get empty Meats
        getEmptyMeats(token, userId).then(data => {
            if (data.error) {
                console.log(data.error);
            } else {
                this.setState({ noMeats: data });
            }
        });
    }

    clickClearMeats = event => {
        // prevent default page reload
        event.preventDefault();

        this.setState ({
            meats: [],
            noMeats:[]
        });
    }

    clickGetVegetables = event => {
        // prevent default page reload
        event.preventDefault();

        // get the token
        const token = isAuthenticated().token;
        // get the userId from the parameters
        const userId = this.props.match.params.userId;

        // API call to get full Vegetables
        getAllVegetables(token, userId).then(data => {
            if (data.error) {
                console.log(data.error);
            } else {
                this.setState({ vegetables: data });
            }
        });
        // API call to get empty Vegetables
        getEmptyVegetables(token, userId).then(data => {
            if (data.error) {
                console.log(data.error);
            } else {
                this.setState({ noVegetables: data });
            }
        });
    }

    clickClearVegetables = event => {
        // prevent default page reload
        event.preventDefault();

        this.setState ({
            vegetables: [],
            noVegetables: []
        });
    }

    clickGetFruit = event => {
        // prevent default page reload
        event.preventDefault();

        // get the token
        const token = isAuthenticated().token;
        // get the userId from the parameters
        const userId = this.props.match.params.userId;

        // API call to get full Fruit
        getAllFruit(token, userId).then(data => {
            if (data.error) {
                console.log(data.error);
            } else {
                this.setState({ fruit: data });
            }
        });

        // API call to get empty Fruit
        getEmptyFruit(token, userId).then(data => {
            if (data.error) {
                console.log(data.error);
            } else {
                this.setState({ noFruit: data });
            }
        });
    }

    clickClearFruit = event => {
        // prevent default page reload
        event.preventDefault();

        this.setState ({
            fruit: [],
            noFruit: []
        });
    }

    clickGetDairy = event => {
        // prevent default page reload
        event.preventDefault();

        // get the token
        const token = isAuthenticated().token;
        // get the userId from the parameters
        const userId = this.props.match.params.userId;

        // API call to get full Dairy
        getAllDairy(token, userId).then(data => {
            if (data.error) {
                console.log(data.error);
            } else {
                this.setState({ dairy: data });
            }
        });

        // API call to get empty Dairy
        getEmptyDairy(token, userId).then(data => {
            if (data.error) {
                console.log(data.error);
            } else {
                this.setState({ noDairy: data });
            }
        });
    }

    clickClearDairy = event => {
        // prevent default page reload
        event.preventDefault();

        this.setState ({
            dairy: [],
            noDairy: []
        });
    }

    clickGetSpices = event => {
        // prevent default page reload
        event.preventDefault();

        // get the token
        const token = isAuthenticated().token;
        // get the userId from the parameters
        const userId = this.props.match.params.userId;

        // API call to get full Spices
        getAllSpices(token, userId).then(data => {
            if (data.error) {
                console.log(data.error);
            } else {
                this.setState({ spices: data });
            }
        });

        // API call to get empty Spices
        getEmptySpices(token, userId).then(data => {
            if (data.error) {
                console.log(data.error);
            } else {
                this.setState({ noSpices: data });
            }
        });
    }

    clickClearSpices = event => {
        // prevent default page reload
        event.preventDefault();

        this.setState ({
            spices: [],
            noSpices: []
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

        getEmptyMiscellaneous(token, userId).then(data => {
            if (data.error) {
                console.log(data.error);
            } else {
                this.setState({ noMiscellaneous: data });
            }
        });
    }

    clickClearMiscellaneous = event => {
        // prevent default page reload
        event.preventDefault();

        this.setState ({
            miscellaneous: [],
            noMiscellaneous: []
        });
    }

    handleClose = () => this.setState({ showAddForm: false });
    handleShow = category => {
        this.setState({ dropdownCategory: category })
        this.setState({ showAddForm: true });
    }

    // function to update addIngredient relevant state variables
    handleChange = (stateVariableToChange) => event => {
        this.setState({[stateVariableToChange] : event.target.value});
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
                // getAllIngredients by the category of ingredient added
                this.refreshAddCategory(category, event);
            }
        });

        // clear state variables after ingredient has been attempted to be added
        this.setState({
            addName: "",
            addUnit: "",
            addAmount: "",
            addCategory: ""
        })
    }

    refreshAddCategory = (category, event) => {
        // check to see what category of ingredient was added, then refresh the proper category
        if(category == 'meat') {
            console.log("Found that recently added ingredient was a meat")
            this.clickGetMeats(event);
        } else if(category == 'vegetable') {
            console.log("Found that recently added ingredient was a vegetable")
            this.clickGetVegetables(event);
        } else if(category == 'fruit') {
            console.log("Found that recently added ingredient was a fruit")
            this.clickGetFruit(event);
        } else if(category == 'dairy') {
            console.log("Found that recently added ingredient was a dairy")
            this.clickGetDairy(event);
        } else if(category == 'spices') {
            console.log("Found that recently added ingredient was a spices")
            this.clickGetSpices(event);
        } else if(category == 'miscellaneous') {
            console.log("Found that recently added ingredient was a miscellaneous")
            this.clickGetMiscellaneous(event);
        }
    }

    // function passed to each meat ingredient to remove itself from the state array once deleted
    handleDeleteMeat = (_id) => {
        const meats = this.state.meats.filter(item => item._id !== _id);
        this.setState({ meats: meats });

        const noMeats = this.state.noMeats.filter(item => item._id !== _id);
        this.setState({ noMeats: noMeats });
    }

    // function passed to each vegetable ingredient to remove itself from the state array once deleted
    handleDeleteVegetable = (_id) => {
        const vegetables = this.state.vegetables.filter(item => item._id !== _id);
        this.setState({ vegetables: vegetables });

        const noVegetables = this.state.noVegetables.filter(item => item._id !== _id);
        this.setState({ noVegetables: noVegetables });
    }

    // function passed to each fruit ingredient to remove itself from the state array once deleted
    handleDeleteFruit = (_id) => {
        const fruit = this.state.fruit.filter(item => item._id !== _id);
        this.setState({ fruit: fruit });

        const noFruit = this.state.noFruit.filter(item => item._id !== _id);
        this.setState({ noFruit: noFruit });
    }

    // function passed to each dairy ingredient to remove itself from the state array once deleted
    handleDeleteDairy = (_id) => {
        const dairy = this.state.dairy.filter(item => item._id !== _id);
        this.setState({ dairy: dairy });

        const noDairy = this.state.noDairy.filter(item => item._id !== _id);
        this.setState({ noDairy: noDairy });
    }

    // function passed to each spices ingredient to remove itself from the state array once deleted
    handleDeleteSpices = (_id) => {
        const spices = this.state.spices.filter(item => item._id !== _id);
        this.setState({ spices: spices });

        const noSpices = this.state.noSpices.filter(item => item._id !== _id);
        this.setState({ noSpices: noSpices });
    }

    // function passed to each miscellaneous ingredient to remove itself from the state array once deleted
    handleDeleteMiscellaneous = (_id) => {
        const miscellaneous = this.state.miscellaneous.filter(item => item._id !== _id);
        this.setState({ miscellaneous: miscellaneous });

        const noMiscellaneous = this.state.noMiscellaneous.filter(item => item._id !== _id);
        this.setState({ noMiscellaneous: noMiscellaneous });
    }

    // function to populate user's inventory with a bunch of premade ingredients
    populateInventoryHandler = event => {
        // get the token & user_email
        const token = isAuthenticated().token;
        const user_email = this.state.user_email;

        // call populateInventory function in apiInventory
        populateInventory(token, user_email);

        // automatically get all ingredients
        this.clickGetAllIngredients(event);
    } 

    render() {
        return (
            <div>
                {/* AddIngredient Dialog Form (a better form of Modal) */}
                <Dialog open={this.state.showAddForm} onClose={this.handleClose} disableScrollLock='true'
                        aria-labelledby="form-dialog-title">
                    <DialogTitle id="form-dialog-title">Add Ingredient</DialogTitle>
                    <DialogContent>
                    <DialogContentText>Please fill out the following fields</DialogContentText>
                    <TextField className="addIngredientInputField"
                               margin="dense" label="Ingredient Name" fullWidth
                               onChange={this.handleChange("addName")}
                               value={this.state.addName}/>
                    <TextField className="addIngredientInputField"
                               margin="dense" label="Unit of Measurement" fullWidth
                               onChange={this.handleChange("addUnit")}
                               value={this.state.addUnit}/>
                    <TextField className="addIngredientInputField"
                               margin="dense" label="Amount" fullWidth
                               onChange={this.handleChange("addAmount")}
                               value={this.state.addAmount}/>
                    {/* <TextField className="addIngredientInputField"
                               margin="dense" label="Reminder to check adding a photo" fullWidth/> */}
                    <FormControl required>
                        <InputLabel id="demo-simple-select-required-label">Category</InputLabel>
                            <Select className="CategoryDropdown"
                                    defaultValue={this.state.dropdownCategory}
                                    labelId="demo-simple-select-required-label"
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

                {/* Testing Buttons :) */}
                <Button variant="contained" onClick={this.clickGetAllIngredients}>
                    Test: Get All Ingredients
                    </Button>
                    <Button variant="contained" onClick={this.clickClearAllIngredients}>
                    Test: Clear All Ingredients
                    </Button>
                    <Button variant="contained" onClick={this.populateInventoryHandler}>
                    Test: Populate Inventory
                    </Button>

                {/* Was playing with a Bootstrap grid setup to possibly get search working
                    <Container>
                    <Row>
                        <Col xs={1}>
                            <div className="searchUICard">
                                <input className="searchIngredientField">
                                </input>
                            </div>
                        </Col> */}

                        {/* <Col xs={5}> */}
                            <div className="inventoryUIContainer">
                                {/* Meat Card */}
                                <div className='categoryCard'>
                                    <div className='cardHeader'>
                                        <div className='cardTitle'>
                                            <span className='cardTitleText'>Meats</span>
                                        </div>
                                        <div className='cardHeaderSpacer'></div>
                                        <IconButton onClick={this.clickClearMeats}>
                                            <ExpandLessIcon />
                                        </IconButton>
                                        <IconButton onClick={this.clickGetMeats}>
                                            <ExpandMoreIcon />
                                        </IconButton>
                                        <IconButton onClick={ () => this.handleShow('meat')}>
                                            <AddCircleTwoToneIcon className='addIngredientButton'
                                                                fontSize='large'/>
                                        </IconButton>
                                    </div>
                                    <div className='ingredientRowContainer'>
                                        {/* This section performs the Ingredient Component creation and information
                                        mapping */}
                                        {this.state.meats.map((item) => (
                                            <IngredientMeat key={item._id}
                                                            ingredientId={item._id}
                                                            meatName={item.name} meatUnit={item.unit}
                                                            meatAmount={item.amount}
                                                            user_email={this.state.user_email}
                                                            userId={this.state.userId}
                                                            onDelete={this.handleDeleteMeat}/>
                                        ))}
                                        {this.state.noMeats.map((item) => (
                                            <IngredientMeatNone key={item._id}
                                                            ingredientId={item._id}
                                                            meatName={item.name} meatUnit={item.unit}
                                                            meatAmount={item.amount}
                                                            user_email={this.state.user_email}
                                                            userId={this.state.userId}
                                                            onDelete={this.handleDeleteMeat}/>
                                        ))}
                                    </div>
                                </div>

                                {/* Vegetables Card */}
                                <div className='categoryCard'>
                                    <div className='cardHeader'>
                                        <div className='cardTitle'>
                                            <span className='cardTitleText'>Vegetables</span>
                                        </div>
                                        <div className='cardHeaderSpacer'></div>
                                        <IconButton onClick={this.clickClearVegetables}>
                                            <ExpandLessIcon />
                                        </IconButton>
                                        <IconButton onClick={this.clickGetVegetables}>
                                            <ExpandMoreIcon />
                                        </IconButton>
                                        <IconButton onClick={ () => this.handleShow('vegetable')}>
                                            <AddCircleTwoToneIcon className='addIngredientButton'
                                                                fontSize='large' />
                                        </IconButton>
                                    </div>
                                    <div className='ingredientRowContainer'>
                                        {/* This section performs the Ingredient Component creation and information
                                        mapping */}
                                        {this.state.vegetables.map((item) => (
                                            <IngredientVegetable key={item._id} 
                                                                ingredientId={item._id}
                                                                vegetableName={item.name} vegetableUnit={item.unit}
                                                                vegetableAmount={item.amount}
                                                                user_email={this.state.user_email}
                                                                userId={this.state.userId}
                                                                onDelete={this.handleDeleteVegetable}/>
                                        ))}
                                        {this.state.noVegetables.map((item) => (
                                            <IngredientVegetableNone key={item._id} 
                                                                ingredientId={item._id}
                                                                vegetableName={item.name} vegetableUnit={item.unit}
                                                                vegetableAmount={item.amount}
                                                                user_email={this.state.user_email}
                                                                userId={this.state.userId}
                                                                onDelete={this.handleDeleteVegetable}/>
                                        ))}
                                    </div>
                                </div>

                            {/* Fruit Card */}
                            <div className='categoryCard'>
                                <div className='cardHeader'>
                                    <div className='cardTitle'>
                                        <span className='cardTitleText'>Fruit</span>
                                    </div>
                                    <div className='cardHeaderSpacer'></div>
                                    <IconButton onClick={this.clickClearFruit}>
                                        <ExpandLessIcon />
                                    </IconButton>
                                    <IconButton onClick={this.clickGetFruit}>
                                        <ExpandMoreIcon />
                                    </IconButton>
                                    <IconButton onClick={ () => this.handleShow('fruit')}>
                                        <AddCircleTwoToneIcon className='addIngredientButton'
                                                            fontSize='large'/>
                                    </IconButton>
                                </div>
                                <div className='ingredientRowContainer'>
                                    {/* This section performs the Ingredient Component creation and information
                                    mapping */}
                                    {this.state.fruit.map((item) => (
                                        <IngredientFruit key={item._id} 
                                                        ingredientId={item._id}
                                                        fruitName={item.name} fruitUnit={item.unit}
                                                        fruitAmount={item.amount}
                                                        user_email={this.state.user_email}
                                                        userId={this.state.userId}
                                                        onDelete={this.handleDeleteFruit}/>
                                    ))}
                                    {this.state.noFruit.map((item) => (
                                        <IngredientFruitNone key={item._id} 
                                                        ingredientId={item._id}
                                                        fruitName={item.name} fruitUnit={item.unit}
                                                        fruitAmount={item.amount}
                                                        user_email={this.state.user_email}
                                                        userId={this.state.userId}
                                                        onDelete={this.handleDeleteFruit}/>
                                    ))}
                                </div>
                            </div>

                            {/* Dairy Card */}
                            <div className='categoryCard'>
                                <div className='cardHeader'>
                                    <div className='cardTitle'>
                                        <span className='cardTitleText'>Dairy</span>
                                    </div>
                                    <div className='cardHeaderSpacer'></div>
                                    <IconButton onClick={this.clickClearDairy}>
                                        <ExpandLessIcon />
                                    </IconButton>
                                    <IconButton onClick={this.clickGetDairy}>
                                        <ExpandMoreIcon />
                                    </IconButton>
                                    <IconButton onClick={ () => this.handleShow('dairy')}>
                                        <AddCircleTwoToneIcon className='addIngredientButton'
                                                            fontSize='large'/>
                                    </IconButton>
                                </div>
                                <div className='ingredientRowContainer'>
                                    {/* This section performs the Ingredient Component creation and information
                                    mapping */}
                                    {this.state.dairy.map((item) => (
                                        <IngredientDairy key={item._id} 
                                                        ingredientId={item._id}
                                                        dairyName={item.name} dairyUnit={item.unit}
                                                        dairyAmount={item.amount}
                                                        user_email={this.state.user_email}
                                                        userId={this.state.userId}
                                                        onDelete={this.handleDeleteDairy}/>
                                    ))}
                                    {this.state.noDairy.map((item) => (
                                        <IngredientDairyNone key={item._id} 
                                                        ingredientId={item._id}
                                                        dairyName={item.name} dairyUnit={item.unit}
                                                        dairyAmount={item.amount}
                                                        user_email={this.state.user_email}
                                                        userId={this.state.userId}
                                                        onDelete={this.handleDeleteDairy}/>
                                    ))}
                                </div>
                            </div>

                            {/* Spices Card */}
                            <div className='categoryCard'>
                                <div className='cardHeader'>
                                    <div className='cardTitle'>
                                        <span className='cardTitleText'>Spices</span>
                                    </div>
                                    <div className='cardHeaderSpacer'></div>
                                    <IconButton onClick={this.clickClearSpices}>
                                        <ExpandLessIcon />
                                    </IconButton>
                                    <IconButton onClick={this.clickGetSpices}>
                                        <ExpandMoreIcon />
                                    </IconButton>
                                    <IconButton onClick={ () => this.handleShow('spices')}>
                                        <AddCircleTwoToneIcon className='addIngredientButton'
                                                            fontSize='large'/>
                                    </IconButton>
                                </div>
                                <div className='ingredientRowContainer'>
                                    {/* This section performs the Ingredient Component creation and information
                                    mapping */}
                                    {this.state.spices.map((item) => (
                                        <IngredientSpices key={item._id} 
                                                        ingredientId={item._id}
                                                        spicesName={item.name} spicesUnit={item.unit}
                                                        spicesAmount={item.amount}
                                                        user_email={this.state.user_email}
                                                        userId={this.state.userId}
                                                        onDelete={this.handleDeleteSpices}/>
                                    ))}
                                    {this.state.noSpices.map((item) => (
                                        <IngredientSpicesNone key={item._id} 
                                                        ingredientId={item._id}
                                                        spicesName={item.name} spicesUnit={item.unit}
                                                        spicesAmount={item.amount}
                                                        user_email={this.state.user_email}
                                                        userId={this.state.userId}
                                                        onDelete={this.handleDeleteSpices}/>
                                    ))}
                                </div>
                            </div>

                            {/* Miscellaneous Card */}
                            <div className='categoryCard'>
                                <div className='cardHeader'>
                                    <div className='cardTitle'>
                                        <span className='cardTitleText'>Miscellaneous</span>
                                    </div>
                                    <div className='cardHeaderSpacer'></div>
                                    <IconButton onClick={this.clickClearMiscellaneous}>
                                        <ExpandLessIcon />
                                    </IconButton>
                                    <IconButton onClick={this.clickGetMiscellaneous}>
                                        <ExpandMoreIcon />
                                    </IconButton>
                                    <IconButton onClick={ () => this.handleShow('miscellaneous')}>
                                        <AddCircleTwoToneIcon className='addIngredientButton'
                                                            fontSize='large'/>
                                    </IconButton>
                                </div>
                                <div className='ingredientRowContainer'>
                                    {/* This section performs the Ingredient Component creation and information
                                    mapping */}
                                    {this.state.miscellaneous.map((item) => (
                                        <IngredientMiscellaneous key={item._id} 
                                                                ingredientId={item._id}
                                                                miscellaneousName={item.name} miscellaneousUnit={item.unit}
                                                                miscellaneousAmount={item.amount}
                                                                user_email={this.state.user_email}
                                                                userId={this.state.userId}
                                                                onDelete={this.handleDeleteMiscellaneous}/>
                                    ))}
                                    {this.state.noMiscellaneous.map((item) => (
                                        <IngredientMiscellaneousNone key={item._id} 
                                                                ingredientId={item._id}
                                                                miscellaneousName={item.name} miscellaneousUnit={item.unit}
                                                                miscellaneousAmount={item.amount}
                                                                user_email={this.state.user_email}
                                                                userId={this.state.userId}
                                                                onDelete={this.handleDeleteMiscellaneous}/>
                                    ))}
                                </div>
                            </div>
                        </div>
                    {/* </Col>
                </Row>    
            </Container> */}
        </div>
        );
    }
}

export default InventoryPanel;