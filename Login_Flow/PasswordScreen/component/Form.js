import React, { Component } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import colors from "../../../colors";
import images from "../../../Common/images";
import SmoothPinCodeInput from "react-native-smooth-pincode-input";
import { navigationRef } from "../../RootNavigation";

function navigation(name) {
  navigationRef.current && navigationRef.current.navigate(name);
}

export default class Form extends Component {
  state = {
    code: "",
    password: ""
  };

  PinInput = React.createRef();

  render() {
    const { code } = this.state;
    const navigate = code.length >= 6 ? navigation("Home") : null;
    return (
      <View style={styles.container}>
        <Text style={styles.text1}>Nhập mật khẩu</Text>
        <SmoothPinCodeInput
          cellStyle={{
            borderWidth: 1,
            borderRadius: 24,
            width: 28,
            height: 28,
            borderColor: colors.paleGreyFour,
            backgroundColor: "#fff",
            marginTop: 36,
            marginLeft: 16
          }}
          mask={
            <View
              style={{
                width: 17,
                height: 17,
                borderRadius: 25,
                backgroundColor: colors.velvet
              }}
            />
          }
          textStyle={{
            fontSize: 20,
            color: colors.velvet
          }}
          textStyleFocused={{
            color: "red"
          }}
          cellStyleFocused={{
            borderColor : colors.blueGrey
          }}
          value={code}
          maskDelay={500}
          password={true}
          autoFocus={true}
          codeLength={6}
          onTextChange={code => this.setState({ code })}
        />
        <View style={styles.box}>
          <TouchableOpacity
            onPress={() => navigation("PinCode1")}
            style={{ paddingTop: 10, paddingBottom: 10 }}>
            <Text style={styles.text2}>Bạn quên mật khẩu?</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.btSignOut}
            onPress={() => navigation("Telephone")}>
            <Image source={images.sigleout} style={{ top: 3, right: 5 }} />
            <Text style={styles.text3}>Đăng xuất</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.box2}>
          <Text style={styles.text4}>Xác định khuôn mặt</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: "#fff",
    marginHorizontal: 16,
    borderRadius: 24,
    marginTop: -40,
    shadowColor: "#000",
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4
  },
  text1: {
    marginTop: 32,
    fontSize: 17,
    fontWeight: "bold",
    fontStyle: "normal",
    lineHeight: 24,
    letterSpacing: 0,
    textAlign: "center"
  },
  box: {
    flexDirection: "row",
    marginTop: 35
  },
  btSignOut: {
    marginRight: 16,
    top: -5,
    flexDirection: "row",
    paddingTop: 15,
    left: 50
  },
  text2: {
    marginLeft: 10,
    right: 30,
    fontSize: 14,
    fontWeight: "normal",
    fontStyle: "normal",
    lineHeight: 24,
    letterSpacing: 0,

    color: colors.deepSkyBlue
  },
  text3: {
    marginRight: 10,
    fontSize: 15,
    fontWeight: "normal",
    fontStyle: "normal",
    lineHeight: 24,
    letterSpacing: 0,
    textAlign: "left",
    color: colors.red
  },
  box2: {
    borderBottomLeftRadius: 24,
    borderBottomRightRadius: 24,
    marginTop: 24,
    width: "100%",
    alignItems: "center",
    borderTopWidth: 0.5
  },
  text4: {
    marginTop: 14,
    marginBottom: 14,
    fontSize: 14,
    fontWeight: "normal",
    fontStyle: "normal",
    lineHeight: 24,
    letterSpacing: 0,
    textAlign: "left",
    color: colors.blueGrey
  }
});
