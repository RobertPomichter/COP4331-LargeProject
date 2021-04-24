import React from 'react';
import { StyleSheet, Text, View, Alert, TextInput, Button, ImageBackground, TouchableOpacity } from 'react-native';
import 'react-native-gesture-handler';
import '@react-navigation/native';
import '@react-navigation/stack';
import backgroundImage from '../images/BackgroundImage.png';


import Logo from '../components/Logo';
import Form1 from '../components/Form1';

class Login extends React.Component{

  
  render(){

    return (
      <View style={styles.container}>
        <ImageBackground source={backgroundImage} style={styles.image}>
          <Logo/> 
          
          <Form1 navigation={this.props.navigation}/>   

          <View style={styles.registerTextCont}>
              <Text>Don't have an account?</Text>
              <TouchableOpacity onPress={ () => this.props.navigation.navigate('Register')}>
                <Text style={styles.signUpBttn}> Sign up</Text>
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
  registerTextCont:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    //margin: 10,
  },
  signUpBttn:{
    fontWeight: 'bold',
  },
  image:{
    width:'100%',
    height:'100%',
  },
});
export default Login;