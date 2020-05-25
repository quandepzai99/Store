import React, { Component } from "react";
import { StyleSheet, StatusBar, View, Platform, Image, Text, Colors } from "react-native";
import BGP from "./Picture/backgroundpic.jpg";

const STATUS_BAR_HEIGHT = Platform.OS === "ios" ? 20 : StatusBar.currentHeight;

class App extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <StatusBar barStyle="light-content" />
        <Image source={BGP}
        style={{
            flex:0.192
        }}/>
      </View>
    );
  }
}
Lungta
export default App;
