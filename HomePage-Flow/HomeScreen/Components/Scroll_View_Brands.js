import React from "react";
import {
  View,
  ScrollView,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
    FlatList
} from "react-native";

export default function ScrollViewBrands() {
  return (
    <ScrollView horizontal={true}>
      <TouchableOpacity style={styles.scrollStyle}>
        <View style={styles.brandIcon} />
        <Text> Brand name</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.scrollStyle}>
        <View style={styles.brandIcon} />
        <Text> Brand name</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.scrollStyle}>
        <View style={styles.brandIcon} />
        <Text> Brand name</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.scrollStyle}>
        <View style={styles.brandIcon} />
        <Text> Brand name</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.scrollStyle}>
        <View style={styles.brandIcon} />
        <Text> Brand name</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.scrollStyle}>
        <View style={styles.brandIcon} />
        <Text> Brand name</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollStyle: {
    marginTop: 20,
    width: 110,
    height: 104,
    backgroundColor: "red",
    shadowColor: "rgba(22, 60, 132, 0.16)",
    shadowOffset: {
      width: 0,
      height: 3
    },
    shadowRadius: 10,
    shadowOpacity: 1,
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 12,
    borderTopEndRadius: 12,
    borderTopLeftRadius: 90,
    alignItems: "center",
    marginRight: 17
  },
  brandIcon: {
    width: 76,
    height: 76,
    borderRadius: 38,
    backgroundColor: "blue",
    zIndex: 1,
    marginTop: -10
  }
});
