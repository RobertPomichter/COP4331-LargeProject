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
       //alert(this.state.error);
      }
      else{
        this.setState({
          name: "",
          email: "",
          password: "",
          error: "",
        });
        this.props.navigation.navigate('Login');
      }
    });

  }

  render(){

    return (
      <View style={styles.container}>
        <TextInput clearButtonMode="always" style={styles.inputBox}
        underlineColorAndroid='black'
        onChangeText = { (text) => {this.setState({name: text})}}
        placeholder="Name..."/>
        
        <View style={styles.separation}></View>

        <TextInput clearButtonMode="always" style={styles.inputBox} 
        underlineColorAndroid='black'
        onChangeText = { (text) => {this.setState({email: text})}}
        placeholder="Email..."/>
        
        <View style={styles.separation}></View>

        <TextInput clearButtonMode="always" style={styles.inputBox}
        underlineColorAndroid='black'
        onChangeText = { (text) => {this.setState({password: text})}}
        placeholder="Password..."
        secureTextEntry={true}/>
      
      <TouchableOpacity style={styles.button} onPress={()=> {this.submit()}}>
          <Text style={styles.buttonText}>Sign up</Text>
      </TouchableOpacity>


      <Text style={styles.errorMsg}>{this.state.error}</Text>
      
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
  inputBox: {
    width: 300,
    height:60,
    paddingLeft: 20,
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 30,
    backgroundColor: 'white',
  },
  button:{
    borderRadius: 25,
    width: 300,
    backgroundColor: '#fff',
    paddingVertical: 16,
    marginTop: 20,
  },
  buttonText:{
      textAlign: 'center',
      fontWeight: 'bold',
  },
  errorMsg:{
    marginTop: 25,
    marginLeft: 50,
    marginRight: 50,
  },
  separation:{
    height: 30,
    backgroundColor: 'black',
  },
});

export default Form2;