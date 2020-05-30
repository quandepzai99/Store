import React, {Component} from 'react';
import {View, TouchableOpacity, Text} from 'react-native';


class Buttons extends Component {
  continue = () => {
    this.state.navigation.navigate('PinCode')
  }
  render() {
    return (
      <View>
        <TouchableOpacity onPress={this.continue}><Text>aaa</Text></TouchableOpacity>
      </View>
    );
  }
}

export default Buttons;
