import React, {Component} from 'react';
import {View, Text, StyleSheet, TextInput, TouchableOpacity, Button} from 'react-native';
import {colors} from "../../../Styles";
import AntDesign from 'react-native-vector-icons/AntDesign'
import Translate from "./Translate";
import index from "../../PasswordScreen";


export default class Login extends Component {

  continue = () => {
    this.state.navigation.navigate('PasswordScreen')
  }

  render() {
 //    const {navigate} = this.props.navigation;
    return (
      <View style={styles.container}>
        <View style={styles.trans}>
          <Text style={styles.text1}>Nhập số điện thoại</Text>
          <Translate/>
        </View>
        <View style={styles.textView}>
          <Text style={styles.text2}>số điện thoại</Text>
        </View>
        <TextInput
          placeholder={'0901234567'}
          style={styles.input}
          keyboardType='numeric'
          maxLength={10}
        />

      </View>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    marginHorizontal: 16,
    borderRadius: 24,
    marginTop: -40,
    shadowColor: "#000",
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
  },
  trans: {
    paddingTop: 32,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 30
  },
  input: {
    fontSize: 24,
    fontWeight: "normal",
    fontStyle: "normal",
    lineHeight: 24,
    letterSpacing: 0,
    textAlign: "left",
    color: colors.greyishBrown,
    height: 60,
    borderColor: colors.blueyGrey,
    borderWidth: 1,
    marginTop: 40,
    borderRadius: 12,
    marginBottom: 76,
    borderStyle: "solid",
    marginHorizontal: 16
  },

  text1: {
    fontFamily: "Roboto",
    fontSize: 17,
    fontWeight: "bold",
    fontStyle: "normal",
    lineHeight: 24,
    letterSpacing: 0,
    textAlign: "center",
  },
  textView: {
    bottom: -55,
    backgroundColor: '#fff',
    zIndex: 1,
    marginLeft: 40,
    marginRight: 220
  },
  text2: {
    fontFamily: "Roboto",
    fontSize: 15,
    fontWeight: "normal",
    fontStyle: "normal",
    lineHeight: 24,
    letterSpacing: 0,
    textAlign: "left",
    color: colors.blueyGrey,
    padding: 5
  }
})
