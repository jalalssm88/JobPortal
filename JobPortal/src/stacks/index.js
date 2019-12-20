import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from "react-navigation";
import { View, Text } from 'react-native';
import AuthStack from './Auth/AuthStack';
import TabsStack1 from './Company/TabsStack1';
import TabsStack2 from './Student/TabsStack2';

//Main Stack
const MainStack = createStackNavigator({
    ...AuthStack,
    TabsStack1:{screen:TabsStack1,navigationOptions:{
        header: <View><Text>compay header</Text></View>
    }},
    // TabsStack2:{screen:TabsStack2,navigationOptions:{
    //     header: <View><Text>student header</Text></View>
    // }},

}, {
        // headerMode: "none",
        // initialRouteName: "TabsStack"
    })

export default createAppContainer(MainStack)