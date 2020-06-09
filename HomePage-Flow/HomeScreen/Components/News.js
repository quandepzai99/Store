import React, {Component} from 'react';
import {View, StyleSheet, Text, FlatList, TouchableOpacity, SafeAreaView, Image} from "react-native";
import {colors} from "../../../Styles";
import images from "../../../Common/images";
import DataTimePicker from '@react-native-community/datetimepicker'

const tempData = [
  {
    id: 1,
    image: images.banner1,
    desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry…',
    name: 'UrBox',
    time: images.times
  },
  {
    id: 2,
    image: images.banner1,
    desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry…',
    name: 'UrBo',
    time: images.times
  },
  {
    id: 3,
    image: images.banner1,
    desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry…',
    name: 'UrBx',
    time: images.times
  },
]
export default class News extends Component {
  constructor(props) {
    super(props);
    this.state =
      {
      isVisible: false,
      date: new Date()
      }
  }


  showDatePicker = (date) => {
    this.setState({
      date
    })
  }

 _renderItem = ({item}) => {
const { isVisible, setVisible, setDate, } = this.state;
    return(
      <TouchableOpacity style={styles.btnBanner}>
        <View>
          <Image source={item.image} style={{borderRadius: 12}}/>
          <Text style={styles.desc}><Text style={{color: 'red',fontWeight: 'bold' }}>[Hot] </Text>{item.desc}</Text>
          <View style={styles.divider}>
            <Text style={styles.name}>{item.name}</Text>
            <Image source={item.time} />
            {/*<DataTimePicker*/}
            {/*  value={new Date()}*/}
            {/*  date={this.state.date}*/}
            {/*  onChange={this.showDatePicker}*/}
            {/*  mode={'date'}*/}
            {/*  testID="dateTimePicker"*/}
            {/*  format="DD-MM-YYYY"*/}
            {/*/>*/}
            <Text>
              09-06-2020
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    )
  }

  render() {
    // const { isVisible } = this.state
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
    top: 10
  },
  title: {
    marginLeft: 16,
    fontSize: 24,
    lineHeight: 26,
    letterSpacing: 0,
    color: colors.velvet
  },
  btnBanner: {
    top: 10,
    borderRadius: 12,
    marginHorizontal: 16,
    alignItems: 'center',
    width: 368,
    height: 260,
    backgroundColor: "#ffffff",
    shadowColor: "rgba(22, 60, 132, 0.16)",
    shadowOffset: {
      width: 0,
      height: 10
    },
    shadowRadius: 10,
    shadowOpacity: 1,
    elevation: 5
  },
  desc: {
    paddingVertical: 10,
    fontSize: 15,
    left: 12,
    fontWeight: "500",
    fontStyle: "normal",
    lineHeight: 20,
    letterSpacing: 0,
    color: colors.greyishBrown
  },
  name: {
    fontSize: 12,
    fontWeight: "500",
    fontStyle: "normal",
    textAlign: "left",
    color: colors.blueyGrey
  },
  divider: {
    paddingTop: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderColor: colors.paleGreyFour,
    borderTopWidth: 1,
    left: 10,
    marginRight: 20
  }
})
