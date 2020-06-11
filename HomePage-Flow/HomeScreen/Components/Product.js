import React from "react";
import {
  View,
  StyleSheet,
  Text,
  Image,
  FlatList,
  TouchableOpacity,
  Dimensions
} from "react-native";
import images from "../../../Common/images";
import colors from "../../../colors";

const proData = [
  {
    image: images.pro1,
    desc: "Tay Cầm Microsoft Xbox One S (Màu…",
    price: "200.000đ",
    plus: images.plus1
  },
  {
    image: images.pro2,
    desc: "Tay Cầm Microsoft Xbox One S (Màu…",
    price: "200.000đ",
    plus: images.plus1
  },
  {
    image: images.pro2,
    desc: "Tay Cầm Microsoft Xbox One S (Màu…",
    price: "200.000đ",
    plus: images.plus1
  }
];

function Item({ item }) {
  return (
    <TouchableOpacity style={styles.itemProduct}>
      <Image source={item.image} style={{ alignSelf: "center" }} />
      <Text style={styles.desc}>{item.desc}</Text>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between"
        }}>
        <Text style={styles.price}>{item.price}</Text>
        <TouchableOpacity style={styles.plus}>
          <Image source={item.plus} />
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
}

export default function Product() {
  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center"
        }}>
        <Text style={styles.title}>Mua sắm với UrBox</Text>
        <Text style={styles.xemTtC}>Xem tất cả</Text>
      </View>
      <View style={{ height: 280 }}>
        <FlatList
          data={proData}
          renderItem={Item}
          horizontal
          showsHorizontalScrollIndicator={false}
          keybroardShouldPersisTaps={"always"}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  title: {
    fontSize: 24,
    left: 16,
    fontWeight: "normal",
    fontStyle: "normal",
    lineHeight: 30,
    letterSpacing: 0,
    textAlign: "left",
    color: colors.velvet
  },
  itemProduct: {
    justifyContent: "center",
    top: 10,
    width: (174 / 414) * Dimensions.get("screen").width,
    height: (264 / 736) * Dimensions.get("screen").height,
    paddingTop: 17,
    marginLeft: 16,
    borderRadius: 12,
    backgroundColor: "white",
    shadowColor: "rgba(22, 60, 132, 0.16)",
    shadowOffset: {
      width: 0,
      height: 3
    },
    shadowRadius: 10,
    shadowOpacity: 1,
    elevation: 5
  },
  desc: {
    fontSize: (15 / 736) * Dimensions.get("screen").height,
    lineHeight: (18 / 736) * Dimensions.get("screen").height,
    letterSpacing: 0,
    padding: 12,
    textAlign: "left",
    justifyContent: "center",
    color: colors.greyishBrown
  },
  price: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "white",
    fontSize: 17,
    fontWeight: "500",
    fontStyle: "normal",
    lineHeight: 17,
    paddingLeft: 12,
    paddingTop : 10,
    color: colors.velvet
  },
  xemTtC: {
    fontSize: 15,
    fontWeight: "normal",
    fontStyle: "normal",
    lineHeight: 16,
    right: 16,
    color: colors.deepSkyBlue
  },
  plus: {
    padding: 13,
    backgroundColor: colors.tangerine,
    borderTopLeftRadius: 12,
    borderBottomRightRadius: 12
  }
});
