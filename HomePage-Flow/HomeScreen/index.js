import React, {Component} from 'react';
import {View, StatusBar, StyleSheet, ScrollView, SafeAreaView} from "react-native";
import News from "./Components/News";
import CategoryIcon from "./Components/CategoryIcon";
import Header from "./Components/Header";
import FavoriteBrands from './Components/FavoriteBrands'




export default class index extends Component {
  render() {
    return (
      <ScrollView>
        <SafeAreaView style={styles.container}>
          <StatusBar />
          <Header />
          <FavoriteBrands />

          {/*<CategoryIcon />*/}
          {/*<News />*/}
        </SafeAreaView>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgb(244, 246, 248)'
  }
})


