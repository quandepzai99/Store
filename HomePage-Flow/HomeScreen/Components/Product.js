import React, {Component} from 'react';
import {View, StyleSheet, Text, Image, FlatList, TouchableOpacity} from "react-native";
import images from "../../../Common/images";
import {colors} from "../../../Styles";

const proData = [
  {
    image: images.pro1,
    desc: 'quadepzai',
    price: '200.000đ'
  },
  {
    image: images.pro2,
    desc: 'quadepzai',
    price: '200.000đ'
  },
  {
    image: images.pro2,
    desc: 'quadepzai',
    price: '200.000đ'
  }
]

function Item({item}) {
  return(
    <TouchableOpacity style={styles.itemProduct}>
      <Image source={item.image} />
      <Text>{item.desc}</Text>
      <View>
        <Text>{item.price}</Text>
      </View>
    </TouchableOpacity>
  )
}

export default function Product(){
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Mua sắm với UrBox</Text>
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
    paddingHorizontal: 30,
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

})
