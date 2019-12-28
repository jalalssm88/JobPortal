import React, { Component } from 'react';
import { View, Text , TouchableOpacity, AsyncStorage, TextInput} from 'react-native';
import styles from './Style';
import DatePicker from 'react-native-datepicker';
import moment from 'moment';
import Feather from 'react-native-vector-icons/Feather';


class AddProfileScreen extends Component {
    constructor(props){
        super(props);
        this.state = {
            title:'',
            country:'',
            city:'',
            company:'',
            start_date:'',
            end_date:''
        }
    }
   
    render(){
        return(
            <View style={styles.formContainer}>
                <TextInput
                    style={styles.textInput}
                    placeholder="Title"
                    onChangeText={(title) => this.setState({title})}
                    value={this.state.title}
                />
                <TextInput
                    style={styles.textInput}
                    placeholder="Country"
                    onChangeText={(title) => this.setState({title})}
                    value={this.state.title}
                />
                <TextInput
                    style={styles.textInput}
                    placeholder="City"
                    onChangeText={(title) => this.setState({title})}
                    value={this.state.title}
                />
                <TextInput
                    style={styles.textInput}
                    placeholder="Company"
                    onChangeText={(title) => this.setState({title})}
                    value={this.state.title}
                />
                <View style={{width:"100%", height:50, paddingTop:10, borderBottomWidth:1, borderColor:"#2B65EC"}}>
                    <View style={{paddingHorizontal:15, flexDirection:'row', justifyContent:'space-between'}}>
                        <View>
                            <DatePicker
                                date={this.state.end_date}
                                mode="date"
                                maxDate={moment().format('YYYY-MM-DD')}
                                showIcon={true}
                                value={this.state.start_date}
                                placeholder="Start date"
                                format='YYYY-MM-DD'
                                confirmBtnText="Confirm"
                                cancelBtnText="Cancel"
                                allowFontScaling={false}
                                customStyles={
                                {
                                    dateInput: {
                                    borderWidth: 0,
                                    alignItems: "flex-start",
                                    paddingLeft: 5,
                                    width: "80%",
                                    },
                                    placeholderText: {
                                    fontSize: 14,
                                    color: "#3F3F41",
                                    fontFamily:'Montserrat-Regular',
                                    },
                                    dateText: {
                                    fontSize: 14,
                                    color: "#3F3F41",
                                    fontFamily:"Montserrat-Regular",

                                    },
                                    datePicker: {
                                    marginTop: 10,
                                    borderTopWidth: 0
                                    }
                                }
                                }
                                iconComponent={
                                <Feather name="calendar" size={25} style={[styles.imageIconStyle, {left:350, bottom:5}]}></Feather>
                                }
                                onDateChange={(start_date) => { this.setState({ start_date }) }}
                            />
                        </View>
                    </View>
                </View>

                <View style={{width:"100%", height:60, paddingTop:10, borderBottomWidth:1, borderColor:"#2B65EC"}}>
                    <View style={{paddingHorizontal:15, flexDirection:'row', justifyContent:'space-between'}}>
                        <View>
                            <DatePicker
                                date={this.state.end_date}
                                mode="date"
                                maxDate={moment().format('YYYY-MM-DD')}
                                showIcon={true}
                                value={this.state.end_date}
                                placeholder="End date"
                                format='YYYY-MM-DD'
                                confirmBtnText="Confirm"
                                cancelBtnText="Cancel"
                                allowFontScaling={false}
                                customStyles={
                                {
                                    dateInput: {
                                    borderWidth: 0,
                                    alignItems: "flex-start",
                                    paddingLeft: 5,
                                    width: "80%",
                                    },
                                    placeholderText: {
                                    fontSize: 14,
                                    color: "#3F3F41",
                                    fontFamily:'Montserrat-Regular',
                                    },
                                    dateText: {
                                    fontSize: 14,
                                    color: "#3F3F41",
                                    fontFamily:"Montserrat-Regular",

                                    },
                                    datePicker: {
                                    marginTop: 10,
                                    borderTopWidth: 0
                                    }
                                }
                                }
                                iconComponent={
                                <Feather name="calendar" size={25} style={[styles.imageIconStyle, {left:350, bottom:5}]}></Feather>
                                }
                                onDateChange={(end_date) => { this.setState({ end_date }) }}
                            />
                        </View>
                    </View>
                </View>
            </View>
        );
    }
}

export default AddProfileScreen;