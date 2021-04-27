import React, { Component } from 'react';
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField, InputLabel, MenuItem, FormHelperText, FormControl, Select } from '@material-ui/core';
import Image from 'react-bootstrap/Image';
import GenericVegetablePicture from '../images/GenericVegetable.png';
import IconButton from '@material-ui/core/IconButton';
import DeleteTwoToneIcon from '@material-ui/icons/DeleteTwoTone';
import EditTwoToneIcon from '@material-ui/icons/EditTwoTone';
import { deleteIngredient, updateIngredient } from '../apiCalls/apiInventory.js';
import { isAuthenticated } from "../auth";


class IngredientVegetable extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ingredientId: "",
            name: "",
            unit: "",
            amount: "",
            newName: "",
            newUnit: "",
            newAmount: "",
            showAddForm: false,
        }
    }

    // function to handle deleting this ingredient
    clickDeleteSelf = event => {
        // gather information to send to API
        const name = this.state.name;
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

        // call prop inherited function from inventoryPanel to delete self from state array
        this.props.onDelete(this.state.ingredientId);
    }
    
    // function to update this ingredient
    clickUpdateSelf = event => {
        // gather information to send to API
        const ingredientId = this.state.ingredientId;
        const name = this.state.newName;
        const unit = this.state.newUnit;
        const amount = this.state.newAmount;

        var updateIngredientForm = new FormData();

        console.log(updateIngredientForm);

        updateIngredientForm.append('name', name);
        updateIngredientForm.append('unit', unit);
        updateIngredientForm.append('amount', amount);

        // get the token
        const token = isAuthenticated().token;

        // call updateIngredient API endpoint
        updateIngredient( token, updateIngredientForm, ingredientId ).then(data => {
            if (data.error) {
                console.log(data.error);
            } else {
                console.log("Ingredient is now updated :)");
                this.setState({ name : name,
                                unit : unit,
                                amount : amount})
            }
        });

        this.handleClose();
    }

    // method to set internal state from passed in props
    componentDidMount() {
        this.setState({ ingredientId: this.props.ingredientId,
                        name: this.props.vegetableName,
                        unit: this.props.vegetableUnit,
                        amount: this.props.vegetableAmount});
    }

    // function to update addIngredient relevant state variables
    handleChange = (stateVariableToChange) => event => {
        this.setState({[stateVariableToChange] : event.target.value});
        var updateIngredientFormTesting = new FormData();
        updateIngredientFormTesting.append([stateVariableToChange], event.target.value)
    }

    handleClose = () => this.setState({ showAddForm: false, newName: "", newUnit: "", newAmount: ""});
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
                                onChange={this.handleChange("newName")}
                                value={this.state.newName}/>
                        <TextField margin="dense" label="Unit of Measurement" fullWidth
                                onChange={this.handleChange("newUnit")}
                                value={this.state.newUnit}/>
                        <TextField margin="dense" label="Amount" fullWidth
                                onChange={this.handleChange("newAmount")}
                                value={this.state.newAmount}/>
                        <TextField margin="dense" label="Reminder to check adding a photo" fullWidth/>
                        </DialogContent>
                        <DialogActions>
                        <Button onClick={this.handleClose} color="primary">
                            Cancel
                        </Button>
                        <Button onClick={this.clickUpdateSelf} color="primary">
                            Submit
                        </Button>
                        </DialogActions>
                    </Dialog>
                    <div className='ingredientVegetableCircleContainer'>
                        <img className='ingredientImage' src={GenericVegetablePicture}></img>
                    </div>
                    <span className='vegetableName'>{this.state.name}</span>
                    <br/>
                    <span className='vegetableAmount'>{this.state.amount}</span>
                    {" "}
                    <span className='vegetableUnit'>{this.state.unit}</span>
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

export default IngredientVegetable;