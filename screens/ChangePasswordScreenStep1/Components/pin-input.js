import React from "react";
import { StyleSheet, Text, View } from "react-native";
import SmoothPinCodeInput from "react-native-smooth-pincode-input";

export default class PinInput extends React.Component {
  state = {
    code: "",
    password: ""
  };
  pinInput = React.createRef();

  _checkCode = code => {
    if (code != "123456") {
      this.pinInput.current.shake().then(() => this.setState({ code: "" }));
    }
  };

  render() {
    const { code, password } = this.state;
    return (
      <View style={styles.container}>
        <View style={styles.section}>
          <SmoothPinCodeInput
            password
            mask=<View
              style={{
                width: 20,
                height: 20,
                borderRadius: 34,
                backgroundColor: "rgb(114, 13, 93)"
              }}
            />
            cellSize={28}
            codeLength={6}
            value={password}
            onTextChange={password => this.setState({ password })}
            cellStyle={styles.cellStyle}
            autoFocus={true}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    alignItems: "center",
    justifyContent: "center",
    borderRadius : 12,
    borderColor: "gray",
    borderWidth: 1
  },
  section: {
    alignItems: "center",
    margin: 16
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 8
  },
  cellStyle: {
    borderRadius: 24,
    borderColor: "black",
    borderWidth: 1,
    marginLeft: 12
  }
});
