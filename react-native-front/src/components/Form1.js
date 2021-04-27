import React from 'react';
import { StyleSheet, Text, View, TextInput, Alert, Button, ImageBackground, TouchableOpacity } from 'react-native';
import {signin} from '../functions/signin';
import {authenticate} from '../functions/authenticate';

class Form1 extends React.Component{

constructor(){

  super();
  this.state = {

    email: "",
    password: "",
    error: "",
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

  //alert(JSON.stringify(user));

    // call to signin method and handle errors
    signin(user)
    .then(data => {
        if(data.error){
            this.setState({
                error: data.error
            });
          //alert(JSON.stringify(data));
          //alert(this.state.error); 
        }
        else {
            // authenticate
            alert(JSON.stringify(data.user._id));
            authenticate(data, () => { 
                this.setState({redirectToHome: true});
            });

            this.setState({email: ""});
            this.setState({password: ""}); 

            this.props.navigation.navigate('Ingredients');  

        }
    });


  //now go to home page if authentication was successful
 // if(this.redirectToHome){
   // this.props.navigation.navigate('Home');
  //}

}
    
  render(){

    return (
      <View style={styles.container}>
        <TextInput  clearButtonMode="always" style={styles.inputBox}
        ref ={input => {this.TextInput = input}}
        onChangeText = { (text) => {this.setState({email: text})}}
        value={this.state.email}
        placeholder="Email..."/>

        <View style={styles.separation}></View>

        <TextInput clearButtonMode="always" style={styles.inputBox}
        underlineColorAndroid='black'
        onChangeText = { (text) => {this.setState({password: text})}}
        placeholder="Password..."
        secureTextEntry={true}/>
      
      <TouchableOpacity style={styles.button} onPress={()=> {this.submit()}}>
          <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={ () => this.props.navigation.navigate('ForgotPassword')}>
              <Text style={styles.forgotPass}>Forgot your password?</Text>
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
    marginTop: 50,
    height:50,
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
  forgotPass:{
    padding: 20,
    fontWeight: 'bold',
  },
  separation:{
    height: 50,
    backgroundColor: 'black',
  },
});

export default Form1;