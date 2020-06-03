import * as React from 'react';
import { TouchableOpacity, View, Switch } from 'react-native';

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
      <View>
        <Switch
          onValueChange={(val) => this.setState({ activeSwitch: val })}      // this is necessary for this component
          text1 = 'ON'                        // optional: first text in switch button --- default ON
          text2 = 'OFF'                       // optional: second text in switch button --- default OFF
          switchWidth = {100}                 // optional: switch width --- default 44
          switchHeight = {44}                 // optional: switch height --- default 100
          switchdirection = 'rtl'             // optional: switch button direction ( ltr and rtl ) --- default ltr
          switchBorderRadius = {100}          // optional: switch border radius --- default oval
          switchSpeedChange = {500}           // optional: button change speed --- default 100
          switchBorderColor = '#d4d4d4'       // optional: switch border color --- default #d4d4d4
          switchBackgroundColor = '#fff'      // optional: switch background color --- default #fff
          btnBorderColor = '#00a4b9'          // optional: button border color --- default #00a4b9
          btnBackgroundColor = '#00bcd4'      // optional: button background color --- default #00bcd4
          fontColor = '#b1b1b1'               // optional: text font color --- default #b1b1b1
          activeFontColor = '#fff'/>
      </View>
    );
  }
}
