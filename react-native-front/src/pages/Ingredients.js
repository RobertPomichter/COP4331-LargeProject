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
import { isAuthenticated } from "../functions/authenticate.js";

class Ingredients extends React.Component{
  constructor() {
    super();
    this.state = {
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
    const userId = this.props.route.params.userId;
    const token = this.props.route.params.token;

    console.log(JSON.stringify(userId));

    // get the token
    console.log(JSON.stringify(token));

    // API call to get all Meats
    getAllMeats(token, userId)
    .then(data => {
        if (data.error) {
            this.setState({error: data.error})
            console.log(data.error); 
          } else {
            // alert(JSON.stringify(data));
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
          <TouchableOpacity style={styles.button} onPress={()=> this.props.navigation.navigate('Login')}>
              <Text style={styles.buttonText}>Logout</Text>
            </TouchableOpacity>
            <Card style={styles.inventoryCardSetup}>
            <Card.Title>Meats</Card.Title>
                    <View style={styles.ingredientRowContainer}>
                        {this.state.meats.map((item, index) => (
                            <MeatIngredient key={index} name={item.name} unit={item.unit}
                                            amount={item.amount}/>
                        ))}
                    </View>
            </Card>
            <Card style={styles.inventoryCardSetup}>
            <Card.Title>Vegetables</Card.Title>
                    <View style={styles.ingredientRowContainer}>
                        {this.state.vegetables.map((item, index) => (
                            <VegetableIngredient key={index} name={item.name} unit={item.unit}
                                            amount={item.amount}/>
                        ))}
                    </View>
            </Card>
            <Card style={styles.inventoryCardSetup}>
            <Card.Title>Fruits</Card.Title>
                    <View style={styles.ingredientRowContainer}>
                        {this.state.fruit.map((item, index) => (
                            <FruitIngredient key={index} name={item.name} unit={item.unit}
                                            amount={item.amount}/>
                        ))}
                    </View>
            </Card>
            <Card style={styles.inventoryCardSetup}>
            <Card.Title>Dairy</Card.Title>
                    <View style={styles.ingredientRowContainer}>
                        {this.state.dairy.map((item, index) => (
                            <DairyIngredient key={index} name={item.name} unit={item.unit}
                                            amount={item.amount}/>
                        ))}
                    </View>
            </Card>
            <Card style={styles.inventoryCardSetup}>
            <Card.Title>Spices</Card.Title>
                    <View style={styles.ingredientRowContainer}>
                        {this.state.spices.map((item, index) => (
                            <SpiceIngredient key={index} name={item.name} unit={item.unit}
                                            amount={item.amount}/>
                        ))}
                    </View>
            </Card>
            <Card style={styles.inventoryCardSetup}>
            <Card.Title>Miscellaneous Ingredients</Card.Title>
                    <View style={styles.ingredientRowContainer}>
                        {this.state.miscellaneous.map((item, index) => (
                            <MiscellaneousIngredient key={index} name={item.name} unit={item.unit}
                                            amount={item.amount}/>
                        ))}
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
    button:{
      borderRadius: 25,
      width: 300,
      backgroundColor: '#db8651',
      paddingVertical: 16,
      marginTop: 20,
      alignSelf: 'center',
    },
    buttonText:{
      textAlign: 'center',
      color:'#5f4339',
    },
  });

  export default Ingredients;