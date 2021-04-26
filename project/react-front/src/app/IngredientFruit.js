import React, { Component } from 'react';
import Image from 'react-bootstrap/Image';
import GenericFruitPicture from '../images/GenericFruit.jpg';
import IconButton from '@material-ui/core/IconButton';
import DeleteTwoToneIcon from '@material-ui/icons/DeleteTwoTone';
import EditTwoToneIcon from '@material-ui/icons/EditTwoTone';


class IngredientFruit extends Component {
    render() {
        return (
            <div className='ingredientContainer'>
                <div className='ingredientFruitCircleContainer'>
                    <img className='ingredientImage' src={GenericFruitPicture}></img>
                </div>
                <span className='fruitName'>{this.props.fruitName}</span>
                <br/>
                <span className='fruitAmount'>{this.props.fruitAmount}</span>
                {" "}
                <span className='fruitUnit'>{this.props.fruitUnit}</span>
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

export default IngredientFruit;