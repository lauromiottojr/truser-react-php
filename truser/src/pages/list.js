import React, { Component } from 'react';
import { View, ListView, Text, ActivityIndicator, Alert } from 'react-native';
import styles from '../config/styles';

export default class ViewDataUser extends Component {

    static navigationOptions = {
        title: 'Data Users',
    };

    constructor(props) {
        super(props)
        this.state = {
            isLoading: true
        }
    };

    componentDidMount() {
        return fetch('http://192.168.0.108/tr_reactnative/UserDAO.php?function=show')
            .then((response) => response.json())
            .then((responseJson) => {
                let ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 })
                this.setState({
                    isLoading: false,
                    dataSource: ds.cloneWithRows(responseJson)
                }, function () { })
            }).catch((error) => {
                console.error(error);
            })
    };

    Action_Click(id, name, email, phone_number) {
        this.props.navigation.navigate('UpdateDataUser', {
            id: id,
            name: name,
            email: email,
            phone_number: phone_number,
        })
    };

    ListViewItemsSeparator = () => {
        return (
            <View
                style={{
                    height: 2,
                    width: '100%',
                    backgroundColor: '#2196F3',
                }}
            />
        )
    }

    render() {
        if (this.state.isLoading) {
            return (
                <View style={{ flex: 1, paddingTop: 20 }}><ActivityIndicator /></View>
            )
        }
        return (
            <View style={styles.containerDataUsers}>
                <ListView
                    dataSource={this.state.dataSource}
                    renderSeparator={this.ListViewItemsSeparator}
                    renderRow={(rowData) =>
                        <Text style={styles.rowViewContainer} onPress={this.Action_Click.bind(this,
                            rowData.id,
                            rowData.name,
                            rowData.email,
                            rowData.phone_number,
                        )} >
                            {rowData.name}
                        </Text>
                    }
                />
            </View>
        );
    }
}


