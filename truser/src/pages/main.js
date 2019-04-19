import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default class Main extends Component {

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.text}>Olá Mundo!</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fafafa',
    },
    text: {
        color: 'red',
        fontWeight: 'bold',
    }
});