import React, { Component } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from "./Login_Flow/LoginScreen";
import PasswordScreen from "./Login_Flow/PasswordScreen";
import { navigationRef } from "./Login_Flow/RootNavigation";
import CurrentPassword from "./Login_Flow/CurrentPassword";
import ChangePassword from "./Login_Flow/ChangePassword";
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Inbox from "./Login_Flow/HelpScreen/Inbox";
import HomeScreen from './HomePage-Flow/HomeScreen'
import Bottom from './HomePage-Flow/Bottom';

// const navigationRef = React.createRef();

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();



export default class App extends Component {
  render() {
    return (
      <NavigationContainer ref={navigationRef}>
        <Stack.Navigator headerMode="none">
          {/*<Stack.Screen name={"Telephone"} component={LoginScreen} />*/}
          {/*<Stack.Screen name={"PinCode"} component={PasswordScreen} />*/}
          {/*<Stack.Screen name={"PinCode1"} component={CurrentPassword}/>*/}
          {/*<Stack.Screen name={"PinCode2"} component={ChangePassword}/>*/}
          {/*<Stack.Screen name={"Chats"} component={Inbox} />*/}
          <Stack.Screen name={"Home"} component={Bottom} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
