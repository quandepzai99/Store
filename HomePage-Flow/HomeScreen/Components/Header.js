import React from "react";
import {
  ImageBackground,
  TextInput,
  View,
  TouchableOpacity,
  Image,
  Text,
  Dimensions
} from "react-native";
import styles from "./StyleSheet";

import images from "../../../Common/images";

export default function Header() {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={images.HeaderBackground}
        style={{
          width: "100%",
          height: (220 / 736) * Dimensions.get("screen").height
        }}>
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
            width: "100%",
            flexDirection: "row",
            justifyContent: "space-between",
            marginTop: 25
          }}>
          <TouchableOpacity style={styles.iconBalanceWitness}>
            <View style={styles.bigWitness}>
              <View style={styles.smallWitness}>
                <Image source={images.witness} />
              </View>
            </View>
            <View style={{ alignSelf: "center" }}>
              <Text style={styles.textBalance}>2.400.000đ</Text>
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
