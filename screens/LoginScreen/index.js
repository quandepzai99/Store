import React, {Component} from 'react';
import {View, Text, StatusBar} from 'react-native';
import Form from "./component/Form";
import Header from "./component/Header";
import Chat from "./component/Chat";
import images from "../../Common/images";


class index extends Component {
  render() {
    return (
      <View>
        <StatusBar barStyle={'light-content'} translucent={false} hidden={true}/>
        <Header />
        <Form />
        <Chat />
      </View>
    );
  }
}

export default index;


