import React, { Component } from 'react';
import Image from 'react-bootstrap/Image';
import GenericMeatPicture from '../images/GenericMeat.jpg';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import DeleteTwoToneIcon from '@material-ui/icons/DeleteTwoTone';
import EditTwoToneIcon from '@material-ui/icons/EditTwoTone';


class IngredientMeat extends Component {
    render() {
        return (
            <div className='ingredientContainer'>
                <div className='ingredientMeatCircleContainer'>
                    <img className='ingredientImage' src={GenericMeatPicture}></img>
                </div>
                <span className='meatName'>{this.props.meatName}</span>
                <br/>
                <span className='meatAmount'>{this.props.meatAmount}</span>
                <br />
                <IconButton aria-label="delete">
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