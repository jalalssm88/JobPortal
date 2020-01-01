import React, { Component } from 'react';
import { View, Text, FlatList, Image, TextInput } from 'react-native';
import styles from './Style';
import Feather from 'react-native-vector-icons/Feather';


class HomeScreen extends Component {
    constructor(props){
        super(props);
        this.state = {
            jobs:[
                {
                    id:1,
                    job_title:"React Developer",
                    company:"Code Avenue",
                    city:"karachi",
                    logo:"https://i.pinimg.com/280x280_RS/9e/2f/e1/9e2fe16835190b5a0420c2de94b0ff70.jpg",
                    published_date:"Dec 23, 2019"
                },
                {
                    id:2,
                    job_title:"Frontend Developer",
                    company:"Ten perls",
                    city:"karachi",
                    published_date:"Dec 23, 2019"
                },
                {
                    id:3,
                    job_title:"Python developer",
                    company:"Soft tech",
                    city:"lahore",
                    published_date:"Dec 23, 2019"
                }
            ],
            first_name:'',
            last_name:'',
            email:'',
            city:'',
            country:''
        }
    }

    focusNextField = (nextInput) => {
        this.InputFocus[nextInput].focus();
    }
    InputFocus = (focusField) => {
        return focusField
    }


    render(){
        return(
            <View>
                <FlatList 
                    data={this.state.jobs}
                    renderItem = {({item})=>(
                        <View style={styles.jobListContainer}>
                            <View style={styles.logoContainer}>
                                {
                                    item.logo?
                                    <Image style={{height:60, width:80}} source={{uri:item.logo}} />:
                                    <Image style={{height:60, width:80}} source={require('../../../images/Icons/company_icon.png')} />
                                }
                            </View>
                            <View style={styles.infoContainer}>
                                <Text style={{fontSize:18, fontWeight:'bold'}}>{item.job_title}</Text>
                                <Text style={{fontSize:16}}>{item.company}</Text>
                                <View style={{flexDirection:'row'}}>
                                    <Text>{item.city}</Text> 
                                    <View style={{borderLeftWidth:2, borderColor:'gray', height:13, marginTop:4, marginLeft:5}}></View>
                                    <Text style={{marginLeft:5, color:"#306EFF"}}>{item.published_date}</Text>
                                </View>
                            </View>
                        </View>
                    )}
                    keyExtractor={item => item.id}
                />
                {/* <View style={{paddingHorizontal:20, marginTop:30}}>
                    <TextInput
                        style={styles.textInput}
                        placeholder="First name"
                        onChangeText={(first_name) => this.setState({first_name})}
                        value={this.state.first_name}
                        autoFocus = {true}
                        returnKeyType = { "next" }
                        onSubmitEditing={() => {
                            this.focusNextField('two'); 
                        }}
                        blurOnSubmit={false}
                    />
                    <TextInput
                        style={styles.textInput}
                        placeholder="Last name"
                        onChangeText={(last_name) => this.setState({last_name})}
                        value={this.state.last_name}
                        returnKeyType = { "next" }
                        ref={(input) => { this.InputFocus = input; }}
                        onSubmitEditing={() => { this.thirdTextInput.focus(); }}
                        blurOnSubmit={false}
                    />
                     <TextInput
                        style={styles.textInput}
                        placeholder="Email"
                        onChangeText={(email) => this.setState({email})}
                        value={this.state.email}
                        returnKeyType = { "next" }
                        ref={(input) => { this.thirdTextInput = input; }}
                        onSubmitEditing={() => { this.fourthTextInput.focus(); }}
                        blurOnSubmit={false}
                    />
                     <TextInput
                        style={styles.textInput}
                        placeholder="Country"
                        onChangeText={(country) => this.setState({country})}
                        value={this.state.country}
                        returnKeyType = { "next" }
                        ref={(input) => { this.fourthTextInput = input; }}
                        onSubmitEditing={() => { this.fifthTextInput.focus(); }}
                        blurOnSubmit={false}
                    />
                     <TextInput
                        style={styles.textInput}
                        placeholder="City"
                        onChangeText={(city) => this.setState({city})}
                        value={this.state.city}
                        ref={(input) => { this.fifthTextInput = input; }}
                    />
                </View> */}
            </View>
        );
    }
}

export default HomeScreen;