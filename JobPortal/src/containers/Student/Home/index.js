import React, { Component } from 'react';
import { View, Text, FlatList, Image, TextInput } from 'react-native';
import styles from './Style';
import Feather from 'react-native-vector-icons/Feather';
import {connect} from 'react-redux';
import { Spinner } from 'native-base';
import { HomeAction } from '../../../store/actions';


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
        this.getAllJobs();
    }

    focusNextField = (nextInput) => {
        this.InputFocus[nextInput].focus();
    }
    InputFocus = (focusField) => {
        return focusField
    }
    getAllJobs = ()=>{
        this.props.getAllJobs()
    }

    render(){
        const {isLoading, all_posted_jobs } = this.props
        return(
            <View>
                {
                    isLoading?
                    <View><Spinner color="blue" /></View>
                    :
                    <View>
                        <FlatList 
                            data={all_posted_jobs}
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
                    </View>
                }
                
            </View>
        );
    }
}

const mapStateToProps = (state) => {
    return{
        all_posted_jobs:state.Home.all_posted_jobs,
        isLoading:state.Home.isLoading,
    }
}
const mapDispatchToProps = (dispatch) =>{
    return{
        getAllJobs:()=> dispatch(HomeAction.getAllJobs())
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);