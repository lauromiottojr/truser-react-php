import React, { Component } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import styles from '../config/styles';

export default class Main extends Component {

    static navigationOptions = {
        title: 'Input Users'
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
        fetch('http://192.168.0.108/tr_reactnative/UserDAO.php?function=insert', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name: TextInputName,
                email: TextInputEmail,
                phone_number: TextInputPhoneNumber,
            })
        }).then((response) => response.json())
            .then((responseJson) => {
                Alert.alert(responseJson);
                if (responseJson !== 'All fields is required!') {
                    this.props.navigation.navigate('ViewDataUser');
                }
            }).catch((error) => {
                console.error(error);
            })
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
                    <Text style={styles.TextStyle}>SAVE</Text>
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={.4} style={styles.TouchableOpacityStyle}
                    onPress={() => {
                        this.props.navigation.navigate('ViewDataUser');
                    }} >
                    <Text style={styles.TextStyle}>VIEW USERS</Text>
                </TouchableOpacity>
            </View>
        );
    }
}