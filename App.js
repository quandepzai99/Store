import React from "react";
import Header from "./HomePage-Flow/HomeScreen/Components/Header";
import { View, StatusBar } from "react-native";

export default function Apps() {
  return (
    <>
      <StatusBar barStyle={"light-content"} />
      <Header />
    </>
  );
}
