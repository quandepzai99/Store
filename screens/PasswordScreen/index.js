import React, { Component } from "react";
import { View, StatusBar } from "react-native";
import Header from "../PasswordScreen/component/Header";
import Form from "./component/Form";
import Chat from "./component/Chat";

class index extends Component {
  render() {
    return (
      <View>
        <StatusBar barStyle={"light-content"} />
        <Header />
        <Form />
        <Chat />
      </View>
    );
  }
}

export default index;
