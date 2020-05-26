import React, {Component} from 'react';
import {View, Text, StatusBar} from 'react-native';
import Login from "./component/Login";
import Header from "./component/Header";
import Chat from "./component/Chat";


class index extends Component {
  render() {
    return (
      <View>
        <StatusBar barStyle={'light-content'}/>
        <Header />
        <Login />
        <Chat />
      </View>
    );
  }
}

export default index;
