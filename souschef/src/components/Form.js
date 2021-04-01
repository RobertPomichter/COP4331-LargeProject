import React from 'react';
import { StyleSheet, Text, View, TextInput, Button, ImageBackground, TouchableOpacity } from 'react-native';

class Form extends React.Component{

    
  render(){

    return (
      <View style={styles.container}>
        <TextInput style={styles.inputBox} underlineColorAndroid='black'placeholder="Name..."/>
        <TextInput style={styles.inputBox}
        underlineColorAndroid='black'
        placeholder="Password..."
        secureTextEntry={true}/>
      
      <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>{this.props.type}</Text>
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

export default Form;