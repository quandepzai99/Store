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
      <View style={styles.box}>
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
          justifyContent: "space-around",
        }}>
        <Text style={styles.title}>Mua sắm với UrBox</Text>
        <Text style={styles.xemTtC}>Xem tất cả</Text>
      </View>
      <View style={{ height: 300,
     }}>
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
    fontWeight: "normal",
    fontStyle: "normal",
    lineHeight: 30,
    letterSpacing: 0,
    textAlign: "left",
    color: colors.velvet,
    justifyContent: "center"
  },
  itemProduct: {
    justifyContent: "center",
    top: 10,
    width: (180 / 414) * Dimensions.get("screen").width,
    height: (264 / 736) * Dimensions.get("screen").height,
    paddingTop: 17,
    marginLeft: 16,
    borderRadius: 12,
    backgroundColor: "white"
  },
  desc: {
    fontSize: (15 / 736) * Dimensions.get("screen").height,
    lineHeight: (18 / 736) * Dimensions.get("screen").height,
    letterSpacing: 0,
    paddingTop: 15,
    paddingBottom :15,
    paddingLeft: 10,
    textAlign: "left",
    justifyContent: "center",
    color: colors.greyishBrown
  },
  price: {
    alignItems: "center",
    fontSize: 17,
    fontWeight: "500",
    fontStyle: "normal",
    lineHeight: 17,
    paddingLeft: 12,
    paddingTop: 15,
    color: colors.velvet
  },
  xemTtC: {
    fontSize: 15,
    fontWeight: "normal",
    fontStyle: "normal",
    lineHeight: 30,
    color: colors.deepSkyBlue,
    textAlign: "center"
  },
  box: {
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 12,
    flexDirection: "row",
    justifyContent: "space-between",
    alignContent: "center",
    backgroundColor: "white"},
  plus: {
    padding: 13,
    backgroundColor: colors.tangerine,
    borderTopLeftRadius: 12,
    borderBottomRightRadius: 12
  }
});
