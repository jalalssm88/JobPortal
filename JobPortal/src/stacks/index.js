import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from "react-navigation";
import { View, Text } from 'react-native';
import AuthStack from './Auth/AuthStack';
import TabsStack1 from './Company/TabsStack1';
import TabsStack2 from './Student/TabsStack2';
import { JPHeader } from '../components/'
import ProfileStack from './Student/ProfileStack'


//Main Stack
const MainStack = createStackNavigator({
    ...AuthStack,
    TabsStack1:{screen:TabsStack1,navigationOptions:{
        header: <JPHeader />
    }},
    TabsStack2:{screen:TabsStack2,navigationOptions:{
        header: <JPHeader bodyText={<View><Text style={{color:'white', fontWeight:'bold', fontSize:18}}>Jop Portal App</Text></View>} />
    }},
    ...ProfileStack,


}, {
        // headerMode: "none",
        // initialRouteName: "TabsStack"
    })

export default createAppContainer(MainStack)