import React, {Component} from 'react';
import {View, Text, StatusBar, TouchableOpacity, StyleSheet} from 'react-native';
import Form from "./component/Form";
import Header from "./component/Header";
import Chat from "./component/Chat";
import Buttons from "./component/Buttons";
import AntDesign from "react-native-vector-icons/AntDesign";
import {colors} from "../../Styles";



class index extends Component {
  continue = () => {
    this.props.navigation.navigate('PinCode')
}
  render() {
    return (
      <View>
        <StatusBar barStyle={'light-content'}/>
        <Header />
        <Form />
        <Chat />
        {/*<Buttons />*/}

      </View>
    );
  }
}

export default index;

const styles = StyleSheet.create({

})
