import React, {Component} from 'react';
import {View, Text, StatusBar} from 'react-native';
import Login from "./component/Login";
import Header from "./component/Header";


class index extends Component {
  render() {
    return (
      <View>
        <StatusBar barStyle={'light-content'}/>
        <Header />
        <Login />
      </View>
    );
  }
}

export default index;
