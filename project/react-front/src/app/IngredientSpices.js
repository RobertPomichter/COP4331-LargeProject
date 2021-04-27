import React, { Component } from 'react';
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField, InputLabel, MenuItem, FormHelperText, FormControl, Select } from '@material-ui/core';
import Image from 'react-bootstrap/Image';
import GenericSpicesPicture from '../images/GenericSpices.jpg';
import IconButton from '@material-ui/core/IconButton';
import DeleteTwoToneIcon from '@material-ui/icons/DeleteTwoTone';
import EditTwoToneIcon from '@material-ui/icons/EditTwoTone';
import { deleteIngredient, updateIngredient } from '../apiCalls/apiInventory.js';
import { isAuthenticated } from "../auth";

class IngredientSpices extends Component {
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
        const name = this.props.spicesName;
        const user_email = this.props.user_email;
        const userId = this.props.userId;

        const deleteIngredientPackage = {
            name,
            user_email
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

    render() {
        return (
            <div className='ingredientContainer'>
                <div className='ingredientSpicesCircleContainer'>
                    <img className='ingredientImage' src={GenericSpicesPicture}></img>
                </div>
                <span className='spicesName'>{this.props.spicesName}</span>
                <br/>
                <span className='spicesAmount'>{this.props.spicesAmount}</span>
                {" "}
                <span className='spicesUnit'>{this.props.spicesUnit}</span>
                <br />
                <IconButton aria-label="delete" onClick={this.clickDeleteSelf}>
                    <DeleteTwoToneIcon />
                </IconButton>
                <IconButton aria-label="edit">
                    <EditTwoToneIcon />
                </IconButton>
            </div>
        );
    }
}

export default IngredientSpices;