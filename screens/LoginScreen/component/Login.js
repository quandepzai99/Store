import React, {Component} from 'react';
import {View, Text, StyleSheet, TextInput, TouchableOpacity} from 'react-native';
import {colors} from "../../../Styles";
import AntDesign from 'react-native-vector-icons/AntDesign'
import Translate from "./Translate";

export default class Login extends Component {

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.trans}>
          <Text >Nhập số điện thoại</Text>
          <Text >dich </Text>
        </View>
        <TextInput
          style={styles.input}
          keyboardType = 'numeric'
          maxLength={10}
        />


        <TouchableOpacity style={styles.ellipse529}>
          <View style={styles.ellipse531}>
            <AntDesign name={'arrowright'} size={28} color={colors.blueyGrey} style={styles.icon}/>
          </View>
        </TouchableOpacity>
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
    height: 60,
    borderColor: colors.blueyGrey,
    borderWidth: 1,
    marginTop: 40,
    borderRadius: 12,
    marginBottom: 76,
    borderStyle: "solid",
    marginHorizontal: 16
  },
  ellipse529: {
    marginTop: -40,
    top: 35,
    alignItems: 'center',
    marginLeft: 140,
    marginRight: 140,
    borderRadius: 40,
    backgroundColor: "#ffffff",
    shadowColor: "rgba(0, 0, 0, 0.16)",
    shadowOffset: {
      width: 0,
      height: 3
    },
    shadowRadius: 6,
    shadowOpacity: 1,
    elevation: 4,
  },
  ellipse531: {
    margin: 10,
    backgroundColor: "#ffffff",
    borderRadius: 30,
    shadowColor: "rgba(0, 0, 0, 0.16)",
    shadowOffset: {
      width: 0,
      height: 3
    },
    shadowRadius: 6,
    shadowOpacity: 1,
    elevation: 4,
  },
  icon: {
    margin: 16,
  }
})
