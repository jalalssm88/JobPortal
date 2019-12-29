import React, { Component } from 'react';
import { View, Text , FlatList, Image} from 'react-native';
import styles from './Style'

class MyjobsCard extends Component {
    render(){
        const {data, from} = this.props
        return(
            <View>
                <FlatList 
                    data={data}
                    renderItem = {({item})=>(
                        <View style={styles.jobListContainer}>
                            <View style={styles.logoContainer}>
                                {
                                    item.logo?
                                    <Image style={{height:60, width:80}} source={{uri:item.logo}} />:
                                    <Image style={{height:60, width:80}} source={require('../../images/Icons/company_icon.png')} />
                                }
                            </View>
                            <View style={styles.infoContainer}>
                                <Text style={{fontSize:18, fontWeight:'bold'}}>{item.job_title}</Text>
                                <Text style={{fontSize:16}}>{item.company}</Text>
                                <View style={{flexDirection:'row'}}>
                                    <Text>{item.city}</Text> 
                                    <View style={{borderLeftWidth:2, borderColor:'gray', height:13, marginTop:4, marginLeft:5}}></View>
                                    <View>
                                        {
                                            from == "applied_jobs"?
                                                <Text style={{marginLeft:5, color:"#306EFF"}}>Applied on {item.apply_date}</Text>:
                                            from == "shortlisted_jobs"?
                                                <Text style={{marginLeft:5, color:"#306EFF"}}>shortlisted on {item.shortlist_date}</Text>:
                                            from == "rejected_jobs"?
                                                <Text style={{marginLeft:5, color:"#306EFF"}}>rejected on {item.rejected_date}</Text>:
                                            <View></View>
                                        }
                                    </View>
                                </View>
                            </View>
                        </View>
                    )}
                    keyExtractor={item => item.id}
                />
            </View>
        );
    }
}

export default MyjobsCard;