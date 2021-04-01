import React from 'react';
import { StyleSheet, Text, View, TextInput, Button, ImageBackground, TouchableOpacity } from 'react-native';
import 'react-native-gesture-handler';

import Logo from '../components/Logo';
import Form2 from '../components/Form2';

class Signup extends React.Component{

  render(){

    return (
      <View style={styles.container}>
          <Logo/> 
          <Form2 navigation={this.props.navigation}/>   

          <View style={styles.registerTextCont}>
            <Text>Already have an account?</Text>
            <TouchableOpacity onPress={ () => this.props.navigation.navigate('Login')}>
             <Text style={styles.signUpBttn}> Login</Text>
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