import React from 'react';
import { StyleSheet, Text, View, TextInput, Button, ImageBackground, TouchableOpacity, Alert } from 'react-native';
import {signup} from '../functions/signup';

class Form2 extends React.Component{
  
  constructor(){

    super();
    this.state = {
  
      name: "",
      email: "",
      password: "",
      error: "",
    }
  }

  submit(){

    //destructure the state
    const {name, email, password} = this.state;

    //create user object to hold the state
    const user = {

      name,
      email,
      password

    };

    console.log(JSON.stringify(user));

    signup(user)
    .then((data) => {
      //alert(JSON.stringify(data));
      if(data.error){
        this.setState({
          error: data.error
        });
      }
      else{
        this.setState({
          name: "",
          email: "",
          password: "",
          error: "",
        });
      }
    });

    //now go to the home page
    this.props.navigation.navigate('Login');

  }

  render(){

    return (
      <View style={styles.container}>
        <TextInput style={styles.inputBox}
        underlineColorAndroid='black'
        onChangeText = { (text) => {this.setState({name: text})}}
        placeholder="Name..."/>
        
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
          <Text style={styles.buttonText}>Sign up</Text>
      </TouchableOpacity>

      {//why does this not show up?
      }

      <Text>{this.error}</Text>
      
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

export default Form2;