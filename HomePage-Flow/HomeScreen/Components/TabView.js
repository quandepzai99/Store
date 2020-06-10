import React from "react";
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  FlatList,
  Image,
  TouchableOpacity
} from "react-native";

import ScrollableTabView, {
  ScrollableTabBar
} from "react-native-scrollable-tab-view";

import images from "../../../Common/images";

const brands = [
  {
    image: images.logo_urbox,
    name: "Urbox"
  },
  {
    image: images.logo_the_coffee_house,
    name: "The Coffee House"
  },
  {
    image: images.logo_mobifone,
    name: "Mobifone"
  }
];

function Item({ item }) {
  console.log(item);
  return (
    <TouchableOpacity style={styles.scrollStyle}>
      <View
        style={{
          width: 76,
          height: 76,
          borderRadius: 38,
          backgroundColor: "white",
          alignItems: "center",
          justifyContent: "center",
          top: -20,
          shadowColor: "rgba(22, 60, 132, 0.1)",
          shadowOffset: {
            width: 0,
            height: 3
          },
          shadowRadius: 10,
          shadowOpacity: 1
        }}>
        <Image
          resizeMode="contain"
          source={item.image}
          style={{ borderRadius: 38 }}
        />
      </View>

      <Text style={{ top: -15, textAlign: "left" }}>{item.name}</Text>
    </TouchableOpacity>
  );
}

function ItemList() {
  return (
    <FlatList
      horizontal={true}
      data={brands}
      renderItem={Item}
      style={{
        paddingBottom: 5
      }}
      keyExtractor={(item, index) => index.toString()}
    />
  );
}

export default function TabView() {
  return (
    <ScrollableTabView
      initialPage={0}
      renderTabBar={() => <ScrollableTabBar />}
      style={{ marginTop: 10 }}>
      <ScrollView tabLabel="Nổi bật" style={styles.tabView}>
        <ItemList />
      </ScrollView>
      <ScrollView tabLabel="Nổi bật" style={styles.tabView}>
        <ItemList />
      </ScrollView>
      <ScrollView tabLabel="Nổi bật" style={styles.tabView}>
        <ItemList />
      </ScrollView>
      <ScrollView tabLabel="Du Lịch" style={styles.tabView}>
        <ItemList />
      </ScrollView>

      <ScrollView tabLabel="Chiu" style={styles.tabView}>
        <ItemList />
      </ScrollView>
      <Text tabLabel={"Tab #1"}>
        <ItemList />
      </Text>
    </ScrollableTabView>
  );
}

const styles = StyleSheet.create({
  scrollStyle: {
    marginTop: 20,
    width: 110,
    height: 104,
    backgroundColor: "white",
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
    borderTopLeftRadius: 92,
    alignItems: "center",
    marginRight: 16
  },
  tabView: {
    flex: 1,
    padding: 16,
    backgroundColor: "rgba(0,0,0,0.01)"
  }
});
