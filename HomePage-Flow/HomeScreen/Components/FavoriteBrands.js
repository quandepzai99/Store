import React from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  FlatList
} from "react-native";
import images from "../../../Common/images";
import colors from "../../../colors";
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
      <Text style={{ top: -10 }}>{item.name}</Text>
    </TouchableOpacity>
  );
}
export default function FavoriteBrands() {
  return (
    <View>
      <Text
        style={{
          fontSize: 24,
          fontWeight: "normal",
          fontStyle: "normal",
          lineHeight: 24,
          letterSpacing: 0,
          textAlign: "left",
          color: colors.velvet,
          marginLeft: 16,
        }}>
        Thương hiệu yêu thích của bạn
      </Text>
      <FlatList
        horizontal={true}
        data={brands}
        renderItem={Item}
        style={{
          marginLeft: 16,
          top: 10
        }}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
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
  }
});
