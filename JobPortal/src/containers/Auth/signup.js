import React, { Component } from 'react';
import {View, Text, ScrollView, Image, TextInput, Picker } from 'react-native';
import { Spinner } from 'native-base';
import Feather from 'react-native-vector-icons/Feather';
import styles from './Style'
import { connect } from "react-redux";
import { AuthActions } from '../../store/actions/';
import { JPButton } from '../../components/';
import { showToast } from '../../config/utills/'
// import RNPickerSelect from 'react-native-picker-select';


class SignupScreen extends Component {
    constructor(props){
        super(props);
            this.state = {
            name:'',
            email:'',
            password:'',
            role:'',
        }
    }

    createUser = ()=> {
        let { name, email, password, role } = this.state
        if (name && email && password && role) {
            let fullNameReg = /^([a-zA-Z]+|[a-zA-Z]+\s{1}[a-zA-Z]{1,}|[a-zA-Z]+\s{1}[a-zA-Z]{3,}\s{1}[a-zA-Z]{1,})$/;
            let reg = /^\w+([\.-]?\w+)*@{1}\w+([\.-]?\w+)*(\.[a-zA-Z]{2,3})+$/;
            if (fullNameReg.test(name)) {
                if (reg.test(email)) {
                    let dataToSend = {name:name, email:email, password:password, role:role}
                    this.props.createUser(dataToSend)
                }
                else {
                    showToast("Email is invalid")
                }
            }
            else {
                showToast("Full Name is invalid")
            }
        }
        else {
            showToast("All fields are required")
        }
    }
  
    render() {
        const { isLoading } = this.props
        return (
            <ScrollView style={styles.formContainer}>
                <View style={[styles.logoContainer, {marginBottom:20, marginTop:10}]}>
                    <Image source={(require('../../images/Icons/Job_portal_logo.png'))} style={{width:150, height:80}}/>
                </View>
                <TextInput
                    style={styles.textInput}
                    placeholder="Full Name"
                    onChangeText={(name) => this.setState({name})}
                    value={this.state.name}
                />
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
                <View style={styles.textInput}>
                    <Picker style={styles.pickerStyle} selectedValue={this.state.role} onValueChange={(role) =>  this.setState({role})} >  
                        <Picker.Item label="Select role" value={null} />  
                        <Picker.Item label="Student" value="student" />  
                        <Picker.Item label="Company" value="company" />  
                    </Picker>  
                </View>
                <JPButton onPress={this.createUser} buttonText="signup" extraButtonStyles={{borderColor:"#2B65EC"}} extraTextStyles={{color:"#fff"}} isLoading={isLoading} />
            </ScrollView>
        );
    }
}

const mapStateToProps = (state) => {
  console.log('mapstattoprops in signup component', state)
  return {
    isLoading:state.Auth.signupLoader,
  }
}
const mapDispatchToProps = (dispatch) => {
    return {
        createUser: (payload)=> dispatch(AuthActions.createUser(payload))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignupScreen);