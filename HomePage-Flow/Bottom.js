import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "./HomeScreen";
import { Image, Text, View, StyleSheet } from "react-native";
import images from "../Common/images";

const Tab = createBottomTabNavigator();
function Voucher() {
  return (
    <View>
      <Image source={images.icon_voucher} />
      <Text style={{ backgroundColor: "red" }}>Voucher</Text>
    </View>
  );
}
function Wallet() {
  return (
    <View>
      <Image source={images.icon_wallet} />
      <Text>Wallet</Text>
    </View>
  );
}
function Account() {
  return (
    <View>
      <Image source={images.icon_account} />
      <Text>Account</Text>
    </View>
  );
}
export default function Bottom() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name={"Home"}
        component={HomeScreen}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({}) => (
            <Image
              source={images.icon_home}
              style={{ justifyContent: "center", alignItems: "center" }}
            />
          )
        }}
      />
      <Tab.Screen
        name={"Voucher"}
        component={Voucher}
        options={{
          tabBarLabel: "Voucher",
          tabBarIcon: ({}) => (
            <Image
              source={images.icon_voucher}
              style={{ justifyContent: "center", alignItems: "center" }}
            />
          )
        }}
      />
      <Tab.Screen
        name={"Wallet"}
        component={Wallet}
        options={{
          tabBarLabel: "Wallet",
          tabBarIcon: ({}) => (
            <Image
              source={images.icon_wallet}
              style={{ justifyContent: "center", alignItems: "center" }}
            />
          )
        }}
      />
      <Tab.Screen
        name={"Account"}
        component={Account}
        options={{
          tabBarLabel: "Account",
          tabBarIcon: ({}) => (
            <Image
              source={images.icon_account}
              style={{ justifyContent: "center", alignItems: "center" }}
            />
          )
        }}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  buttonStyle: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "red"
  }
});
