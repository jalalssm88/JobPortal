import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './Style'
import AppliedJobsScreen from './appliedJobs';
import ShortlistedJobsScreen from './shortlistedJobs';
import RejectedJobsScreen from './rejectedJobs';

class MyjobsScreen extends Component {
    constructor(props){
        super(props);
        this.state = {
            active:'applied'
        }
    }
    render(){
        const {active} = this.state
        return(
            <View style={styles.Container}>
                <View style={styles.tabButtonContaoner}>
                    <View style={{width:'33.3%'}}>
                        <TouchableOpacity onPress={()=>{
                            this.setState({
                                active:"applied"
                            })
                        }} style={[styles.tabButton,active=="applied"?{borderBottomWidth:2, borderColor:"#dfe7f5"}:'']}>
                            <Text style={{color:'white', fontSize:16}}>Applied</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{width:'33.3%'}}>
                        <TouchableOpacity onPress={()=>{
                            this.setState({
                                active:"short_list"
                            })
                        }} style={[styles.tabButton,active=="short_list"?{borderBottomWidth:2, borderColor:"#dfe7f5"}:'']}>
                            <Text style={{color:'white', fontSize:16}}>Short listed</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{width:'33.3%'}}>
                        <TouchableOpacity onPress={()=>{
                            this.setState({
                                active:"rejected"
                            })
                        }} style={[styles.tabButton,active=="rejected"?{borderBottomWidth:2, borderColor:"#dfe7f5"}:'']}>
                            <Text style={{color:'white', fontSize:16}}>Rejected</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View>
                    {
                        active == "applied"?
                            <AppliedJobsScreen />:
                        active == "short_list"?
                            <ShortlistedJobsScreen />:
                        active == "rejected"?
                            <RejectedJobsScreen />:
                        <View></View>
                    }
                </View>
            </View>
        );
    }
}

export default MyjobsScreen;