import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image
} from 'react-native';
export default class FourthPage extends Component<Props> {
    static navigationOptions = {
        tabBarLabel: '页面4',
        tabBarIcon:({ tintColor }) => (
            <Image
                source={require('../resources/labelIcon/devices.png')}
                style={[{width: 26,height:26},{tintColor:tintColor}]}
            />
        ),
    };
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>
                    This is Fourth Page!
                </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    textView: {
        fontSize: 16,
        textAlign: 'center',
        margin: 10,
        color:'red'
    },
});