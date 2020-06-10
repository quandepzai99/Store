import React, { Component } from "react";
import {
  View,
  StatusBar,
  StyleSheet,
  ScrollView,
  SafeAreaView
} from "react-native";
import News from "./Components/News";
import CategoryIcon from "./Components/CategoryIcon";
import Header from "./Components/Header";
import FavoriteBrands from "./Components/FavoriteBrands";
import Product from "./Components/Product";
import TabView from  "./Components/TabView"

export default function Class() {
  return (
    <ScrollView>
      <StatusBar barStyle={"light-content"} />
      <Header />
      <CategoryIcon />
      <News />
      <Product />
      <FavoriteBrands />
      <TabView/>

      {/*<FavoriteBrands />*/}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgb(244, 246, 248)"
  }
});
