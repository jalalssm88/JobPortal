import React, { Component } from 'react';
import { View, Text , TouchableOpacity, AsyncStorage, TextInput, Dimensions, Picker} from 'react-native';
import styles from './Style';
import DatePicker from 'react-native-datepicker';
import moment from 'moment';
import Feather from 'react-native-vector-icons/Feather';
import {JPButton} from '../JPButton/'
const { height, width } = Dimensions.get("window");
import SwitchToggle from 'react-native-switch-toggle';
import {connect} from 'react-redux'
import { ProfileActions } from '../../store/actions';



class AddProfileScreen extends Component {
    constructor(props){
        super(props);
        this.state = {
            job_title:'',
            company:'',
            institude:'',
            degree_title:'',
            field:'',
            start_date:'',
            end_date:'',
            date:'',
            is_working:false,
            skills:'',
            skill_experience:'',
            language:'',
            language_level:''
        }
    }

    toggleHandler = ()=> {
        this.setState({
            is_working:!this.state.is_working,
        })
    }

    add_profiles = (type)=> {
        console.log('type', type)
        const {job_title, company,start_date, end_date, is_working, institude, degree_title, field, skills, skill_experience, language, language_level} = this.state
        if(type == "Add Experience"){
           this.props.addExperience({job_title:job_title, company:company, is_working:is_working, start_date:start_date, end_date:end_date})
        }else if(type == "Add Education"){
            this.props.addEducation({institude:institude, degree_title:degree_title, field:field, end_date:end_date})
        }else if(type == "Add Skills"){
            this.props.addSkills({skill:skills, skill_experience:skill_experience})
        }else if(type == "Add Language"){
            this.props.addLanguage({language:language, language_level:language_level})
        }
    }
   
    render(){
        const {params} = this.props.navigation.state;
        const {is_working} = this.state
        console.log('params', params)
        return(
            <View style={styles.formContainer}>
                <View style={{height:height-140}}>
                    {
                        params == "Add Experience"?
                        <View>
                            <TextInput
                                style={styles.textInput}
                                placeholder="Title"
                                onChangeText={(job_title) => this.setState({job_title})}
                                value={this.state.job_title}
                            />
                            <TextInput
                                style={styles.textInput}
                                placeholder="Company"
                                onChangeText={(company) => this.setState({company})}
                                value={this.state.company}
                            />
                        </View>
                        :params == "Add Education"?
                        <View>
                            <TextInput
                                style={styles.textInput}
                                placeholder="Institude"
                                onChangeText={(institude) => this.setState({institude})}
                                value={this.state.institude}
                            />
                            <TextInput
                                style={styles.textInput}
                                placeholder="Gegree Title"
                                onChangeText={(degree_title) => this.setState({degree_title})}
                                value={this.state.degree_title}
                            />
                            <TextInput
                                style={styles.textInput}
                                placeholder="Field of Study"
                                onChangeText={(field) => this.setState({field})}
                                value={this.state.field}
                            />
                        </View>
                        :
                        <View></View>
                    }
                    {
                        params != "Add Skills" && params !=="Add Language"?
                        <View>
                            {
                                params == "Add Experience"?
                                <View>
                                   <View style={styles.textInput}>
                                        <View style={{flexDirection:'row', justifyContent:'space-between'}}>
                                            <Text style={{fontSize:16, color:'gray'}}>Currently work here</Text>
                                            <View style={{ width: '15%', }}>
                                                <SwitchToggle
                                                    containerStyle={styles.toggleButtonContainer}
                                                    circleStyle={styles.toggleButtonCircle}
                                                    switchOn={this.state.is_working}
                                                    backgroundColorOn='#82a4fa'
                                                    circleColorOn='#202ae6'
                                                    backgroundColorOff='gray'
                                                    circleColorOff='#d6d6d6'
                                                    onPress={this.toggleHandler}
                                                />
                                            </View>
                                        </View>
                                   </View>
                                    <DatePicker style={{width:"100%", borderBottomWidth:1, borderColor:'#2B65EC', marginBottom:20}}
                                        date={this.state.start_date} mode="date" maxDate={moment().format('YYYY-MM-DD')} value={this.state.start_date}
                                        placeholder="Start date" format='YYYY-MM-DD' confirmBtnText="Confirm" cancelBtnText="Cancel" showIcon={false} allowFontScaling={false}
                                        customStyles={{
                                            dateInput: {
                                                borderWidth: 0,
                                                alignItems: "flex-start",
                                                paddingLeft: 8,
                                            },
                                            placeholderText: {
                                                fontSize: 16,
                                                color: "gray",
                                                fontFamily:'Montserrat-Regular',
                                            },
                                            dateText: {
                                                fontSize: 16,
                                                color: "#3F3F41",
                                            },
                                            datePicker: {
                                                marginTop: 10,
                                                borderTopWidth: 0
                                            }
                                        }}
                                        onDateChange={(start_date) => { this.setState({ start_date }) }}
                                    />
                                    {
                                        !is_working?
                                        <DatePicker style={{width:"100%", borderBottomWidth:1, borderColor:'#2B65EC', marginBottom:20}}
                                            date={this.state.end_date} mode="date" maxDate={moment().format('YYYY-MM-DD')} value={this.state.end_date}
                                            placeholder="End date" format='YYYY-MM-DD' confirmBtnText="Confirm" cancelBtnText="Cancel" showIcon={false} allowFontScaling={false}
                                            customStyles={{
                                                dateInput: {
                                                    borderWidth: 0,
                                                    alignItems: "flex-start",
                                                    paddingLeft: 8,
                                                },
                                                placeholderText: {
                                                    fontSize: 16,
                                                    color: "gray",
                                                    fontFamily:'Montserrat-Regular',
                                                },
                                                dateText: {
                                                    fontSize: 16,
                                                    color: "#3F3F41",
                                                },
                                                datePicker: {
                                                    marginTop: 10,
                                                    borderTopWidth: 0
                                                }
                                            }}
                                            onDateChange={(end_date) => { this.setState({ end_date }) }}
                                        />:<View></View>
                                    }
                                </View>:
                                <View>
                                    <DatePicker style={{width:"100%", borderBottomWidth:1, borderColor:'#2B65EC', marginBottom:20}}
                                        date={this.state.end_date} mode="date" maxDate={moment().format('YYYY-MM-DD')} value={this.state.end_date}
                                        placeholder="End date" format='YYYY-MM-DD' confirmBtnText="Confirm" cancelBtnText="Cancel" showIcon={false} allowFontScaling={false}
                                        customStyles={{
                                            dateInput: {
                                                borderWidth: 0,
                                                alignItems: "flex-start",
                                                paddingLeft: 8,
                                            },
                                            placeholderText: {
                                                fontSize: 16,
                                                color: "gray",
                                                fontFamily:'Montserrat-Regular',
                                            },
                                            dateText: {
                                                fontSize: 16,
                                                color: "#3F3F41",
                                            },
                                            datePicker: {
                                                marginTop: 10,
                                                borderTopWidth: 0
                                            }
                                        }}
                                        onDateChange={(end_date) => { this.setState({ end_date }) }}
                                    />
                                </View>
                            }
                        </View>:
                        <View></View>
                    }
                    {
                        params == "Add Skills"?
                        <View>
                            <TextInput
                                style={styles.textInput}
                                placeholder="Add Skill"
                                onChangeText={(skills) => this.setState({skills})}
                                value={this.state.skills}
                            />
                            <TextInput
                                style={styles.textInput}
                                placeholder="Experience Year"
                                onChangeText={(skill_experience) => this.setState({skill_experience})}
                                value={this.state.skill_experience}
                            />
                        </View>:
                        params == "Add Language"?
                        <View>
                            <TextInput
                                style={styles.textInput}
                                placeholder="Add Language"
                                onChangeText={(language) => this.setState({language})}
                                value={this.state.language}
                            />
                            <TextInput
                                style={styles.textInput}
                                placeholder="level"
                                onChangeText={(language_level) => this.setState({language_level})}
                                value={this.state.language_level}
                            />
                        </View>:
                        <View></View>
                    }
                    
                </View>
                <JPButton onPress={()=>{
                    this.add_profiles(params)
                }} buttonText="Save"  extraButtonStyles={{}}/>
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
        addExperience:(payload)=> dispatch(ProfileActions.addExperience(payload)),
        addEducation:(payload)=> dispatch(ProfileActions.addEducation(payload)),
        addSkills:(payload)=> dispatch(ProfileActions.addSkills(payload)),
        addLanguage:(payload)=> dispatch(ProfileActions.addLanguage(payload))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddProfileScreen);
