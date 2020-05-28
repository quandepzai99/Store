import React, {Component} from 'react';
import {StyleSheet, View, Text, Button} from 'react-native';
import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";
import LoginScreen from './screens/LoginScreen';
import PasswordScreen from './screens/PasswordScreen'

const Stack = createStackNavigator();

export default class App extends Component {
  render() {
    return (
      <NavigationContainer >
        <Stack.Navigator headerMode="none">
          <Stack.Screen name={'Telephone'} component={LoginScreen} />
          <Stack.Screen name={'PasswordScreen'} component={PasswordScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

const styles = StyleSheet.create({

})

