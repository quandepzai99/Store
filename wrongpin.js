import React, {Component} from 'react';
import { Text , View, Image, StyleSheet } from 'react-native';
import backgroundpic from "./Picture/backgroundpic.jpg"

class WrongPin extends Component {
    render() {
        return (
            <View styles={{
                flex: 1,
                width: 200,
                height: 200
            }}>
                <Image source={backgroundpic}/>
            </View>
        )

    }
}
