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
            <Card className='categoryCard'>
            <Card.Title>Meats Category Card</Card.Title>
                <Text>This is some sample text inside the card.</Text>
                    <View className='ingredientRowContainer'>
                        <MeatIngredient /><MeatIngredient /><MeatIngredient /><MeatIngredient />
                    </View>
            </Card>
            <Card className='categoryCard'>
            <Card.Title>Vegetables Category Card</Card.Title>
                <Text>This is some sample text inside the card.</Text>
                    <View className='ingredientRowContainer'>
                        <VegetableIngredient /><VegetableIngredient /><VegetableIngredient /><VegetableIngredient />
                    </View>
            </Card>
            <Card className='categoryCard'>
            <Card.Title>Fruit Category Card</Card.Title>
                <Text>This is some sample text inside the card.</Text>
                    <View className='ingredientRowContainer'>
                        <FruitIngredient /><FruitIngredient /><FruitIngredient /><FruitIngredient /><FruitIngredient />
                    </View>
            </Card>
        </View>
    );
      }
  
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });

  export default Ingredients;