import React, {Component} from 'react';
import {View, StyleSheet, Text} from "react-native";
import {colors} from "../../../Styles";
import AntDesign from 'react-native-vector-icons/AntDesign'

export default class SlideBanner extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.category}>

        </View>
        <Text style={styles.title}>
          Tin tức <Text style={{color: 'gold', fontWeight: 'bold', fontSize: 24}}>nổi bật</Text>
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    top: 33
  },
  title: {
    fontFamily: "Roboto",
    fontSize: 24,
    fontWeight: "normal",
    fontStyle: "normal",
    lineHeight: 26,
    letterSpacing: 0,
    textAlign: "left",
    color: colors.velvet
  },
  category: {

  }
})
