import React, { Component } from 'react';
import Image from 'react-bootstrap/Image';
import GenericDairyPicture from '../images/GenericDairy.jpg';
import IconButton from '@material-ui/core/IconButton';
import DeleteTwoToneIcon from '@material-ui/icons/DeleteTwoTone';
import EditTwoToneIcon from '@material-ui/icons/EditTwoTone';
import { deleteIngredient } from '../apiCalls/apiInventory.js';
import { isAuthenticated } from "../auth";

class IngredientDairy extends Component {
    
    // function to handle deleting this ingredient
    clickDeleteSelf = event => {
        // gather information to send to API
        const name = this.props.dairyName;
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
                <div className='ingredientDairyCircleContainer'>
                    <img className='ingredientImage' src={GenericDairyPicture}></img>
                </div>
                <span className='dairyName'>{this.props.dairyName}</span>
                <br/>
                <span className='dairyAmount'>{this.props.dairyAmount}</span>
                {" "}
                <span className='dairyUnit'>{this.props.dairyUnit}</span>
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

export default IngredientDairy;