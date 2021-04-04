import React from 'react';
import { StyleSheet, Text, View, TextInput, Alert, Button, ImageBackground, TouchableOpacity } from 'react-native';
import {signup} from '../functions/signin';

class Form1 extends React.Component{

constructor(){

  super();
  this.state = {

    email: "",
    password: "",
    redirectToHome: false
  }
}

submit(){

  // destructure the state

  const {email, password} = this.state;

  //create user object to hold the state
  const user = {

    email,
    password

  };

  alert(JSON.stringify(user));

  //now go to home page
  this.props.navigation.navigate('Home')


}
    
  render(){

    return (
      <View style={styles.container}>
        <TextInput style={styles.inputBox} 
        underlineColorAndroid='black'
        onChangeText = { (text) => {this.setState({email: text})}}
        placeholder="Email..."/>

        <TextInput style={styles.inputBox}
        underlineColorAndroid='black'
        onChangeText = { (text) => {this.setState({password: text})}}
        placeholder="Password..."
        secureTextEntry={true}/>
      
      <TouchableOpacity style={styles.button} onPress={()=> {this.submit()}}>
          <Text style={styles.buttonText}>Login</Text>
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
  inputBox: {
    width: 300,
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

export default Form1;