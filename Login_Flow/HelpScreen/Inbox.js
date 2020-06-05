import React, {Component} from 'react';
import {View, StyleSheet, Text} from 'react-native';

export default class Inbox extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Hello word</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
})
