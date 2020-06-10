import React, {Component} from 'react';
import {View, StyleSheet, Text, Image, FlatList, TouchableOpacity} from "react-native";
import images from "../../../Common/images";
import {colors} from "../../../Styles";

const proData = [
  {
    image: images.pro1,
    desc: 'Tay Cầm Microsoft Xbox One S (Màu…',
    price: '200.000đ'
  },
  {
    image: images.pro2,
    desc: 'Tay Cầm Microsoft Xbox One S (Màu…',
    price: '200.000đ'
  },
  {
    image: images.pro2,
    desc: 'Tay Cầm Microsoft Xbox One S (Màu…',
    price: '200.000đ',
    plus: images
  }
]

function Item({item}) {
  return(
    <TouchableOpacity style={styles.itemProduct}>
      <Image source={item.image} />
      <Text style={styles.desc}>{item.desc}</Text>
      <View style={{flexDirection: 'row'}}>
        <Text style={styles.price}>{item.price}</Text>
        <TouchableOpacity style={styles.plus}><Image source={}/></TouchableOpacity>
      </View>
    </TouchableOpacity>
  )
}

export default function Product(){
  return (
    <View style={styles.container}>
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <Text style={styles.title}>Mua sắm với UrBox</Text>
        <Text style={styles.xemTtC}>Xem tất cả</Text>
      </View>
      <View style={{height: 280}}>
          <FlatList
            data={proData}
            renderItem={Item}
            horizontal
            showsHorizontalScrollIndicator={false}
            keybroardShouldPersisTaps={'always'}
          />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {

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
    alignItems: 'center',
    top: 10,
    width: 174,
    height: 264,
    paddingTop: 17,
    marginHorizontal: 17,
    borderRadius: 12,
    backgroundColor: "#ffffff",
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

    fontSize: 15,
    lineHeight: 20,
    letterSpacing: 0,
    padding: 15,
    textAlign: 'left',
    color: colors.greyishBrown
  },
  price: {
    fontSize: 17,
    fontWeight: "500",
    fontStyle: "normal",
    lineHeight: 18,
    letterSpacing: 0,
    textAlign: "left",
    color: colors.velvet
  },
  xemTtC: {
    fontSize: 15,
    fontWeight: "normal",
    fontStyle: "normal",
    lineHeight: 16,
    textAlign: "right",
    color: colors.deepSkyBlue
  },
  plus: {
    backgroundColor: colors.tangerine
  }
})
