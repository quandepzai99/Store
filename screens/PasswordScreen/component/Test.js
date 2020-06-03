import * as React from 'react';
import { TouchableOpacity, View, Switch, Text } from 'react-native';

export default class ToggleButtonExample extends React.Component {
  state = {
    status: 'checked',
  };

  _onButtonToggle = value => {
    this.setState({
      status: value === 'checked'
        ? 'unchecked'
        : 'checked',
    });
  }

  render() {
    return (
      <View style={{alignItems: 'center'}}>
        <Switch
          value={true}
          onTintColor={'#fff'}
          thumbTintColor="red"
        />
      </View>
    );
  }
}
