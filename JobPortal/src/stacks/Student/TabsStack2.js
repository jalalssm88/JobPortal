import React from "react";
import { HomeScreen } from '../../containers/'
import Feather from 'react-native-vector-icons/Feather';
import { createBottomTabNavigator } from 'react-navigation-tabs';

const TabsStack2 = createBottomTabNavigator({
    HomeScreen: { screen: HomeScreen,
    navigationOptions : {
      tabBarLabel: 'Home',
      labeled: true,
      tabBarIcon: ({ tintColor }) => (
        <Feather style={{marginTop:8}} name='home' size={25} color={tintColor}></Feather>
      )
    }
   },
},
  {
    // initialRouteName: 'HOME',
    tabBarOptions: {
      activeTintColor: '#fff',
      inactiveTintColor:'#5D14B1',
      showLabel:false,
      labelStyle: {
        fontSize: 12,
        marginBottom:5,
        fontFamily:'Montserrat-SemiBold'
      },
      style: {
        backgroundColor: '#8721FD',
        borderTopRightRadius:15,
        borderTopLeftRadius:15
      },
    }
  }
)
export default TabsStack2