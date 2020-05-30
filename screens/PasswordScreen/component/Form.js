import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import {colors} from "../../../Styles";
import images from "../../../Common/images";
import PinInput from "react-native-pin-code";
import SmoothPinCodeInput from "react-native-smooth-pincode-input";

export default class Form extends Component {
  state = {
    code: '',
    password: ''
  };

  PinInput = React.createRef();

  _checkCode = (code) => {
    if (code != '1234') {
      this.PinInput.current.shake().then(() => this.setState({code: ''}))
    }
  }
  render() {
    const { code, password } = this.state;
    return (
      <View style={styles.container}>
        <Text style={styles.text1}>Nhập mật khẩu</Text>
        <SmoothPinCodeInput
          cellStyle={{
            borderWidth: 1,
            borderRadius: 24,
            width: 28,
            height: 28,
            borderColor: '#000',
            backgroundColor: '#fff',
            marginTop: 36,
            marginLeft: 16
          }}
          mask={<View style={{
            width: 17,
            height: 17,
            borderRadius: 25,
            backgroundColor: colors.velvet,
          }}></View>}
          textStyle={{
            fontSize: 20,
            color: colors.velvet
          }}
          textStyleFocused={{
            color: 'crimson'
          }}
          value={code}
          maskDelay={1000}
          password={true}
          codeLength={6}
          onTextChange={code => this.setState({ code })}
        />
        <View style={styles.box}>
          <Text style={styles.text2}>Bạn quên mật khẩu?</Text>
          <Image source={images.sigleout} style={{marginLeft: 100, top: 3, right: 10}}/>
          <Text style={styles.text3}>Đăng xuất</Text>
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
    alignItems: 'center',
    backgroundColor: '#fff',
    marginHorizontal: 16,
    borderRadius: 24,
    marginTop: -40,
    shadowColor: "#000",
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
  },
  input: {

  },
  text1: {
    marginTop: 32,
    fontFamily: "Roboto",
    fontSize: 17,
    fontWeight: "bold",
    fontStyle: "normal",
    lineHeight: 24,
    letterSpacing: 0,
    textAlign: "center",
  },
  box: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 16,
    marginTop: 38
  },
  text2: {
    fontFamily: "Roboto",
    fontSize: 14,
    fontWeight: "normal",
    fontStyle: "normal",
    lineHeight: 24,
    letterSpacing: 0,
    textAlign: "left",
    color: colors.deepSkyBlue
  },
  text3: {
    fontFamily: "Roboto",
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
    width: '100%',
    alignItems: 'center',
    borderTopWidth: 0.5
  },
  text4: {
    marginTop: 14,
    marginBottom: 14,
    fontFamily: "Roboto",
    fontSize: 14,
    fontWeight: "normal",
    fontStyle: "normal",
    lineHeight: 24,
    letterSpacing: 0,
    textAlign: "left",
    color: colors.blueyGrey
  }
})
