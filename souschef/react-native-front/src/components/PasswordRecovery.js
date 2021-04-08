import React from 'react';
import { StyleSheet, Text, View} from 'react-native';

class PasswordRecovery extends React.Component{

  render(){

    return (
      <View style={styles.container}>
          <Text style={styles.title}>Password Recovery</Text>
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
  title:{

    fontSize: 40,
    fontWeight: 'bold',
  },
});

export default PasswordRecovery;