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
      <View
        style={{
          backgroundColor: "red",
          paddingLeft: 160,
          paddingRight: 160
        }}>
        <Image
          source={images.banner}
          style={styles.banner}
          resizeMethod="scale"
        />
      </View>
    </View>
  );
}
