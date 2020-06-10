import React, { Component } from "react";
import { StatusBar, StyleSheet, ScrollView, SafeAreaView } from "react-native";
import News from "./Components/News";
import CategoryIcon from "./Components/CategoryIcon";
import Header from "./Components/Header";
import FavoriteBrands from "./Components/FavoriteBrands";
import BottomTabView from "./Components/BottomTabView";

export default function Class() {
  return (
    <ScrollView>
      <StatusBar barStyle={"light-content"} />
      <Header />
      <CategoryIcon />
      <News />
      <FavoriteBrands />
      <BottomTabView />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgb(244, 246, 248)"
  }
});
