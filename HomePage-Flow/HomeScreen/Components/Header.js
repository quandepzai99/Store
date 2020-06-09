import React from "react";
import {
  ImageBackground,
  TextInput,
  View,
  TouchableOpacity,
  Image,
  Text
} from "react-native";
import styles from "./StyleSheet";

import images from "../../../Common/images";

export default function Header() {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={images.HeaderBackground}
        style={{ width: "100%", height: 176 }}>
        <View style={styles.searchField}>
          <Image source={images.icon_search} style={styles.searchIcon} />
          <TextInput
            style={styles.TextInput}
            placeholder={"Thương hiệu"}
            placeholderTextColor={"white"}
          />
        </View>
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
      <Image
        source={images.banner}
        style={styles.banner}
        resizeMethod="scale"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: "white"
  },
  searchField: {
    marginTop: 30,
    flexDirection: "row",
    alignItems: 'center',
    alignSelf: "center"
  },
  TextInput: {
    width: "90%",
    padding: 5,
    paddingLeft: 30,
    borderRadius: 20,
    backgroundColor: "rgba(114, 13, 93, 0.5)",
    borderWidth: 1,
    borderColor: "rgba(114, 13, 93, 1.0)",
    fontSize: 15,
    color: "white",
    opacity: 0.6
  },
  iconStyle: {
    position: "absolute",
    top: 10,
    left: 8
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
    borderRadius: 12,
    top: -80
  },
  searchIcon: { width: 15, height: 15, position: "absolute", margin: 8 }
});
