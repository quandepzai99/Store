import React, {Component} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import LoginScreen from './screens/LoginScreen';

export default class App extends Component {
  render() {
    return (
      <View>
        <LoginScreen />
      </View>
    );
  }
}

const styles = StyleSheet.create({

})

