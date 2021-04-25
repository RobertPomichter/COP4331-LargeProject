import React, { Component } from 'react';
import { View, Image, StyleSheet } from 'react-native';
import GenericDairyPicture from '../images/GenericDairy.jpeg';

class VegetableIngredient extends Component {
    render() {
        return (
            <View style={styles.ingredientContainer}>
                <View style={styles.ingredientDairyCircleContainer}>
                    <Image style={styles.ingredientImage} source={GenericDairyPicture}></Image>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    ingredientContainer : {
        resizeMode: 'contain',
    },
    
    ingredientDairyCircleContainer : {
        width: 50,
        height: 50,
        borderRadius: 25,  // rounding container into a circle
        margin: 2,
        backgroundColor: '#feffac',

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

export default VegetableIngredient;