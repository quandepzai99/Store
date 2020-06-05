import React, { Component } from "react";
import { View, StatusBar } from "react-native";
import Header from "../PasswordScreen/component/Header";
import Form from "./component/Form";
import Chat from "./component/Chat";

class index extends Component {
  constructor(props) {
    super(props);
    this.state = { lang: "vi" };
  }
  render() {
    return (
      <View>
        <StatusBar barStyle={"light-content"} />
        <Header lang={lang} />
        <Form />
        <Chat />
      </View>
    );
  }
  onChangeLang = () => {
    const { lang } = this.state;
    const newLang = lang === "en" ? "vi" : "en";

    this.setState({
      lang: newLang
    });
  };
}

export default index;
