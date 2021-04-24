import React, { Component } from 'react';
import { View, Image } from 'react-native';
import GenericVegetablePicture from '../images/GenericVegetable.jpeg';

class VegetableIngredient extends Component {
    render() {
        return (
            <View className='ingredientContainer'>
                <View className='ingredientVegetableCircleContainer'>
                    <Image className='ingredientImage' source={GenericVegetablePicture}></Image>
                </View>
            </View>
        );
    }
}

export default VegetableIngredient;