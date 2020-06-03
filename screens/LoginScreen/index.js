import React, { Component } from "react";
import { View, StatusBar } from "react-native";
import Form from "./component/Form";
import Header from "./component/Header";
import Chat from "./component/Chat";

class index extends Component {
  render() {
    return (
      <View>
        <StatusBar
          barStyle={"light-content"}
          translucent={true}
          backgroundColor={"transparent"}
        />
        <Header />
        <Form />
        <Chat />
      </View>
    );
  }
}

export default index;
