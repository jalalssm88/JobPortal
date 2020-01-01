import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import styles from './Style';
import {connect} from 'react-redux';
import { Spinner} from 'native-base'
import { DashboardAction } from '../../../store/actions';

class DashboardScreen extends Component {
    constructor(props){
        super(props);
        this.state = {

        }
        this.getJobs();
    }
    getJobs =()=> {
        this.props.getJobs();
    }
    render(){
        const {posted_jobs, isLoading} = this.props
        return(
            <View style={styles.mainContainer}>
                {
                    isLoading?
                    <View><Spinner color="blue" /></View>
                    :
                    <View>
                        <TouchableOpacity style={styles.countContainer}>
                            <View style={{height:50, paddingTop:10}}>
                                <Text style={{fontSize:20}}>Total Posted Jobs</Text>
                            </View>
                            <View style={{flexDirection:'row'}}>
                                <View style={{width:'50%', justifyContent:'center', alignItems:'center'}}>
                                    <Feather name="file-text" size={70} />
                                </View>
                                <View style={{width:'50%', justifyContent:'center', alignItems:'center'}}>
                                    <Text style={{fontSize:40, fontWeight:'bold'}}>{posted_jobs.length}</Text>
                                </View>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.countContainer}>
                            <View style={{height:50, paddingTop:10}}>
                                <Text style={{fontSize:20}}>Total Recieved Applications</Text>
                            </View>
                            <View style={{flexDirection:'row'}}>
                                <View style={{width:'50%', justifyContent:'center', alignItems:'center'}}>
                                    <Feather name="file-text" size={70} />
                                </View>
                                <View style={{width:'50%', justifyContent:'center', alignItems:'center'}}>
                                    <Text style={{fontSize:40, fontWeight:'bold'}}>10</Text>
                                </View>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={()=>{
                            this.props.navigation.navigate("PostJobScreen", "Post new Job")
                        }} style={{backgroundColor:"blue", height:50, width:50, borderRadius:50, alignItems:'center', justifyContent:"center", position:'absolute', right:5, top:620}}>
                            <Feather color="white" name="plus" size={30} />
                        </TouchableOpacity>

                    </View>
                }
                
            </View>
        );
    }
}

const mapStateToProps = (state)=> {
    return{
        posted_jobs:state.Dashboard.posted_jobs,
        isLoading:state.Dashboard.isLoading
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        getJobs:()=> dispatch(DashboardAction.getJobs()),
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(DashboardScreen);