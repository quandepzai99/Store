import React, {Component} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import LoginScreen from './screens/LoginScreen';
import PasswordScreen from './screens/PasswordScreen'

export default class App extends Component {
  render() {
    return (
      <View>
        {/*<LoginScreen />*/}
        <PasswordScreen />
      </View>
    );
  }
}

const styles = StyleSheet.create({

})

