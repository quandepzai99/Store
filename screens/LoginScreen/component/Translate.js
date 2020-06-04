import React, {Component} from 'react';
import {View, TouchableOpacity, StyleSheet, Text} from 'react-native';
import {colors} from '../../../Styles';
import {getBackgroundColor} from "react-native/Libraries/LogBox/UI/LogBoxStyle";



export default class Translate extends Component {

  colorButton = ["#fff"];
  state = {
    count: 0
  }

  handleSwitchToggle = () => {

    this.setState({
      count: this.state.count + 5
    })
  }
  update = () => {
    this.setState({

      count: this.state.count -3
    })
  }
  render() {
    const styles = StyleSheet.create({
    //   container: {
    //     flexDirection: 'row',
    //     backgroundColor: '#c7c1c1',
    //     borderRadius: 24
    //   },
      toggle: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginHorizontal: 10,
        margin: 4,
        width: 70,
        height: 25,
        borderRadius: 24,
        backgroundColor: 'grey',
        // marginLeft: this.state.active ? 30 : 0,

      },
      viewText: {
        marginLeft: 10,
        // backgroundColor: this.state.active
      },
      // viewText2: {
      //   marginRight: 10,
      //   backgroundColor: this.active
      // }

    })
    return (
      <View>
        <Text>{this.state.count}</Text>
        <TouchableOpacity
          style={styles.toggle}
          onPress={this.handleSwitchToggle}
        >
          <View style={styles.viewText}>
          <Text style={styles.label}>VN</Text>
          </View>
          <View style={styles.viewText}>
          <Text style={styles.label}>EN</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.toggle} onPress={this.update}></TouchableOpacity>
      </View>
    );
  }
}


