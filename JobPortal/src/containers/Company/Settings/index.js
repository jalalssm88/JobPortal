import React, { Component } from 'react';
import { View, Text , TouchableOpacity, AsyncStorage} from 'react-native';
import NavigationServices from '../../../services/NavigationServices'

class SettingsScreen extends Component {
    constructor(props){
        super(props);
        this.state = {

        }
    }
    logoutUser = ()=> {
        AsyncStorage.removeItem('user');
        NavigationServices.reset('LoginScreen');
    }
    render(){
        return(
            <View style={{paddingHorizontal:20}}>
                <Text>Hello from settings screen</Text>
                <TouchableOpacity onPress={this.logoutUser} style={{height:50, width:"100%", backgroundColor:"blue", justifyContent:"center", alignItems:"center",borderRadius:10}}>
                    <Text style={{color:"white", fontSize:18}}>Log out</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

export default SettingsScreen;