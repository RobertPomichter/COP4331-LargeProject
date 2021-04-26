import React, { Component } from 'react';
import { Card } from 'react-native-elements';
import 'react-native-gesture-handler';
import '@react-navigation/native';
import '@react-navigation/stack';
import { getMeats, getVegetables, getFruit, getDairy, getSpices, getMiscellaneous,
        getEmptyMeats, getEmptyVegetables, getEmptyFruit, getEmptyDairy, getEmptySpices, getEmptyMiscellaneous 
        } from '../functions/inventory.js';
import FruitIngredient from '../components/FruitIngredient.js';
import MeatIngredient from '../components/MeatIngredient.js';
import VegetableIngredient from '../components/VegetableIngredient.js';
import DairyIngredient from '../components/DairyIngredient.js';
import SpiceIngredient from '../components/SpiceIngredient.js';
import MiscellaneousIngredient from '../components/MiscellaneousIngredient.js';
import { StyleSheet, Text, View, ScrollView, ImageBackground, TouchableOpacity } from 'react-native';
import Logo from '../components/Logo';
import backgroundImage from '../images/BackgroundImage.png';

class Ingredients extends React.Component{
  constructor() {
    super();
    this.state = {
        error: "",
        fullMeats: [],
        fullVegetables: [],
        fullFruit: [],
        fullDairy: [],
        fullSpices: [],
        fullMiscellaneous: [],
        emptyMeats: [],
        emptyVegetables: [],
        emptyFruit: [],
        emptyDairy: [],
        emptySpices: [],
        emptyMiscellaneous: [],
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

    // API call to get filled Meats
    getMeats(token, userId)
    .then(data => {
        if (data.error) {
            this.setState({error: data.error})
            console.log(data.error); 
          } else {
            this.setState({ fullMeats: data });
        }
    });

    // API call to get filled Vegetables
    getVegetables(token, userId).then(data => {
        if (data.error) {
            this.setState({error: data.error})
            console.log(data.error);
        } else {
            this.setState({ fullVegetables: data });
        }
    });

    // API call to get filled Fruit
    getFruit(token, userId).then(data => {
        if (data.error) {
            this.setState({error: data.error})
            console.log(data.error);
        } else {
            this.setState({ fullFruit: data });
        }
    });

    // API call to get filled Dairy
    getDairy(token, userId).then(data => {
        if (data.error) {
            this.setState({error: data.error})
            console.log(data.error);
        } else {
            this.setState({ fullDairy: data });
        }
    });

    // API call to get filled Spices
    getSpices(token, userId).then(data => {
        if (data.error) {
            this.setState({error: data.error})
            console.log(data.error);
        } else {
            this.setState({ fullSpices: data });
        }
    });

    // API call to get filled Miscellaneous
    getMiscellaneous(token, userId).then(data => {
        if (data.error) {
            this.setState({error: data.error})
            console.log(data.error);
        } else {
            this.setState({ fullMiscellaneous: data });
        }
    });

    // API call to get empty Meats
    getEmptyMeats(token, userId)
    .then(data => {
        if (data.error) {
            this.setState({error: data.error})
            console.log(data.error); 
          } else {
            this.setState({ emptyMeats: data });
        }
    });

    // API call to get empty Vegetables
    getEmptyVegetables(token, userId).then(data => {
        if (data.error) {
            this.setState({error: data.error})
            console.log(data.error);
        } else {
            this.setState({ emptyVegetables: data });
        }
    });

    // API call to get empty Fruit
    getEmptyFruit(token, userId).then(data => {
        if (data.error) {
            this.setState({error: data.error})
            console.log(data.error);
        } else {
            this.setState({ emptyFruit: data });
        }
    });

    // API call to get empty Dairy
    getEmptyDairy(token, userId).then(data => {
        if (data.error) {
            this.setState({error: data.error})
            console.log(data.error);
        } else {
            this.setState({ emptyDairy: data });
        }
    });

    // API call to get empty Spices
    getEmptySpices(token, userId).then(data => {
        if (data.error) {
            this.setState({error: data.error})
            console.log(data.error);
        } else {
            this.setState({ emptySpices: data });
        }
    });

    // API call to get empty Miscellaneous
    getEmptyMiscellaneous(token, userId).then(data => {
        if (data.error) {
            this.setState({error: data.error})
            console.log(data.error);
        } else {
            this.setState({ emptyMiscellaneous: data });
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
                        {this.state.fullMeats.map((item, index) => (
                            <MeatIngredient key={index} name={item.name} unit={item.unit}
                                            amount={item.amount}/>
                        ))}
                    </View>
                    <View style={styles.ingredientRowContainerEmpty}>
                        {this.state.emptyMeats.map((item, index) => (
                            <MeatIngredient key={index} name={item.name} unit={item.unit}
                                            amount={item.amount}/>
                        ))}
                    </View>
            </Card>
            <Card style={styles.inventoryCardSetup}>
            <Card.Title>Vegetables</Card.Title>
                    <View style={styles.ingredientRowContainer}>
                        {this.state.fullVegetables.map((item, index) => (
                            <VegetableIngredient key={index} name={item.name} unit={item.unit}
                                            amount={item.amount}/>
                        ))}
                    </View>
                    <View style={styles.ingredientRowContainerEmpty}>
                        {this.state.emptyVegetables.map((item, index) => (
                            <VegetableIngredient key={index} name={item.name} unit={item.unit}
                                            amount={item.amount}/>
                        ))}
                    </View>
            </Card>
            <Card style={styles.inventoryCardSetup}>
            <Card.Title>Fruits</Card.Title>
                    <View style={styles.ingredientRowContainer}>
                        {this.state.fullFruit.map((item, index) => (
                            <FruitIngredient key={index} name={item.name} unit={item.unit}
                                            amount={item.amount}/>
                        ))}
                    </View>
                    <View style={styles.ingredientRowContainerEmpty}>
                        {this.state.emptyFruit.map((item, index) => (
                            <FruitIngredient key={index} name={item.name} unit={item.unit}
                                            amount={item.amount}/>
                        ))}
                    </View>
            </Card>
            <Card style={styles.inventoryCardSetup}>
            <Card.Title>Dairy</Card.Title>
                    <View style={styles.ingredientRowContainer}>
                        {this.state.fullDairy.map((item, index) => (
                            <DairyIngredient key={index} name={item.name} unit={item.unit}
                                            amount={item.amount}/>
                        ))}
                    </View>
                    <View style={styles.ingredientRowContainerEmpty}>
                        {this.state.emptyDairy.map((item, index) => (
                            <DairyIngredient key={index} name={item.name} unit={item.unit}
                                            amount={item.amount}/>
                        ))}
                    </View>
            </Card>
            <Card style={styles.inventoryCardSetup}>
            <Card.Title>Spices</Card.Title>
                    <View style={styles.ingredientRowContainer}>
                        {this.state.fullSpices.map((item, index) => (
                            <SpiceIngredient key={index} name={item.name} unit={item.unit}
                                            amount={item.amount}/>
                        ))}
                    </View>
                    <View style={styles.ingredientRowContainerEmpty}>
                        {this.state.emptySpices.map((item, index) => (
                            <SpiceIngredient key={index} name={item.name} unit={item.unit}
                                            amount={item.amount}/>
                        ))}
                    </View>
            </Card>
            <Card style={styles.inventoryCardSetup}>
            <Card.Title>Miscellaneous Ingredients</Card.Title>
                    <View style={styles.ingredientRowContainer}>
                        {this.state.fullMiscellaneous.map((item, index) => (
                            <MiscellaneousIngredient key={index} name={item.name} unit={item.unit}
                                            amount={item.amount}/>
                        ))}
                    </View>
                    <View style={styles.ingredientRowContainerEmpty}>
                        {this.state.emptyMiscellaneous.map((item, index) => (
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
    ingredientRowContainerEmpty : {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',    // allows for ingrediet items to wrap if overflowing
        justifyContent: 'center',
        opacity: 0.3,
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