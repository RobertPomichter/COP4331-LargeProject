import React from 'react';
import { StyleSheet, Text, View, TextInput, Button, ImageBackground, TouchableOpacity } from 'react-native';
import {Actions} from 'react-native-router-flux';

import Logo from '../components/Logo';
import Form from '../components/Form';

class Signup extends React.Component{

  render(){

    return (
      <View style={styles.container}>
          <Logo/> 
          <Form type="Signup"/>   

          <View style={styles.registerTextCont}>
            <Text>Already have an account?</Text>
            <TouchableOpacity>
             <Text style={styles.signUpBttn}> Sign in</Text>
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
export default Signup;