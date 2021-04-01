import React from 'react';
import { StyleSheet, Text, View, Alert, TextInput, Button, ImageBackground, TouchableOpacity } from 'react-native';
import 'react-native-gesture-handler';
import '@react-navigation/native';
import '@react-navigation/stack';

class Home extends React.Component{

  
    render(){
  
      return (
      
      <View style={styles.container}>
           <Text>Welcome</Text>

           <TouchableOpacity onPress={()=> Alert.alert("Go to ingredients")}>
               <Text>My Ingredients</Text>
           </TouchableOpacity>

           <TouchableOpacity onPress={()=> Alert.alert("Go to recipes")}>
               <Text>My Recipes</Text>
           </TouchableOpacity>

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
  }
  });


  export default Home;