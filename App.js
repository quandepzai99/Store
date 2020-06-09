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
import Page1 from "./HomePage-Flow/HomeScreen/Components/Detail/Page1";
import Page2 from "./HomePage-Flow/HomeScreen/Components/Detail/Page2";
import Page3 from "./HomePage-Flow/HomeScreen/Components/Detail/Page3";
import Bottom from './HomePage-Flow/Bottom';

// const navigationRef = React.createRef();

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();



export default class App extends Component {
  render() {
    return (
      <NavigationContainer ref={navigationRef}>
        <Stack.Navigator headerMode="none">
          <Stack.Screen name={"Telephone"} component={LoginScreen} />
          <Stack.Screen name={"PinCode"} component={PasswordScreen} />
          <Stack.Screen name={"PinCode1"} component={CurrentPassword}/>
          <Stack.Screen name={"PinCode2"} component={ChangePassword}/>
          <Stack.Screen name={"Chats"} component={Inbox} />
          <Stack.Screen name={"Home"} component={Bottom} />
          <Stack.Screen name={"Page1"} component={Page1} />
          <Stack.Screen name={"Page2"} component={Page2} />
          <Stack.Screen name={"Page3"} component={Page3} />

        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
