import React, { Component } from "react";
import { StatusBar, View, Image } from "react-native";
import BGP from "./Picture/BG.png";
import Pincode from "react-native-smooth-pincode-input"

class App extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <StatusBar barStyle="light-content" />
        <Image
          source={BGP}
          style={{
            flex: 0.192
          }}
        />
        <View
          style={{
            flex: 0.2,
            marginLeft: 16,
            marginRight: 16,
            backgroundColor: "red",
            borderRadius: 24,
            marginTop: -50
          }}
        />
      </View>
    );
  }
}
export default App;
