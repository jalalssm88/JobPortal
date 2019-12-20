import React, { Component } from 'react';
import {View, Text, ScrollView, Image, TextInput, TouchableOpacity,Picker } from 'react-native';
import { Spinner } from 'native-base';
import Feather from 'react-native-vector-icons/Feather';
import styles from './Style'
import { connect } from "react-redux";
import { AuthActions } from '../../store/actions/';
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
        this.props.createUser(this.state)
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
                <TouchableOpacity onPress={this.createUser} style={styles.buttons}>
                    {
                        isLoading?
                        <Spinner color="red" size={25} />:
                        <Text style={{color:"white"}}>Create</Text>
                    }
                </TouchableOpacity>
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