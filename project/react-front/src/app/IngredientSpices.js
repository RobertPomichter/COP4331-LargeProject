import React, { Component } from 'react';
import Image from 'react-bootstrap/Image';
import GenericSpicesPicture from '../images/GenericSpices.jpg';
import IconButton from '@material-ui/core/IconButton';
import DeleteTwoToneIcon from '@material-ui/icons/DeleteTwoTone';
import EditTwoToneIcon from '@material-ui/icons/EditTwoTone';

class IngredientSpices extends Component {
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

export default IngredientSpices;