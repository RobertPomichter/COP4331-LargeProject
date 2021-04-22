import React, { Component } from 'react';
import { View, Image } from 'react-native';
import GenericFruitPicture from '../images/GenericFruit.jpeg';


class FruitIngredient extends Component {
    render() {
        return (
            <View className='ingredientContainer'>
                <View className='ingredientFruitCircleContainer'>
                    <Image className='ingredientImage' source={GenericFruitPicture}></Image>
                </View>
            </View>
        );
    }
}

export default FruitIngredient;