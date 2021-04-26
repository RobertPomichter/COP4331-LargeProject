import React, { Component } from 'react';
import Image from 'react-bootstrap/Image';
import GenericMeatPicture from '../images/GenericMeat.jpg';
import IconButton from '@material-ui/core/IconButton';
import DeleteTwoToneIcon from '@material-ui/icons/DeleteTwoTone';
import EditTwoToneIcon from '@material-ui/icons/EditTwoTone';
import { deleteIngredient } from '../apiCalls/apiInventory.js';
import { isAuthenticated } from "../auth";


class IngredientMeat extends Component {

    // function to handle deleting this ingredient
    clickDeleteSelf = event => {
        // gather information to send to API
        const name = this.props.meatName;
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

        /* this.handleClose();

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
            }
        });

        // clear state variables after ingredient has been attempted to be added
        this.setState({
            addName: "",
            addUnit: "",
            addAmount: "",
            addCategory: ""
        }) */
    }

    render() {
        return (
            <div className='ingredientContainer'>
                <div className='ingredientMeatCircleContainer'>
                    <img className='ingredientImage' src={GenericMeatPicture}></img>
                </div>
                <span className='meatName'>{this.props.meatName}</span>
                <br/>
                <span className='meatAmount'>{this.props.meatAmount}</span>
                {" "}
                <span className='meatUnit'>{this.props.meatUnit}</span>
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

export default IngredientMeat;