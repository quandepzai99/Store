import React from "react";
import { ImageBackground, View, TextInput, StyleSheet } from "react-native";
import images from "../../../Common/images";

export default function Header() {
  return (
    <>
      <ImageBackground source={images.HeaderBackground} style={{ height: 220 }}>
        <TextInput style={styles.searchField} placeholder={"Thương hiệu"} />
      </ImageBackground>
    </>
  );
}

const styles = StyleSheet.create({
  searchField: {
    marginRight: 16,
    marginLeft: 16,
    flex: 1
  }
});
