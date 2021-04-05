import React from 'react';
import { StyleSheet, Text, View, Alert, TextInput, Button, ImageBackground, TouchableOpacity } from 'react-native';
import 'react-native-gesture-handler';
import '@react-navigation/native';
import '@react-navigation/stack';


import Logo from '../components/Logo';
import Form1 from '../components/Form1';

class Login extends React.Component{

  
  render(){

    return (
      <View style={styles.container}>
          <Logo/> 
          
          <Form1 navigation={this.props.navigation}/>   

          <View style={styles.registerTextCont}>
            <Text>Don't have an account?</Text>
            <TouchableOpacity onPress={ () => this.props.navigation.navigate('Register')}>
              <Text style={styles.signUpBttn}> Sign up</Text>
            </TouchableOpacity>

          </View>

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
});
export default Login;