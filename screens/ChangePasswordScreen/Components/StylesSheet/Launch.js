import React from "react";
import { View, Text, StatusBar, TextInput, Keyboard } from "react-native";
import HeaderChangePass from "./screens/ChangePasswordScreen/Components/StylesSheet/Header";
import styles from "./screens/ChangePasswordScreen/Components/StylesSheet/StyleSheet";
import AntDesign from "react-native-vector-icons/AntDesign";
import { gray } from "color-name";

export default function ChangePass() {
  return (
    <View>
      <HeaderChangePass />
      <StatusBar barStyle={"light-content"} />
      <View style={styles.successChanged}>
        <View
          style={{
            zIndex: 1,
            marginRight: 200
          }}>
          <Text
            style={{
              marginLeft: 32,
              marginTop: 26,
              textAlign: "left",
              backgroundColor: "white"
            }}>
            Nhập mật khẩu hiện tại
          </Text>
        </View>
        <View
          style={{
            marginLeft: 16,
            marginRight: 16,
            backgroundColor: "#ffffff",
            shadowColor: "#000",
            shadowOpacity: 0.1,
            marginTop: -5,
            borderRadius: 24,
            zIndex: 0,
            flexDirection: "row"
          }}>
          <TextInput
            style={{
              borderRadius: 20,
              borderWidth: 1,
              backgroundColor: "#ffffff",
              width: 28,
              height: 28,
              borderStyle: "solid",
              borderColor: "grey",
              marginTop: 18,
              marginBottom: 14,
              marginLeft: 51,
              alignItems: "center"
            }}
            keyboardType={"phone-pad"}
            autoFocus={true}
          />
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
            letterSpacing: 0,
            textAlign: "center",
            color: "gray"
          }}>
          Quay lại
        </Text>
      </View>
    </View>
  );
}
