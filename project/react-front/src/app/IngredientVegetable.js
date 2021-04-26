import React, { Component } from 'react';
import Image from 'react-bootstrap/Image';
import GenericVegetablePicture from '../images/GenericVegetable.png';
import IconButton from '@material-ui/core/IconButton';
import DeleteTwoToneIcon from '@material-ui/icons/DeleteTwoTone';
import EditTwoToneIcon from '@material-ui/icons/EditTwoTone';

class IngredientVegetable extends Component {
    render() {
        return (
            <div className='ingredientContainer'>
                <div className='ingredientVegetableCircleContainer'>
                    <img className='ingredientImage' src={GenericVegetablePicture}></img>
                </div>
                <span className='vegetableName'>{this.props.vegetableName}</span>
                <br/>
                <span className='vegetableAmount'>{this.props.vegetableAmount}</span>
                {" "}
                <span className='vegetableUnit'>{this.props.vegetableUnit}</span>
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

export default IngredientVegetable;