import React from 'react';
import { StyleSheet, Text, View, Alert, TextInput, Button, ImageBackground, TouchableOpacity } from 'react-native';
import 'react-native-gesture-handler';
import '@react-navigation/native';
import '@react-navigation/stack';
import Welcome from '../components/Welcome';
import {signout} from '../functions/signout';
import backgroundImage from '../images/BackgroundImage.png';

class Home extends React.Component{

  
    logout(){

      signout();
      this.props.navigation.navigate('Home');  
    }

    render(){
  
      return (
      <View>
        <ImageBackground source={backgroundImage} style={styles.image}>
          <View style={styles.container}>
           <Welcome/>

           <TouchableOpacity style={styles.button}onPress={()=> this.props.navigation.navigate('Ingredients')}>
               <Text style={styles.buttonText}>My Ingredients</Text>
           </TouchableOpacity>

           {/*<TouchableOpacity onPress={()=> Alert.alert("Go to recipes")}>
               <Text>My Recipes</Text>
            </TouchableOpacity>*/}

           <TouchableOpacity style={styles.button} onPress={()=> this.props.navigation.navigate('Login')}>
              <Text style={styles.buttonText}>Logout</Text>
            </TouchableOpacity>
            </View>
        </ImageBackground>
       </View>
      );
      }
  
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'transparent',
      alignItems: 'center',
      justifyContent: 'center',
    },
    button:{
      borderRadius: 25,
      width: 300,
      backgroundColor: '#db8651',
      paddingVertical: 16,
      marginTop: 20,
    },
    buttonText:{
      textAlign: 'center',
      color:'#5f4339',
    },
    test:{
      flexDirection: 'row',
    },
    image:{
      width:'100%',
      height:'100%',
    },
  });


  export default Home;