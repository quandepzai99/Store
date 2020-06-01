import React from "react";
import { Button, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

function goback({ navigation }) {
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
      }}>
      <Button
        title="Quay lai"
        onPress={() => navigation.navigate("BlankScreen")}
      />
    </View>
  );
}

export default goback();
