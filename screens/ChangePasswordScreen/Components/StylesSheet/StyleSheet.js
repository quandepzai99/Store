import { StyleSheet } from "react-native";

const screenResetPw = StyleSheet.create({
  container: {
    marginLeft: 16,
    marginRight: 16,
    backgroundColor: "#ffffff",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3
    },
    shadowRadius: 20,
    shadowOpacity: 1,
    borderRadius: 24,
    marginTop: -50,
    justifyContent: "center",
    alignItems: "center"
  },
  textReLogin: {
    fontSize: 17,
    fontWeight: "normal",
    fontStyle: "normal",
    lineHeight: 20,
    letterSpacing: 0,
    textAlign: "center",
    color: "#ffffff",
    justifyContent: "center"
  },
  successChanged: {
    marginLeft: 16,
    marginRight: 16,
    backgroundColor: "#ffffff",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3
    },
    shadowRadius: 20,
    shadowOpacity: 1,
    borderRadius: 24,
    marginTop: -50
  },
  textSuccessfullChanged: {
    marginTop: 20,
    color: "green",
    fontSize: 20,
    fontWeight: "bold",
    fontStyle: "normal",
    lineHeight: 24,
    letterSpacing: 0,
    textAlign: "center"
  },
  boxReLogin: {
    marginTop: 25,
    borderBottomLeftRadius: 24,
    borderBottomRightRadius: 24,
    paddingTop: 17,
    paddingBottom: 17,
    width: "100%",
    backgroundColor: "rgba(142,22,117,1)"
  }
});

export default screenResetPw;
