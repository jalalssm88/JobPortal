import React from "react";
import { HomeScreen, SettingsScreen, ProfileScreen, MyjobsScreen } from '../../containers/'
import Feather from 'react-native-vector-icons/Feather';
import { createBottomTabNavigator } from 'react-navigation-tabs';

const TabsStack2 = createBottomTabNavigator({
  ProfileScreen: { screen: ProfileScreen,
    navigationOptions : {
      tabBarLabel: 'Profile',
      labeled: true,
      tabBarIcon: ({ tintColor }) => (
        <Feather style={{marginTop:8}} name='user' size={25} color={tintColor}></Feather>
      )
    }
   },
  HomeScreen: { screen: HomeScreen,
    navigationOptions : {
      tabBarLabel: 'Home',
      labeled: true,
      tabBarIcon: ({ tintColor }) => (
        <Feather style={{marginTop:8}} name='home' size={25} color={tintColor}></Feather>
      )
    }
   },
   MyjobsScreen: { screen: MyjobsScreen,
    navigationOptions : {
      tabBarLabel: 'Myjobs',
      labeled: true,
      tabBarIcon: ({ tintColor }) => (
        <Feather style={{marginTop:8}} name='bookmark' size={25} color={tintColor}></Feather>
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
    initialRouteName: 'HomeScreen',
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
export default TabsStack2