import React from 'react';
import { StyleSheet, Text, View, Alert, TextInput, Button, ImageBackground, TouchableOpacity } from 'react-native';
import 'react-native-gesture-handler';
import '@react-navigation/native';
import '@react-navigation/stack';


class ForgotPassword extends React.Component{

  
    render(){
  
      return (
      
      <View style={styles.container}>

          <TouchableOpacity style={styles.button} onPress={ () => this.props.navigation.navigate('Login')}>
                <Text style={styles.backHome}>Back to Login</Text>
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
      alignItems: 'center',
    },
    buttonText:{
      textAlign: 'center',
  },
  backHome:{
    fontWeight: 'bold',
  }

  });


  export default ForgotPassword;