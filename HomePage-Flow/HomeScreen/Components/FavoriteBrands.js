import React from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  FlatList,
  Dimensions
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
  },
    {
        image: images.
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
          marginLeft: 16
        }}>
        Thương hiệu yêu thích của bạn
      </Text>
      <FlatList
        horizontal={true}
        data={brands}
        renderItem={Item}
        style={{
          padding: 10
        }}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  scrollStyle: {
    marginTop: 20,
    width: 112,
    height: 104,
    shadowColor: "rgba(22, 60, 132, 0.16)",
    shadowOffset: {
      width: 0,
      height: 3
    },
    shadowRadius: 10,
    shadowOpacity: 1,
    alignItems: "center"
  }
});
