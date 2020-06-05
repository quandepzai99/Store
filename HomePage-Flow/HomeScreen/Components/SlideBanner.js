import React, {Component} from 'react';
import {View, StyleSheet, Text, FlatList, TouchableOpacity, SafeAreaView, Image} from "react-native";
import {colors} from "../../../Styles";
import images from "../../../Common/images";

const tempData = [
  {
    id: 1,
    image: images.banner1,
    desc: '[Hot] Lorem Ipsum is simply dummy text of the printing and typesetting industry…',
    name: 'UrBox'
  },
  {
    id: 2,
    image: images.banner1,
    desc: '[Hot] Lorem Ipsum is simply dummy text of the printing and typesetting industry…',
    name: 'quan'
  },
  {
    id: 3,
    image: images.banner1,
    desc: '[Hot] Lorem Ipsum is simply dummy text of the printing and typesetting industry…',
    name: 'quan'
  },
]
export default class SlideBanner extends Component {

 _renderItem = ({item}) => {

    return(
      <TouchableOpacity style={styles.btnBanner}>
        <View >
          <Image source={item.image} style={{borderRadius: 12}}/>
          <Text>{item.desc}</Text>
          <Text>{item.name}</Text>
        </View>
      </TouchableOpacity>
    )
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>
          Tin tức <Text style={{color: colors.tangerine, fontWeight: 'bold', fontSize: 24}}>nổi bật</Text>
        </Text>
        <View style={{height: 300}}>
          <FlatList
            data={tempData}
            renderItem={this._renderItem}
            horizontal
            showsHorizontalScrollIndicator={false}
            keyExtractor={item => item.name}
            keybroardShouldPersisTaps={'always'}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    top: 33
  },
  title: {
    marginLeft: 16,
    fontFamily: "Roboto",
    fontSize: 24,
    lineHeight: 26,
    letterSpacing: 0,
    color: colors.velvet
  },
  btnBanner: {
    top: 50,
    borderRadius: 12,
    marginHorizontal: 16,
    alignItems: 'center',
    width: 368,
    height: 248,
    backgroundColor: "#ffffff",
    shadowColor: "rgba(22, 60, 132, 0.16)",
    shadowOffset: {
      width: 0,
      height: 10
    },
    shadowRadius: 10,
    shadowOpacity: 1,
    elevation: 5
  }
})
