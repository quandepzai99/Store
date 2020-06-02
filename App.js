import React, {Component} from 'react';
import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";
import LoginScreen from './screens/LoginScreen';
import PasswordScreen from './screens/PasswordScreen';
import { navigationRef } from './screens/RootNavigation';
import ChangePasswordsScreen from './screens/ChangePasswordScreen';
import ChangePasswordsScreenStep1 from './screens/ChangePasswordScreenStep1';



// const navigationRef = React.createRef();

const Stack = createStackNavigator();

export default class App extends Component {
  render() {
    return (
      <NavigationContainer ref={navigationRef}>
        <Stack.Navigator headerMode="none">
          <Stack.Screen name={'Telephone'} component={LoginScreen} />
          <Stack.Screen name={'PinCode'} component={PasswordScreen} />
          {/*<Stack.Screen name={'PinCode'} component={ChangePasswordsScreen} />*/}
          {/*<Stack.Screen name={'PinCode'} component={ChangePasswordsScreenStep1} />*/}
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}



