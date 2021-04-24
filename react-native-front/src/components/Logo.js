import React from 'react';
import { Image, StyleSheet, Text, View, TextInput, Button, ImageBackground, TouchableOpacity } from 'react-native';
import LogoImage from '../images/LogoImage.png';

class Logo extends React.Component{

  render(){

    return (
      <View style={styles.container}>
          <Image source={LogoImage} style={styles.title}></Image>
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
  title:{
    width:700,
    height:100,
    resizeMode:'contain',
  },
});

export default Logo;