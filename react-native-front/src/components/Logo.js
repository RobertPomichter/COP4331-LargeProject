import React from 'react';
import { StyleSheet, Text, View, TextInput, Button, ImageBackground, TouchableOpacity } from 'react-native';

class Logo extends React.Component{

  render(){

    return (
      <View style={styles.container}>
          <Text style={styles.title}>souschef</Text>
      </View>
    );
    }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f57c00',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title:{

    fontSize: 60,
    fontWeight: 'bold',
    color: '#fff',
  },
});

export default Logo;