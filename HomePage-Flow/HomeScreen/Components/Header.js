import React from "react";
import {
  ImageBackground,
  TextInput,
  StyleSheet,
  View,
  TouchableOpacity,
  Image,
  Text, ScrollView,
} from 'react-native';
import images from "../../../Common/images";
import AntDesign from "react-native-vector-icons/AntDesign";
import colors from "../../../colors";
import ScrollViewBrands from "./Scroll_View_Brands"

export default function Header() {
  return (
    <View
      style={{
        flex: 1
      }}>
      <ImageBackground source={images.HeaderBackground} style={{ height: 220 }}>
        <TouchableOpacity style={styles.searchField}>
          <AntDesign
            name={"search1"}
            style={styles.iconStyle}
            size={16}
            color={"white"}
          />
          <TextInput
            style={styles.TextInput}
            placeholder={"         Thương hiệu"}
            placeholderTextColor={"white"}
          />
        </TouchableOpacity>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between"
          }}>
          <TouchableOpacity style={styles.iconBalanceWitness}>
            <View style={styles.bigWitness}>
              <View style={styles.smallWitness}>
                <Image source={images.witness} />
              </View>
            </View>
            <View style={styles.viewBalance}>
              <Text style={styles.textBalance}>20.00000</Text>
            </View>
          </TouchableOpacity>
          <View style={styles.viewAddCardTouch}>
            <TouchableOpacity style={styles.buttonAddCardTouch}>
              <Image source={images.cross} />
              <Text style={styles.textAddCard}>Nạp thẻ Urbox</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
      <View style={styles.banner}>
        <Image
          source={images.banner}
          style={{ width: 382, height: 160, borderRadius: 12 }}
        />
      </View>
      <View
        style={{
          marginLeft: 16,
          marginTop: 26
        }}>
        <Text
          style={{
            fontSize: 24,
            fontWeight: "normal",
            fontStyle: "normal",
            lineHeight: 24,
            letterSpacing: 0,
            textAlign: "left",
            color : colors.velvet
          }}
          >
          Thương hiệu yêu thích của bạn
        </Text>
        <ScrollViewBrands/>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  TextInput: {
    marginRight: 16,
    width: 382,
    height: 32,
    marginLeft: 16,
    borderRadius: 20,
    backgroundColor: "rgba(114, 13, 93, 0.5)",
    borderStyle: "solid",
    borderWidth: 1,
    borderColor: "rgba(114, 13, 93, 1.0)",
    fontSize: 15,
    color: "white"
  },
  searchField: {
    marginTop: 30
  },
  iconStyle: {
    bottom: -25,
    left: 30,
    zIndex: 1,
    width: 16,
    height: 16
  },
  iconBalanceWitness: {
    marginLeft: 16,
    marginTop: 20,
    flexDirection: "row"
  },
  bigWitness: {
    width: 32,
    height: 32,
    opacity: 0.7,
    backgroundColor: "rgba(114, 13, 93, 0.5)",
    borderRadius: 24,
    alignItems: "center",
    justifyContent: "center"
  },
  smallWitness: {
    width: 24,
    height: 24,
    borderRadius: 24,
    backgroundColor: "rgba(114, 20, 100, 1.0)",
    alignItems: "center",
    justifyContent: "center"
  },
  viewBalance: {
    marginLeft: 8,
    height: 38,
    alignItems: "center",
    justifyContent: "center"
  },
  textBalance: {
    fontSize: 32,
    fontWeight: "bold",
    fontStyle: "normal",
    lineHeight: 32,
    letterSpacing: 0,
    textAlign: "left",
    alignItems: "center",
    justifyContent: "center",
    color: colors.golden
  },
  viewAddCardTouch: {
    height: 32,
    borderRadius: 16,
    backgroundColor: "rgba(247, 190, 0, 0.2)",
    borderStyle: "solid",
    borderWidth: 1,
    borderColor: colors.golden,
    marginTop: 20,
    marginRight: 16,
    alignItems: "center",
    justifyContent: "center"
  },
  buttonAddCardTouch: {
    flexDirection: "row",
    marginTop: 0,
    padding: 6,
    alignItems: "center",
    justifyContent: "center"
  },
  textAddCard: {
    fontSize: 12,
    fontStyle: "normal",
    lineHeight: 14,
    letterSpacing: 0,
    textAlign: "left",
    color: colors.golden,
    padding: 5
  },
  banner: {
    marginLeft: 16,
    marginRight: 16,
    zIndex: 1,
    width: 382,
    height: 160,
    borderRadius: 12,
    backgroundColor: "#ffffff",
    shadowColor: "rgba(22, 60, 132, 0.16)",
    shadowOffset: {
      width: 0,
      height: 3
    },
    shadowRadius: 10,
    shadowOpacity: 1,
    marginTop: -70
  }
});
