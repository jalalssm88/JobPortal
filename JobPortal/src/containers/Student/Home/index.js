import React, { Component } from 'react';
import { View, Text } from 'react-native';

class HomeScreen extends Component {
    constructor(props){
        super(props);
        this.state = {

        }
    }
    render(){
        return(
            <View>
                <Text>Hello from student home screen</Text>
            </View>
        );
    }
}

export default HomeScreen;