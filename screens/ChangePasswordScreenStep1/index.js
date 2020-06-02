import React from "react";
import { View, Text, StatusBar, TouchableOpacity } from "react-native";
import HeaderChangePass from "./Components/Header";
import styles from "./Components/StyleSheet";
import AntDesign from "react-native-vector-icons/AntDesign";
import PinInput from "./Components/pin-input";
import { navigationRef } from "../RootNavigation";

function navigate(name) {
  navigationRef.current && navigationRef.current.navigate(name);
}

export default function index() {
  return (
    <View>
      <HeaderChangePass />
      <StatusBar barStyle={"light-content"} />
      <View style={styles.viewBlock2}>
        <Text style={styles.textblock2box1}>Nhập mật khẩu hiện tại</Text>
        <View style={styles.viewBlock2box1} autofocus={true}>
          <PinInput />
        </View>
      </View>
      <TouchableOpacity
        style={{
          flexDirection: "row",
          justifyContent: "center",
          marginTop: 26
        }}
        onPress={() => navigate("PinCode")}>
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
      </TouchableOpacity>
    </View>
  );
}
