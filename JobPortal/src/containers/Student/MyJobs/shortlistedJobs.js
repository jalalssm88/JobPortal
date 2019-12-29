import React, { Component } from 'react';
import { View, Text , TouchableOpacity, AsyncStorage} from 'react-native';
import {MyjobsCard} from '../../../components';


class ShortlistedJobsScreen extends Component {
    constructor(props){
        super(props);
        this.state = {
            shortlisted_jobs:[
                {
                    id:1,
                    job_title:"React Developer",
                    company:"Code Avenue",
                    city:"karachi",
                    logo:"https://i.pinimg.com/280x280_RS/9e/2f/e1/9e2fe16835190b5a0420c2de94b0ff70.jpg",
                    shortlist_date:"Dec 23, 2019"
                }
            ]
        }
    }
    
    render(){
        return(
            <View>
                <MyjobsCard data={this.state.shortlisted_jobs} from="shortlisted_jobs" />
            </View>
        );
    }
}

export default ShortlistedJobsScreen;