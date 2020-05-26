import React, {Component} from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';

export default class Login extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.trans}>
          <Text >Nhập số điện thoại</Text>
          <Text >Nhập số </Text>
        </View>
        <TextInput style={styles.input}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    marginHorizontal: 16,
    borderRadius: 24,
    marginTop: -40,
    shadowColor: "#000",
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
  },
  trans: {
    paddingTop: 32,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 30
  },
  input: {
    height: 60,
    borderColor: 'gray',
    borderWidth: 1,
    marginTop: 40,
    marginBottom: 76,
    rginHorizontal: 16
  }
})
