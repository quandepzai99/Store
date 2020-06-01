import React from "react";
import { View, Text, StatusBar } from "react-native";
import HeaderChangePass from "./Components/Header";
import styles from "./Components/StyleSheet";
import AntDesign from "react-native-vector-icons/AntDesign";
import PinInput from "./Components/pin-input";

export default function index() {
  return (
    <View>
      <HeaderChangePass />
      <StatusBar barStyle={"light-content"} />
      <View style={styles.viewBlock2}>
        <Text style={styles.textblock2box1}>Nhập mật khẩu</Text>
        <View style={styles.viewBlock2box1} autofocus={true}>
          <PinInput />
        </View>

        <Text style={styles.textblock2box2}>Xác nhận mật khẩu</Text>

        <View style={styles.viewBlock2box2}>
          <PinInput />
        </View>
      </View>
      <View
        style={{
          marginTop: 26,
          flexDirection: "row",
          justifyContent: "center"
        }}>
        <AntDesign name={"left"} size={15} color={"gray"} />
        <Text
          style={{
            fontSize: 15,
            fontWeight: "normal",
            fontStyle: "normal",
            lineHeight: 17,
            letterSpacing: 0,
            textAlign: "center",
            textColor: "grey"
          }}>
          {" "}
          Quay lai
        </Text>
      </View>
    </View>
  );
}
