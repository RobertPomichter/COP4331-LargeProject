import React, { Component } from 'react';
import { View, Image, StyleSheet } from 'react-native';
import GenericFruitPicture from '../images/GenericFruit.jpeg';


class FruitIngredient extends Component {
    render() {
        return (
            <View style={styles.ingredientContainer}>
                <View style={styles.ingredientFruitCircleContainer}>
                    <Image style={styles.ingredientImage} source={GenericFruitPicture}></Image>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    ingredientContainer : {
        resizeMode: 'contain',
    },
    
    ingredientFruitCircleContainer : {
        width: 50,
        height: 50,
        borderRadius: 25,  // rounding container into a circle
        margin: 2,
        backgroundColor: '#ffd700',

        // these lines center the ingredient image horizontally and vertically
        flexDirection:'row', 
        flexWrap:'wrap',
        justifyContent: 'center',
        alignContent: 'center',
    },

    ingredientImage : {
        width: '80%', // percentage of parent CircleContainer the image will occupy
        height: '80%',
        borderRadius: 17.5, // rounding image into a circle
    },
  });

export default FruitIngredient;