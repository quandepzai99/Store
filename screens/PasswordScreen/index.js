import React, {Component} from 'react';
import {View, Text, StatusBar} from 'react-native';
import Header from '../PasswordScreen/component/Header'
import Password from "./component/Password";
import Chat from "./component/Chat";
import Test from "./component/Test";
class index extends Component {
  render() {

    return (
      <View>
        <Header />
        <Password />
        <Chat />
        {/*<Test />*/}
      </View>
    );
  }
}

export default index;
