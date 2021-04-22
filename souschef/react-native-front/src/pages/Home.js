import React from 'react';
import { StyleSheet, Text, View, Alert, TextInput, Button, ImageBackground, TouchableOpacity } from 'react-native';
import 'react-native-gesture-handler';
import '@react-navigation/native';
import '@react-navigation/stack';
import Welcome from '../components/Welcome';
import {signout} from '../functions/logout';

class Home extends React.Component{

  
    logout(){

      signout();
      this.props.navigation.navigate('Home');  
    }

    render(){
  
      return (
      
      <View style={styles.container}>
           <Welcome/>

           <TouchableOpacity onPress={()=> this.props.navigation.navigate('Ingredients')}>
               <Text>My Ingredients</Text>
           </TouchableOpacity>

           {/*<TouchableOpacity onPress={()=> Alert.alert("Go to recipes")}>
               <Text>My Recipes</Text>
            </TouchableOpacity>*/}

           <TouchableOpacity style={styles.button} onPress={()=> this.props.navigation.navigate('Login')}>
              <Text style={styles.buttonText}>Logout</Text>
            </TouchableOpacity>
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
    button:{
      borderRadius: 25,
      width: 300,
      backgroundColor: 'grey',
      paddingVertical: 16,
      marginTop: 20,
    },
    buttonText:{
      textAlign: 'center',
  },
  test:{
    flexDirection: 'row',
  }

  });


  export default Home;