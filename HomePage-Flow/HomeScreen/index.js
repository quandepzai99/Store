import React, {Component} from 'react';
import {View, StatusBar} from "react-native";
import SlideBanner from "./Components/SlideBanner";

export default class index extends Component {
  render() {
    return (
      <View>
        <StatusBar barStyle={'light-content'}/>
        <SlideBanner />
      </View>
    );
  }
}

