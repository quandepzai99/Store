import React, {Component} from 'react';
import {View, StatusBar, StyleSheet, ScrollView} from "react-native";
import SlideBanner from "./Components/SlideBanner";
import CategoryIcon from "./Components/CategoryIcon";
import Header from "./Components/Header";



export default class index extends Component {
  render() {
    return (
      <ScrollView>
        <View style={styles.container}>
          <StatusBar barStyle={'light-content'}/>
          <Header />
          <CategoryIcon />
          <SlideBanner />
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgb(244, 246, 248)'
  }
})


