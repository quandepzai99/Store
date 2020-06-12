import { Dimensions, StyleSheet } from "react-native";
import colors from "../../../colors";
const screenWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  searchField: {
    marginTop: 30,
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "center",
    top: 10
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
    left: 8
  },
  iconBalanceWitness: {
    alignItems: 'center',
    marginLeft: 16,
    justifyContent: 'center',
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
  textBalance: {
    fontSize: (32 / 736) * Dimensions.get("screen").height,
    fontWeight: "bold",
    fontStyle: "normal",
    lineHeight: (38 / 736) * Dimensions.get("screen").height,
    textAlign: "left",
    paddingLeft: 8,
    color: colors.golden,
    alignItems: "center",
    justifyContent: "center"
  },
  buttonAddCardTouch: {
    borderRadius: 18,
    backgroundColor: "rgba(247, 190, 0, 0.2)",
    borderStyle: "solid",
    borderWidth: 1,
    marginRight: 16,
    padding: 6,
    borderColor: colors.golden,
    flexDirection: "row",
    alignItems: "center",
  },
  textAddCard: {
    fontSize: 12,
    fontStyle: "normal",
    paddingRight: 6,
    paddingLeft: 6,
    textAlign: "left",
    color: colors.golden,

  },
  banner: {
    width: (screenWidth * 382) / 414,
    height: 150,
    borderRadius: 12,
    top: -70
  },
  searchIcon: { width: 15, height: 15, position: "absolute", margin: 8 }
});
export default styles;
