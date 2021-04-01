import React from 'react';
import { StyleSheet, Text, View, TextInput, Button, ImageBackground, TouchableOpacity } from 'react-native';
import {Actions} from 'react-native-router-flux';

import Logo from '../components/Logo';
import Form from '../components/Form';

class Login extends React.Component{

  render(){

    return (
      <View style={styles.container}>
          <Logo/> 
          <Form type="Login"/>   

          <View style={styles.registerTextCont}>
            <Text>Don't have an account?</Text>
            <TouchableOpacity>
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
  },
  signUpBttn:{
    fontWeight: 'bold',
  }
});
export default Login;