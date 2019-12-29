import React, { Component } from 'react';
import {View, Text, Image, TextInput, TouchableOpacity, AsyncStorage, Dimensions} from 'react-native';
import { Spinner } from 'native-base';
import styles from './Style';
import { AuthActions } from '../../store/actions';
import { connect } from "react-redux";
import NavigationServices from '../../services/NavigationServices';
import {JPButton} from '../../components/';
const { height, width } = Dimensions.get("window");
import { showToast } from '../../config/utills';

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
        let { email, password } = this.state;
        if (email && password) {
            let reg = /^\w+([\.-]?\w+)*@{1}\w+([\.-]?\w+)*(\.[a-zA-Z]{2,3})+$/;
            if (reg.test(email)) {
                let dataToSend = {email:email, password:password}
                this.props.loginUser(dataToSend)
            }
            else {
                showToast("Email is invalid")
            }
        }
        else {
            showToast("All fields are required")
        }
    }

    gotoSignup = () =>{
        this.props.navigation.navigate('SignupScreen')
    }
    render() {
        const { isLoading } = this.props;
        console.log('isloading', isLoading)
        const { loader } = this.state;
        return (
            <View style={styles.formContainer}>
                {
                    loader?<View style={{width:"100%", height:height, paddingTop:300}}><Spinner color="#2B65EC" size={25} /></View>:
                    <View>
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
                        <JPButton onPress={this.loginUser} extraButtonStyles={{borderColor:"#2B65EC"}} extraTextStyles={{color:"#fff"}} isLoading={isLoading} buttonText="Login"/>
                        <Text style={{marginTop:50, marginBottom:10}}>Dont have account? </Text>
                        <JPButton onPress={this.gotoSignup} extraButtonStyles={{borderColor:"#2B65EC"}} extraTextStyles={{color:"#fff"}} buttonText="Create new"/>
                    </View>
                }
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