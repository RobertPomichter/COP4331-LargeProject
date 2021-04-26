import React, { Component } from 'react';
import Image from 'react-bootstrap/Image';
import GenericFruitPicture from '../images/GenericFruit.jpg';
import IconButton from '@material-ui/core/IconButton';
import DeleteTwoToneIcon from '@material-ui/icons/DeleteTwoTone';
import EditTwoToneIcon from '@material-ui/icons/EditTwoTone';
import { deleteIngredient } from '../apiCalls/apiInventory.js';
import { isAuthenticated } from "../auth";

class IngredientMiscellaneous extends Component {

    // function to handle deleting this ingredient
    clickDeleteSelf = event => {
        // gather information to send to API
        const name = this.props.miscellaneousName;
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
                <div className='ingredientMiscellaneousCircleContainer'>
                    <img className='ingredientImage' src={GenericFruitPicture}></img>
                </div>
                <span className='miscellaneousName'>{this.props.miscellaneousName}</span>
                <br/>
                <span className='miscellaneousAmount'>{this.props.miscellaneousAmount}</span>
                {" "}
                <span className='miscellaneousUnit'>{this.props.miscellaneousUnit}</span>
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

export default IngredientMiscellaneous;