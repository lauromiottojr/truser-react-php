import React, { Component } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import styles from '../config/styles';

export default class UpdateDataUser extends Component {

    static navigationOptions = {
        title: 'Update Users',
    };

    constructor(props) {
        super(props)
        this.state = {
            TextInputId: this.props.navigation.state.params.id,
            TextInputName: this.props.navigation.state.params.name,
            TextInputEmail: this.props.navigation.state.params.email,
            TextInputPhoneNumber: this.props.navigation.state.params.phone_number,
        };
    }

    // componentDidMount() {
    //     this.setState({
    //         TextInputId: this.props.navigation.state.params.id,
    //         TextInputName: this.props.navigation.state.params.name,
    //         TextInputEmail: this.props.navigation.state.params.email,
    //         TextInputPhoneNumber: this.props.navigation.state.params.phone_number,
    //     })
    // };

    UpdateUsers = () => {
        fetch('http://192.168.0.108/tr_reactnative/update.php', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                id: this.state.TextInputId,
                name: this.state.TextInputName,
                email: this.state.TextInputEmail,
                phone_number: this.state.TextInputPhoneNumber,
            })
        }).then((response) => response.json())
            .then((responseJson) => {
                Alert.alert(responseJson);
            }).catch((error) => {
                console.error(error);
            })
        this.props.navigation.navigate('ViewDataUser');
    };

    DeleteUsers = () => {
        fetch('http://192.168.0.108/tr_reactnative/delete.php', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                id: this.state.TextInputId
            })
        }).then((response) => response.json())
            .then((responseJson) => {
                Alert.alert(responseJson);
            }).catch((error) => {
                console.error(error);
            })
        this.props.navigation.navigate('ViewDataUser');
    };

    render() {
        return (
            <View style={styles.container}>
                <TextInput placeholder='Enter name' value={this.state.TextInputName} onChangeText={TextInputValue => this.setState({
                    TextInputName: TextInputValue
                })} underlineColorAndroid='transparent' style={styles.TextInputStyle} />
                <TextInput placeholder='Enter email' value={this.state.TextInputEmail} onChangeText={TextInputValue => this.setState({
                    TextInputEmail: TextInputValue
                })} underlineColorAndroid='transparent' style={styles.TextInputStyle} />
                <TextInput placeholder='Enter phone number' value={this.state.TextInputPhoneNumber} onChangeText={TextInputValue => this.setState({
                    TextInputPhoneNumber: TextInputValue
                })} underlineColorAndroid='transparent' style={styles.TextInputStyle} />
                <TouchableOpacity activeOpacity={.4} style={styles.TouchableOpacityStyle} onPress={this.UpdateUsers} >
                    <Text style={styles.TextStyle}>UPDATE</Text>
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={.4} style={styles.TouchableOpacityStyle2}
                    onPress={this.DeleteUsers} >
                    <Text style={styles.TextStyle}>DELETE</Text>
                </TouchableOpacity>
            </View>
        );
    }
}


