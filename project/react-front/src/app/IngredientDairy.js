import React, { Component } from 'react';
import Image from 'react-bootstrap/Image';
import GenericDairyPicture from '../images/GenericDairy.jpg';
import IconButton from '@material-ui/core/IconButton';
import DeleteTwoToneIcon from '@material-ui/icons/DeleteTwoTone';
import EditTwoToneIcon from '@material-ui/icons/EditTwoTone';

class IngredientDairy extends Component {
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

export default IngredientDairy;