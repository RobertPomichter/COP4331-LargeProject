import React from 'react';
import { StyleSheet, Text, View, TextInput, Button, ImageBackground, TouchableOpacity } from 'react-native';

class Welcome extends React.Component{

  render(){

    return (
      <View style={styles.container}>
          <Text style={styles.title}>Welcome</Text>
      </View>
    );
    }

}

const styles = StyleSheet.create({
  container: {
    marginBottom: 50,
  },
  title:{

    fontSize: 60,
    fontWeight: 'bold',
    color: '#e06010',
  },
});

export default Welcome;