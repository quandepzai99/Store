import React, {Component} from 'react';
import {View, TouchableOpacity, StyleSheet, Text, Animated} from 'react-native';
import {colors} from '../../../Styles';


export default class Translate extends Component {
  state = {
    active: false
  }

  handleSwitchToggle = () => {
    this.setState({
      active: !this.state.active
    })
  }
  render() {

    const styles = StyleSheet.create({
      container: {
        flexDirection: 'row',
        backgroundColor: '#c7c1c1',
        borderRadius: 24
      },
      toggle: {
        alignItems: 'center',
        margin: 4,
        width: 35,
        height: 18,
        borderRadius: 24,
        marginRight: 35,
        backgroundColor: colors.paleGreyFour,
        left: this.state.active ? 30 : 0
      },
      label: {
        fontSize: 13,
        fontWeight: "normal",
        fontStyle: "normal",
        lineHeight: 20,
        letterSpacing: 0,
        textAlign: "center",
        color: colors.velvet
      }
    })
    return (
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.toggle}
          onPress={() => this.handleSwitchToggle()}
        >
          <Text style={styles.label}>{this.state.active ? 'EN' : 'VN'}</Text>
        </TouchableOpacity>

      </View>
    );
  }
}


