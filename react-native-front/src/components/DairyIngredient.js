import React, { Component } from 'react';
import { View, Image, StyleSheet, Text } from 'react-native';
import GenericDairyPicture from '../images/GenericDairy.jpeg';

class DairyIngredient extends Component {
    render() {
        return (
            <View style={styles.ingredientContainer}>
                <View style={styles.ingredientDairyCircleContainer}>
                    <Image style={styles.ingredientImage} source={GenericDairyPicture}></Image>
                </View>
                <Text style={styles.name}>{this.props.name}</Text>
                <Text style={styles.unit}>{this.props.amount} {this.props.unit}</Text>
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
    name:{
        textAlign:'center',
        color:'#5f4339',
        fontSize:12,
        marginLeft: 2,
        marginRight: 2,
        fontWeight: 'bold',
    },
    unit:{
        textAlign:'center',
        color:'#5f4339',
        fontSize:11,
        marginLeft: 4,
        marginRight: 4,
        fontStyle: 'italic',
    },
  });

export default DairyIngredient;