import React, {Component} from 'react';
import {View, Text, StatusBar} from 'react-native';
import Header from '../PasswordScreen/component/Header'
import Form from "./component/Form";
import Chat from "./component/Chat";
// import Test from "./component/Test";


class index extends Component {
  render() {

    return (
      <View>
        <Header />
        <Form />
        <Chat />

      </View>
    );
  }
}

export default index;
