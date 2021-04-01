import React from 'react';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Login from './pages/Login';
import Signup from './pages/Signup';

const Stack = createStackNavigator();

class Routes extends React.Component{

    render(){

        return(
        <NavigationContainer>
            <Stack.Navigator initialRouteName='Login' screenOptions={{headerShown: false}}>
                <Stack.Screen name='Login' component={Login}/>
                <Stack.Screen name='Register' component={Signup}/>
            </Stack.Navigator>
          </NavigationContainer>
        

        );
    }

}

export default Routes;