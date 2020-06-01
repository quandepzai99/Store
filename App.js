import React, {Component} from 'react';
import {View} from 'react-native';
import ChangePasswordScreen from './screens/ChangePasswordScreen';
import ChangePasswordScreenStep1 from "./screens/ChangePasswordScreenStep1"


class App extends Component {
    render() {
        return (
            <View>
                <ChangePasswordScreenStep1/>
            </View>
        );
    }
}

export default App;
