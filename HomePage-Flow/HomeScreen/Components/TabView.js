import React from "react";
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  FlatList,
  Image,
  TouchableOpacity,
  Dimensions
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
  return (
    <TouchableOpacity style={styles.scrollStyle}>
      <Image
        source={images.frame_item}
        style={{
          width: (110 / 414) * Dimensions.get("screen").width,
          height: 112
        }}
      />
      <View
        style={{
          width: 72,
          height: 72,
          borderRadius: 38,
          backgroundColor: "white",
          alignItems: "center",
          justifyContent: "center",
          top: -5,
          shadowColor: "rgba(22, 60, 132, 0.1)",
          shadowOffset: {
            width: 0,
            height: 3
          },
          shadowRadius: 10,
          shadowOpacity: 1,
          position: "absolute"
        }}>
        <Image
          resizeMode="contain"
          source={item.image}
          style={{ borderRadius: 38 }}
        />
      </View>
      <Text
        adjustsFontSizeToFit={true}
        allowFontScaling={true}
        style={{
          top: -40,
          textAlign: "left",
          fontSize: 12,
          fontWeight: "500",
          lineHeight: 16
        }}>
        {item.name}
      </Text>
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
    shadowColor: "rgba(22, 60, 132, 0.16)",
    shadowOffset: {
      width: 0,
      height: 3
    },
    shadowRadius: 10,
    shadowOpacity: 1,
    alignItems: "center",
  },
  tabView: {
    flex: 1,
    padding: 16,
    backgroundColor: "rgba(0,0,0,0.01)"
  }
});
