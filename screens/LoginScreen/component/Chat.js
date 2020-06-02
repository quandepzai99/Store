import React, {Component} from 'react';
import {View, TouchableOpacity, StyleSheet, Image} from 'react-native';
import {colors} from "../../../Styles";
import images from "../../../Common/images";

export default class Chat extends Component {
  render() {
    return (
      <TouchableOpacity style={styles.container}>
        <View style={styles.ellipse608}>
          <Image source={images.chat} style={styles.chat}/>
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    bottom: -60,
    width : 76,
    height : 76,
    justifyContent: "center",
    marginRight: 16,
    alignSelf : "flex-end",
    borderRadius: 40,
    backgroundColor: "rgba(114, 13, 93, 0.1)",
    shadowColor: "rgba(22, 60, 132, 0.16)",
    shadowOffset: {
      width: 0,
      height: 3
    },
    shadowRadius: 10,
    shadowOpacity: 0.2,
    elevation: 1,
  },

  ellipse608: {
    alignItems: 'center',
    margin: 8,
    borderRadius: 30,
    backgroundColor: "#ffffff",
    borderStyle: "solid",
    borderWidth: 4,
    borderColor: colors.paleGreyFour
  },
  chat: {
    margin: 14
  }
});
