import React, { Component } from 'react';
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField, InputLabel, MenuItem, FormHelperText, FormControl, Select } from '@material-ui/core';
import Image from 'react-bootstrap/Image';
import GenericMeatPicture from '../images/GenericMeat.jpg';
import IconButton from '@material-ui/core/IconButton';
import DeleteTwoToneIcon from '@material-ui/icons/DeleteTwoTone';
import EditTwoToneIcon from '@material-ui/icons/EditTwoTone';
import { deleteIngredient } from '../apiCalls/apiInventory.js';
import { isAuthenticated } from "../auth";


class IngredientMeat extends Component {
    // copied from Users.js - idea is to hold an array of ingredients
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            unit: "",
            amount: "",
            showAddForm: false,
        }
    }
    // function to handle deleting this ingredient
    clickDeleteSelf = event => {
        // gather information to send to API
        const name = this.props.meatName;
        const userId = this.props.userId;

        const deleteIngredientPackage = {
            name
        }

        // get the token
        const token = isAuthenticated().token;

        // call addIngredient API endpoint
        deleteIngredient( token, deleteIngredientPackage, userId).then(data => {
            if (data.error) {
                console.log(data.error);
            } else {
                console.log("Ingredient is now deleted :)");
            }
        });
    }

    // method to set internal state from passed in props
    componentDidMount() {
        this.setState({ name: this.props.meatName,
                        unit: this.props.meatUnit,
                        amount: this.props.meatAmount});
    }

    // function to update addIngredient relevant state variables
    handleChange = (stateVariableToChange) => event => {
        this.setState({[stateVariableToChange] : event.target.value});
    }

    handleClose = () => this.setState({ showAddForm: false });
    handleShow = () => this.setState({ showAddForm: true });

    render() {
        return (
                <div className='ingredientContainer'>
                    {/* EditIngredient Dialog Form (a better form of Modal) */}
                    <Dialog open={this.state.showAddForm} onClose={this.handleClose} disableScrollLock='true'
                    aria-labelledby="form-dialog-title">
                        <DialogTitle id="form-dialog-title">Edit Ingredient</DialogTitle>
                        <DialogContent>
                        <DialogContentText>Please fill out the following fields</DialogContentText>
                        <TextField margin="dense" label="Ingredient Name" fullWidth
                                onChange={this.handleChange("name")}
                                value={this.state.name}/>
                        <TextField margin="dense" label="Unit of Measurement" fullWidth
                                onChange={this.handleChange("unit")}
                                value={this.state.unit}/>
                        <TextField margin="dense" label="Amount" fullWidth
                                onChange={this.handleChange("amount")}
                                value={this.state.amount}/>
                        <TextField margin="dense" label="Reminder to check adding a photo" fullWidth/>
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
                    <div className='ingredientMeatCircleContainer'>
                        <img className='ingredientImage' src={GenericMeatPicture}></img>
                    </div>
                    <span className='meatName'>{this.state.name}</span>
                    <br/>
                    <span className='meatAmount'>{this.state.amount}</span>
                    {" "}
                    <span className='meatUnit'>{this.state.unit}</span>
                    <br />
                    <IconButton aria-label="delete" onClick={this.clickDeleteSelf}>
                        <DeleteTwoToneIcon />
                    </IconButton>
                    <IconButton aria-label="edit" onClick={this.handleShow}>
                        <EditTwoToneIcon />
                    </IconButton>
                </div>         
        );
    }
}

export default IngredientMeat;