import React, { Component } from 'react';
import Image from 'react-bootstrap/Image';
import GenericFruitPicture from '../images/GenericFruit.jpg';
import IconButton from '@material-ui/core/IconButton';
import DeleteTwoToneIcon from '@material-ui/icons/DeleteTwoTone';
import EditTwoToneIcon from '@material-ui/icons/EditTwoTone';

class IngredientMiscellaneous extends Component {
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

export default IngredientMiscellaneous;