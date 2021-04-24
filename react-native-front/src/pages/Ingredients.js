import React, { Component } from 'react';
import { Card } from 'react-native-elements';
import { getAllIngredients } from '../functions/inventory.js'; 
import FruitIngredient from '../components/FruitIngredient.js';
import MeatIngredient from '../components/MeatIngredient.js';
import VegetableIngredient from '../components/VegetableIngredient.js';
import { StyleSheet, Text, View, Alert, TextInput, Button, ImageBackground, TouchableOpacity } from 'react-native';

class Ingredients extends React.Component{
  constructor(){
    super();
    this.state = {
        ingredients: []
    }
  }

  clickGetAllIngredients = event => {
    // prevent default page reload
    event.preventDefault();

    getAllIngredients();
  }
  
    render(){
  
      return (
        <View>
            <Card style={styles.inventoryCardSetup}>
            <Card.Title>Meat Category Card</Card.Title>
                <Text>This is some sample text inside the card.</Text>
                    <View style={styles.ingredientRowContainer}>
                        <MeatIngredient /><MeatIngredient /><MeatIngredient /><MeatIngredient /><MeatIngredient />
                    </View>
            </Card>
            <Card style={styles.inventoryCardSetup}>
            <Card.Title>Vegetable Category Card</Card.Title>
                <Text>This is some sample text inside the card.</Text>
                    <View style={styles.ingredientRowContainer}>
                        <VegetableIngredient /><VegetableIngredient /><VegetableIngredient /><VegetableIngredient /><VegetableIngredient />
                    </View>
            </Card>
            <Card style={styles.inventoryCardSetup}>
            <Card.Title>Fruit Category Card</Card.Title>
                <Text>This is some sample text inside the card.</Text>
                    <View style={styles.ingredientRowContainer}>
                        <FruitIngredient /><FruitIngredient /><FruitIngredient /><FruitIngredient /><FruitIngredient />
                    </View>
            </Card>
        </View>
    );
      }
  
  }
  
  const styles = StyleSheet.create({
    inventoryCardSetup : {
      width: '70%',
      height: 'fit-content',
      textAlign: 'center',
      margin: 'auto',
      marginTop: 40,
      marginBottom: 40,
  
      borderRadius: 10,
    },
    
    ingredientRowContainer : {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',    // allows for ingrediet items to wrap if overflowing
        justifyContent: 'center',
    },
  });

  export default Ingredients;