import React from "react";
import { View, Text, StatusBar, TextInput, Keyboard } from "react-native";
import HeaderChangePass from "./screens/ChangePasswordScreen/Components/StylesSheet/Header";
import styles from "./screens/ChangePasswordScreen/Components/StylesSheet/StyleSheet";
import AntDesign from "react-native-vector-icons/AntDesign";
import { gray } from "color-name";
import PinInput from "./screens/ChangePasswordScreen/Components/StylesSheet/pin-input";
export default function ChangePass() {
  return (
    <View>
      <HeaderChangePass />
      <StatusBar barStyle={"light-content"} />
      <View style={styles.viewBlock2}>
        <View
          style={{
            zIndex: 1,
            marginRight: 240
          }}>
          <Text
            style={styles.textblock2box1}>
            Nhập mật khẩu
          </Text>
        </View>
        <View style={styles.viewBlock2box1}
        autofocus={true}>
          <PinInput />
        </View>
          <View style={{
              zIndex: 1,
              marginRight: 220,
              marginLeft:16
          }}>
              <Text
                  style={styles.textblock2box2}>
                  Xác nhận mật khẩu
              </Text>
          </View>

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
            lineHeight: 16,
            textAlign: "center",
            color: "gray"
          }}>
          Quay lại
        </Text>
      </View>
    </View>
  );
}
