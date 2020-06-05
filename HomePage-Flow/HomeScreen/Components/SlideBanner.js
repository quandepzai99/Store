import React, {Component} from 'react';
import {View, StyleSheet, Text, FlatList, TouchableOpacity, SafeAreaView, Image} from "react-native";
import {colors} from "../../../Styles";
import images from "../../../Common/images";

const tempData = [
  {
    id: 1,
    image: '',
    name: 'quan'
  },
  {
    id: 2,
    image: '',
    name: 'quan'
  },
  {
    id: 3,
    image: '',
    name: 'quan'
  },
]
export default class SlideBanner extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

 _renderItem = ({item, index}) => {

    return(
      <View style={styles.btnBanner}>
        {/*<Image source={{uri: item.image}} />*/}
        <Text>{item.name}</Text>
      </View>
    )
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>
          Tin tức <Text style={{color: colors.tangerine, fontWeight: 'bold', fontSize: 24}}>nổi bật</Text>
        </Text>
        <View style={{padding: 32, height: 248}}>
          <FlatList
            data={tempData}
            renderItem={this._renderItem}
            horizontal={true}
            showHorizontalScrollIndicator={false}
            keyExtractor={item => item.name}

          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    top: 33
  },
  title: {
    marginLeft: 16,
    fontFamily: "Roboto",
    fontSize: 24,
    fontWeight: "normal",
    fontStyle: "normal",
    lineHeight: 26,
    letterSpacing: 0,
    color: colors.velvet
  },
  category: {

  }
})
