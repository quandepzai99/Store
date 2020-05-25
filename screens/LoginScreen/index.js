import React, {Component} from 'react';
import {View, Text} from 'react-native';
import Login from "./component/Login";
import Header from "./component/Header";

class index extends Component {
  render() {
    return (
      <View>
        <Header />
        {/*<Login />*/}
      </View>
    );
  }
}

export default index;
