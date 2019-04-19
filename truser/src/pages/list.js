import React, { Component } from 'react';
import { View, ListView, Text, ActivityIndicator } from 'react-native';
import styles from '../config/styles';

export default class ViewDataUser extends Component {

    static navigationOptions = {
        title: 'Data Users'
    };

    constructor(props) {
        super(props)
        this.state = {
            isLoading: true
        }
    };

    ListViewItemsSeparator = () => {
        return (
            <View
                style={{
                    height: 5,
                    width: '100%',
                    backgroundColor: '#2196F3',
                }}
            />
        )
    }

    render() {
        if (this.state.isLoading) {
            return (
                <View style={{ flex: 1, paddingTop: 20 }}><ActivityIndicator/></View>
            )
        }
        return (
            <View style={styles.container}>
                <ListView
                    dataSource={this.state.dataSource}
                    renderSeparator={this.ListViewItemsSeparator}
                    renderRow={(rowData) =>
                        <Text style = { styles.rowViewContainer } onPress = {this.Action_Click.bind()} ></Text>
                    }
                />
            </View>
        );
    }
}


