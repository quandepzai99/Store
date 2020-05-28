import React, {Component} from 'react';
import {View, Text, StatusBar, Button, TouchableOpacity, StyleSheet} from 'react-native';
import Login from "./component/Login";
import Header from "./component/Header";
import Chat from "./component/Chat";
import AntDesign from "react-native-vector-icons/AntDesign";
import {colors} from "../../Styles";


class index extends Component {
  continue = () => {
    this.props.navigation.navigate('PasswordScreen')
}
  render() {
    return (
      <View>
        <StatusBar barStyle={'light-content'}/>
        <Header />
        <Login />
        <TouchableOpacity
          title={'aa'}
          style={styles.ellipse529}
          onPress={this.continue}
        >
          <View style={styles.ellipse531}>
            <AntDesign name={'arrowright'} size={28} color={colors.blueyGrey} style={styles.icon}/>
          </View>
        </TouchableOpacity>
        <Chat />
      </View>
    );
  }
}

export default index;

const styles = StyleSheet.create({
  ellipse529: {
    marginTop: -70,
    top: 30,
    alignItems: 'center',
    marginLeft: 155,
    marginRight: 155,
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
  },
})
