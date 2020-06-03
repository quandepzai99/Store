import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity
} from "react-native";
import { colors } from "../../../Styles";
import AntDesign from "react-native-vector-icons/AntDesign";
import Translate from "./Translate";
import { navigationRef } from "../../RootNavigation";

// const navigationRef = React.createRef();

function navigate(name) {
  navigationRef.current && navigationRef.current.navigate(name);
}

export default class Form extends Component {
  colorButton = ["#fff"];

  constructor(props) {
    super(props);
    this.state = {
      Reds: colors.blueyGrey
    };
  }

  handleKeyup = event => {
    // console.log(event.nativeEvent.text)
    let colors = event.nativeEvent.text;
    if (colors.length > 0) {
      this.setState({
        Reds: "rgb(114, 13, 93)"
      });
    } else {
      this.setState({
        Reds: colors.blueyGrey
      });
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.trans}>
          <Text style={styles.text1}>Nhập số điện thoại</Text>
          <Translate />
        </View>
        <Text style={styles.text2}>số điện thoại</Text>
        <TextInput
          onChange={this.handleKeyup}
          placeholder={"0901234567"}
          style={styles.input}
          keyboardType="phone-pad"
          maxLength={10}
          autoFocus={true}
        />
        <TouchableOpacity
          onPress={() => navigate("PinCode")}
          style={[styles.ellipse529, { backgroundColor: this.state.Reds }]}>
          <View style={styles.ellipse531}>
            <AntDesign
              name={"arrowright"}
              size={28}
              color={this.state.Reds}
              style={styles.icon}
            />
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    position: "relative",
    backgroundColor: "#fff",
    marginHorizontal: 16,
    borderRadius: 24,
    marginTop: -40,
    shadowColor: "#000",
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4
  },
  trans: {
    paddingTop: 32,
    flexDirection: "row",
    justifyContent: "space-between",
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
    fontSize: 17,
    fontWeight: "bold",
    fontStyle: "normal",
    lineHeight: 24,
    letterSpacing: 0,
    textAlign: "center"
  },
  text2: {
    position: 'absolute',
    left: 32,
    top: 85,
    zIndex: 1,
    backgroundColor: "#fff",
    fontSize: 15,
    fontWeight: "normal",
    fontStyle: "normal",
    lineHeight: 24,
    letterSpacing: 0,
    color: colors.blueyGrey
  },
  ellipse529: {
    position: "absolute",
    bottom: -40,
    left: "50%",
    alignItems: "center",
    marginLeft: -40,
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
    elevation: 4
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
    elevation: 4
  },
  icon: {
    margin: 16
  }
});