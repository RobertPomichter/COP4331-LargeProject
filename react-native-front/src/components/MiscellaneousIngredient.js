import React, { Component } from 'react';
import { View, Image, StyleSheet } from 'react-native';
import GenericMiscellaneousPicture from '../images/GenericMiscellaneous.png';

class VegetableIngredient extends Component {
    render() {
        return (
            <View style={styles.ingredientContainer}>
                <View style={styles.ingredientMiscellaneousCircleContainer}>
                    <Image style={styles.ingredientImage} source={GenericMiscellaneousPicture}></Image>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    ingredientContainer : {
        resizeMode: 'contain',
    },
    
    ingredientMiscellaneousCircleContainer : {
        width: 50,
        height: 50,
        borderRadius: 25,  // rounding container into a circle
        margin: 2,
        backgroundColor: '#a86623',

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