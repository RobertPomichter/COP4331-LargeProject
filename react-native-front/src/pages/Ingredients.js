import React, { Component } from 'react';
import { Card } from 'react-native-elements';
import 'react-native-gesture-handler';
import '@react-navigation/native';
import '@react-navigation/stack';
import { getAllMeats, getAllVegetables, getAllFruit, getAllDairy, getAllSpices, getAllMiscellaneous } from '../functions/inventory.js';
import FruitIngredient from '../components/FruitIngredient.js';
import MeatIngredient from '../components/MeatIngredient.js';
import VegetableIngredient from '../components/VegetableIngredient.js';
import DairyIngredient from '../components/DairyIngredient.js';
import SpiceIngredient from '../components/SpiceIngredient.js';
import MiscellaneousIngredient from '../components/MiscellaneousIngredient.js';
import { StyleSheet, Text, View, ScrollView, Alert, TextInput, Button, ImageBackground, TouchableOpacity } from 'react-native';
import Logo from '../components/Logo';
import backgroundImage from '../images/BackgroundImage.png';

class Ingredients extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
        userId: "",
        name: "",
        email: "",
        error: "",
        meats: [],
        vegetables: [],
        fruit: [],
        dairy: [],
        spices: [],
        miscellaneous: [],
        test: 0,
        showAddForm: false
    }
  } 

  componentDidMount() {
    // get the userId from the parameters
    const { userId } = this.props.match.params.userId;
    console.log(userId);
    this.setState({ userId: userId });

    // get the token
    const { token } = isAuthenticated().token;

    // API call to get all Meats
    getAllMeats(token, userId).then(data => {
        if (data.error) {
            console.log(data.error);
        } else {
            this.setState({ meats: data });
        }
    });

    // API call to get all Vegetables
    getAllVegetables(token, userId).then(data => {
        if (data.error) {
            console.log(data.error);
        } else {
            this.setState({ vegetables: data });
        }
    });

    // API call to get all Fruit
    getAllFruit(token, userId).then(data => {
        if (data.error) {
            console.log(data.error);
        } else {
            this.setState({ fruit: data });
        }
    });

    // API call to get all Dairy
    getAllDairy(token, userId).then(data => {
        if (data.error) {
            console.log(data.error);
        } else {
            this.setState({ dairy: data });
        }
    });

    // API call to get all Spices
    getAllSpices(token, userId).then(data => {
        if (data.error) {
            console.log(data.error);
        } else {
            this.setState({ spices: data });
        }
    });

    // API call to get all Miscellaneous
    getAllMiscellaneous(token, userId).then(data => {
        if (data.error) {
            console.log(data.error);
        } else {
            this.setState({ miscellaneous: data });
        }
    });
  }
  
    render(){
  
      return (
        <View>
          <ImageBackground source={backgroundImage} style={styles.image}>
          <View style={{padding:50}}></View>
          <Logo/> 
          <View style={{padding:30}}></View>

          <ScrollView >
            <Card style={styles.inventoryCardSetup}>
            <Card.Title>Meat Category Card</Card.Title>
                <Text>This is some sample text inside the card.</Text>
                    <View style={styles.ingredientRowContainer}>
                        {this.state.meats.map((item, index) => (
                            <IngredientMeat meatName={item.name} meatUnit={item.unit}
                                            meatAmount={item.amount}/>
                        ))}
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
            <Card style={styles.inventoryCardSetup}>
            <Card.Title>Dairy Category Card</Card.Title>
                <Text>This is some sample text inside the card.</Text>
                    <View style={styles.ingredientRowContainer}>
                        <DairyIngredient /><DairyIngredient /><DairyIngredient /><DairyIngredient /><DairyIngredient />
                    </View>
            </Card>
            <Card style={styles.inventoryCardSetup}>
            <Card.Title>Spice Category Card</Card.Title>
                <Text>This is some sample text inside the card.</Text>
                    <View style={styles.ingredientRowContainer}>
                        <SpiceIngredient /><SpiceIngredient /><SpiceIngredient /><SpiceIngredient /><SpiceIngredient />
                    </View>
            </Card>
            <Card style={styles.inventoryCardSetup}>
            <Card.Title>Miscellaneous Category Card</Card.Title>
                <Text>This is some sample text inside the card.</Text>
                    <View style={styles.ingredientRowContainer}>
                        <MiscellaneousIngredient /><MiscellaneousIngredient /><MiscellaneousIngredient /><MiscellaneousIngredient /><MiscellaneousIngredient />
                    </View>
            </Card>
          </ScrollView>
          </ImageBackground>
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

    scrollStyle : {
      backgroundColor: 'white',
      marginVertical: 20,
    },
    image:{
      width:'100%',
      height:'100%',
    },
  });

  export default Ingredients;