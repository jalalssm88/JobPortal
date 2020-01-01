import React, { Component } from 'react';
import { View, Text , TouchableOpacity, AsyncStorage, TextInput, Dimensions, Picker} from 'react-native';
import styles from './Style';
import DatePicker from 'react-native-datepicker';
import moment from 'moment';
import Feather from 'react-native-vector-icons/Feather';
import {JPButton} from '../../../../components/'
const { height, width } = Dimensions.get("window");
import SwitchToggle from 'react-native-switch-toggle';
import {connect} from 'react-redux'
import { ProfileActions, DashboardAction } from '../../../../store/actions';



class PostJobScreen extends Component {
    constructor(props){
        super(props);
        this.state = {
            job_title:"",
            description:"",
            city:""
        }
    }

    postJob = ()=> {
        this.props.postJob(this.state)
    }
   
    render(){

        return(
            <View style={styles.formContainer}>
                <View style={{height:height-140}}>
                    <TextInput
                        style={styles.textInput}
                        placeholder="Job Title"
                        onChangeText={(job_title) => this.setState({job_title})}
                        value={this.state.job_title}
                    />
                    <TextInput
                        style={[styles.textInput, {height:130, justifyContent: "flex-start", textAlignVertical: 'top'}]}
                        placeholder="Job Description"
                        multiline={true}
                        numberOfLines={5}
                        onChangeText={(description) => this.setState({description})}
                        value={this.state.description}
                    />
                    <TextInput
                        style={styles.textInput}
                        placeholder="City"
                        placeholder="Title"
                        onChangeText={(city) => this.setState({city})}
                        value={this.state.city}
                    />
                </View>
                <JPButton onPress={()=>{
                    this.postJob()
                }} buttonText="Post"  extraButtonStyles={{}}/>
            </View>
        );
    }
}

const mapStateToProps = (state) =>{
    return {

    }
}
const mapDispatchToProps = (dispatch) =>{
    return {
        postJob:(payload)=> dispatch(DashboardAction.postJob(payload)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostJobScreen);
