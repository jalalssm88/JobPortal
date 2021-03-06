import React from "react";
import { Text, View } from 'react-native'
import { JPHeader, AddProfileScreen } from '../../components/';
import { MyjobsScreen } from '../../containers/';
import Feather from 'react-native-vector-icons/Feather';

//Profile Stack
const ProfileStack = {
    AddProfileScreen: {
        screen: AddProfileScreen,
        navigationOptions: ({ navigation }) => ({
            header: <JPHeader leftItem={<Feather onPress={()=>{navigation.goBack(null)}} name="arrow-left" size={25} color="white"/>} 
            bodyText={<Text style={{fontSize:15, color:"#fff"}}>{navigation.state.params}</Text>} />
        }),
    },
    // MyjobsScreen: {
    //     screen: MyjobsScreen,
    //     navigationOptions: ({ navigation }) => ({
    //         header: <JPHeader bodyText={<Text style={{fontSize:15, color:"#fff"}}>My Jobs</Text>} />
    //     }),
    // },
}

export default ProfileStack
