import React, { Component } from 'react';
import { View, Image } from 'react-native';
import GenericMeatPicture from '../images/GenericMeat.jpeg';


class MeatIngredient extends Component {
    render() {
        return (
            <View className='ingredientContainer'>
                <View className='ingredientMeatCircleContainer'>
                    <Image className='ingredientImage' src={GenericMeatPicture}></Image>
                </View>
            </View>
        );
    }
}

export default MeatIngredient;