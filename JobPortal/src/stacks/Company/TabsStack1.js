import React from "react";
import { DashboardScreen , SettingsScreen} from '../../containers/'
import Feather from 'react-native-vector-icons/Feather';
import { createBottomTabNavigator } from 'react-navigation-tabs';

const TabsStack1 = createBottomTabNavigator({
  DashboardScreen: { screen: DashboardScreen,
    navigationOptions : {
      tabBarLabel: 'Dashboard',
      labeled: true,
      tabBarIcon: ({ tintColor }) => (
        <Feather style={{marginTop:8}} name='grid' size={25} color={tintColor}></Feather>
      )
    }
  },
  SettingsScreen: { screen: SettingsScreen,
    navigationOptions : {
      tabBarLabel: 'settings',
      labeled: true,
      tabBarIcon: ({ tintColor }) => (
        <Feather style={{marginTop:8}} name='settings' size={25} color={tintColor}></Feather>
      )
    }
  },
},
  {
    initialRouteName: 'DashboardScreen',
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
        backgroundColor: '#2B65EC',
        borderTopRightRadius:15,
        borderTopLeftRadius:15
      },
    }
  }
)
export default TabsStack1