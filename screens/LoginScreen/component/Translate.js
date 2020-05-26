import React, {Component} from 'react';
import {View, Switch, StyleSheet, Text} from 'react-native';
import {RNTextSwitch} from "react-native-text-switch";

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class Translate extends Component {
  render() {
    return (
      <View>
        <RNTextSwitch  style={{ width: 200, height: 100 }}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({

})
