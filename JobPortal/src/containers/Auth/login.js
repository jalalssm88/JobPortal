import React, { Component } from 'react';
import {View, Text, Image, TextInput, TouchableOpacity, AsyncStorage} from 'react-native';
import { Spinner } from 'native-base';
import Feather from 'react-native-vector-icons/Feather';
import styles from './Style'
import { AuthActions } from '../../store/actions';
import { connect } from "react-redux";
import NavigationServices from '../../services/NavigationServices'

// import { connect } from "react-redux";
// import NavigationServices from "../../services/NavigationServices";


class LoginScreen extends React.Component {
    constructor(props){
        super(props)
        this.state={
            email:'',
            password:'',
            loader:true
        }
        this.getUser();
    }

    getUser = () => {
        console.log('async storage', AsyncStorage.getItem('user'))
        AsyncStorage.getItem("user").then((user) => {
            console.log('usrrrrrrrrrrr', user)
            if (user) {
                let parsedData = JSON.parse(user);
                console.log('i am in user activeeee', parsedData)

                this.props.logins(parsedData)
                if(parsedData.role == "student"){
                    NavigationServices.reset("TabsStack2")
                }else{
                    NavigationServices.reset("TabsStack1")
                }
            }else{
                this.setState({
                loader:false
                })
            }
        })
    }


    loginUser =() => {
        this.props.loginUser({email:this.state.email, password:this.state.password})
    }

    gotoSignup = () =>{
        this.props.navigation.navigate('SignupScreen')
    }
    render() {
        const { isLoading } = this.props
        return (
            <View style={styles.formContainer}>
                <View style={[styles.logoContainer, {marginBottom:20, marginTop:10}]}>
                    <Image source={(require('../../images/Icons/Job_portal_logo.png'))} style={{width:150, height:80}}/>
                </View>
                <TextInput
                    style={styles.textInput}
                    placeholder="Email"
                    onChangeText={(email) => this.setState({email})}
                    value={this.state.email}
                />
                <TextInput
                    style={styles.textInput}
                    placeholder="Password"
                    onChangeText={(password) => this.setState({password})}
                    value={this.state.password}
                />
                <TouchableOpacity onPress={this.loginUser} style={styles.buttons}>
                    {
                        isLoading?<Spinner color="white" size={30}/>:
                        <Text style={{color:"white"}}>Login</Text>
                    }
                </TouchableOpacity>
                    <Text style={{marginTop:50, marginBottom:10}}>Dont have account? </Text>
                <TouchableOpacity onPress={this.gotoSignup} style={styles.buttons}>
                    <Text style={{color:"white"}}>Create new</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const mapStateToProps = (state) => {
    console.log('mapstattoprops in signup component', state)
    return {
        isLoading:state.Auth.loginLoader,
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        loginUser: (payload) => dispatch(AuthActions.loginUser(payload)),
        logins:payload => dispatch( {type: AuthActions.VERIFY_CODE_SUCCESS, payload})
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen);