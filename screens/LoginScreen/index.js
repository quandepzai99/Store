import React, {Component} from 'react';
import {View, Text, StatusBar, TouchableOpacity, StyleSheet} from 'react-native';
import Form from "./component/Form";
import Header from "./component/Header";
import Chat from "./component/Chat";


class index extends Component {
  render() {
    return (
      <View>
        <StatusBar barStyle={'light-content'}/>
        <Header />
        <Form />
        <Chat />
      </View>
    );
  }
}

export default index;


