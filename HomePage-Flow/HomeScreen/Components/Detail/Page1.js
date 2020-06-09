import React, {Component} from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from "react-native";
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import images from "../../../../Common/images";
import {navigationRef} from "../../../../Login_Flow/RootNavigation";

function navigation(name,id) {
  navigationRef.current && navigationRef.current.navigate(name, id);
}

export default class Page1 extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Image source={images.detail} />
        <TouchableOpacity style={styles.ellipse} onPress={() => navigation('Home')}>
          <FontAwesome name={'angle-left'} size={24} color={'#000'} />
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    ellipse: {
      justifyContent: 'center',
      alignItems: 'center',
      width: 32,
      height: 32,
      top: 10,
      left: 10,
      borderRadius: 16,
      opacity: 0.1,
      backgroundColor: "#380606",
      position: 'absolute'
    }

})

