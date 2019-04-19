import React, { Component } from 'react';
import { View, Text } from 'react-native';
import styles from '../config/styles';

export default class ViewDataUser extends Component {

    static navigationOptions = {
        title: 'Data Users'
    };

    render() {
        return (
            <View style={styles.container}>
                <Text>FPO</Text>
            </View>
        );
    }
}


