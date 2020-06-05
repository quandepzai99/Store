import AntDesign from "react-native-vector-icons/AntDesign";
import React from "react";
import styles from "./Header";
export default function SearchButton() {
  return (
    <AntDesign
      name={"search1"}
      style={styles.iconStyle}
      size={24}
      colors-={"white"}
    />
  );
}
