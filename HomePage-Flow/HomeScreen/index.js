import React, {Component} from 'react';
import {View, StatusBar, StyleSheet} from "react-native";
import SlideBanner from "./Components/SlideBanner";
import CategoryIcon from "./Components/CategoryIcon";


export default class index extends Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar barStyle={'light-content'}/>
        <CategoryIcon />
        <SlideBanner />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgb(244, 246, 248)'
  }
})


