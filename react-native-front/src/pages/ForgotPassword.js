import React from 'react';
import { StyleSheet, Text, View, Alert, TextInput, Button, ImageBackground, TouchableOpacity } from 'react-native';
import 'react-native-gesture-handler';
import '@react-navigation/native';
import '@react-navigation/stack';

import PasswordRecovery from '../components/PasswordRecovery';
import {forgotPassword} from '../functions/forgotPassword';

class ForgotPassword extends React.Component{

  constructor(){

    super();
    this.state = {
  
      email: "",
      error: "",
      message: "",
    }
  }

  submit(){

    //use forgotPassword.js
     // destructure the state

  const {email} = this.state;

  //create user object to hold the state
  const user = {
    email,
  };

  

  forgotPassword(this.state.email).then(data => {
    if (data.error) {
        console.log(data.error);
        this.setState({ error: data.error });
    } else {
        console.log(data.message);
        this.setState({ message: data.message });
    }
  });
    
  }

    render(){
  
      return (
      
      
      <View style={styles.container}>

        <Text style={styles.title}>Password Recovery</Text>

        <TextInput style={styles.inputBox}
        underlineColorAndroid='black'
        onChangeText = { (text) => {this.setState({email: text})}}
        placeholder="Email..."/>


          <TouchableOpacity style={styles.button} onPress={ () => {this.submit()}}>
                <Text style={styles.bold}>Send Password Reset Link</Text>
           </TouchableOpacity>

           <Text style={styles.errorMsg}>{this.state.error}</Text>
           <Text style={styles.errorMsg}>{this.state.message}</Text>

           <TouchableOpacity style={styles.backLoginBttn} onPress={ () => this.props.navigation.navigate('Login')}>
             <Text style={styles.bold}>Back to Login</Text>
           </TouchableOpacity>
       </View>
      );
      }
  
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#f57c00',
      alignItems: 'center',
      justifyContent: 'center',
    },
    button:{
      borderRadius: 25,
      width: 300,
      backgroundColor: '#fff',
      paddingVertical: 16,
      marginTop: 20,
      alignItems: 'center',
    },
    buttonText:{
      textAlign: 'center',
  },
  bold:{
    fontWeight: 'bold',
  },
  inputBox: {
    width: 300,
  },
  title:{

    fontSize: 40,
    fontWeight: 'bold',
    marginBottom: 30,
    color: '#fff',
  },
  backLoginBttn:{
    marginTop: 30,
  },
  errorMsg:{
    marginTop: 25,
    marginLeft: 50,
    marginRight: 50,
  },
  });


  export default ForgotPassword;