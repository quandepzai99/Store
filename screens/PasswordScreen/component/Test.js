import React from 'react';
import { StyleSheet, Text, View, Button, TextInput, TouchableOpacity  } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {colors} from "../../../Styles";

const FORM_FIELDS = [

  {
    key: 'lastName',
    label: 'Last Name',
    required: true,
    component: TextInput,
    placeholder: 'Type your last name...',
    validators: {
      length: { minimum: 3 },

    },
  },

];

export default class Test extends React.Component {
  colorBack = ['red', 'green']

  constructor() {
    super();
    this.state = {
      colors: this.colorButton,

    };
  }

  handleKeyup = () => {
    console.log('aaa')

  }
  // GetValueFunction = (ValueHolder) =>{
  //
  //   const colors = ValueHolder.length.toString() ;
  //
  //   this.setState({textValue : colors}) ;
  //
  // }
  renderColors() {
  }

  render() {
    return (
      <View style={styles.MainContainer}
            buttonColor="#039BE5"
            buttonType="outline"
      >

        <TextInput

          onKeyPress={this.handleKeyup}
          style={styles.TextInputStyle}
        />

        <TouchableOpacity title={'Login'}
                // disabled={!this.state.isFormValid}

        >
          <View style={styles.box}>
            <AntDesign name={'right'} size={25} color={colors.velvet} />
          </View>
        </TouchableOpacity>
          {/*<AntDesign name={'left'} size={30} color={this.state.color}/>*/}


      </View>
    );
  }
}

const styles = StyleSheet.create({
  TextInputStyle: {

  }
});
