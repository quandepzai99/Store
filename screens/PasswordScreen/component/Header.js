import React, {Component} from 'react';
import {StyleSheet, View, Text, ImageBackground, StatusBar} from 'react-native';
import images from '../../../Common/images'

export default class Header extends Component {
  render() {
    return (
      <ImageBackground source={images.HeaderBackground} style={{height: 224}}>
        <Text style={styles.text}>Chào mừng bạn quay lại UrBox</Text>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  text: {
    marginHorizontal: 30,
    fontFamily: "Roboto",
    fontSize: 32,
    marginTop: 70,
    fontWeight: "bold",
    fontStyle: "normal",
    lineHeight: 35,
    letterSpacing: 0,
    textAlign: "center",
    color: '#fff',
  }
})
