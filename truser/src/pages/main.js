import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { StackNavigator } from 'react-navigation';

export default class InputUsers extends Component {

    static navigationOptions = {
        title: 'Input Users',
        headerStyle: {
            backgroundColor: 'black',
        },
        headerTintColor: '#FFF'
    };

    constructor(props) {
        super(props)
        this.state = {
            TextInputName: '',
            TextInputEmail: '',
            TextInputPhoneNumber: '',
        }
    }

    InsertUsers = () => {
        const { TextInputName } = this.state;
        const { TextInputEmail } = this.state;
        const { TextInputPhoneNumber } = this.state;
    };

    render() {
        return (
            <View style={styles.container}>
                <TextInput placeholder='Enter name' onChangeText={TextInputValue => this.setState({
                    TextInputName: TextInputValue
                })} underlineColorAndroid='transparent' style={styles.TextInputStyle} />
                <TextInput placeholder='Enter email' onChangeText={TextInputValue => this.setState({
                    TextInputEmail: TextInputValue
                })} underlineColorAndroid='transparent' style={styles.TextInputStyle} />
                <TextInput placeholder='Enter phone number' onChangeText={TextInputValue => this.setState({
                    TextInputPhoneNumber: TextInputValue
                })} underlineColorAndroid='transparent' style={styles.TextInputStyle} />
                <TouchableOpacity activeOpacity={.4} style={styles.TouchableOpacityStyle} onPress={this.InsertUsers} >
                    <Text style={styles.TextStyle}>Save</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        marginTop: 5,
    },
    TextInputStyle: {
        textAlign: 'center',
        marginTop: 20,
        marginBottom: 7,
        height: 40,
        width: '90%',
        borderWidth: 1,
        borderColor: '#FF5722',
        borderRadius: 5,
        fontSize: 15,
    },
    TextStyle: {
        color: '#fff',
        textAlign: 'center',
    },
    TouchableOpacityStyle: {
        paddingTop: 10,
        paddingBottom: 10,
        borderRadius: 5,
        marginBottom: 7,
        width: '90%',
        backgroundColor: '#00BCDA',
    },
});