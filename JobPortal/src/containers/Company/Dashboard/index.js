import React, { Component } from 'react';
import { View, Text } from 'react-native';

class DashboardScreen extends Component {
    constructor(props){
        super(props);
        this.state = {

        }
    }
    render(){
        return(
            <View>
                <Text>Hello from company dashboard</Text>
            </View>
        );
    }
}

export default DashboardScreen;