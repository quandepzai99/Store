import React, { Component } from "react";
import { StatusBar, StyleSheet, ScrollView, SafeAreaView } from "react-native";
import News from "./Components/News";
import CategoryIcon from "./Components/CategoryIcon";
import Header from "./Components/Header";
import FavoriteBrands from "./Components/FavoriteBrands";

export default function Class() {
  return (
    <ScrollView>
      <StatusBar translucent={true} backgroundColor={"transparent"}/>
      <SafeAreaView style={styles.container}>
        <StatusBar />
        <Header />
        <CategoryIcon />
        <News />
        <FavoriteBrands />
      </SafeAreaView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgb(244, 246, 248)"
  }
});
