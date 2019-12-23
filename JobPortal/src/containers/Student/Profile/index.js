import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity, FlatList, ScrollView } from 'react-native';
import styles from './Style';
import Feather from 'react-native-vector-icons/Feather';


class ProfileScreen extends Component {
    constructor(props){
        super(props);
        this.state = {
            image:"https://www.biography.com/.image/t_share/MTU1MTM0NzA2NzQ3MTg4NDQw/chris-evans-arrives-at-the-los-angeles-premiere-of-captain-america-the-winter-soldier-held-at-the-el-capitan-theatre-on-march-13-2014-in-hollywood-california-photo-by-michael-tran_filmmagicjpg-square.jpg",
            exprience:[
                {
                    id:1,
                    job_title:"Frontend Developer",
                    company:"Bitswits",
                    start_date:"August 2018",
                    end_date:"september 2019",
                    // logo:"https://i.pinimg.com/280x280_RS/9e/2f/e1/9e2fe16835190b5a0420c2de94b0ff70.jpg",
                    is_working:false,
                },
                {
                    id:1,
                    job_title:"React Developer",
                    company:"Code Avenue",
                    start_date:"August 2018",
                    end_date:"",
                    logo:"https://i.pinimg.com/280x280_RS/9e/2f/e1/9e2fe16835190b5a0420c2de94b0ff70.jpg",
                    is_working:true,
                },
                {
                    id:1,
                    job_title:"React Developer",
                    company:"Code Avenue",
                    start_date:"August 2018",
                    end_date:"",
                    logo:"https://i.pinimg.com/280x280_RS/9e/2f/e1/9e2fe16835190b5a0420c2de94b0ff70.jpg",
                    is_working:true,
                }
            ],
            education:[
                {
                    id:1,
                    institude:"Preston University",
                    degree_type:"Bachlors",
                    degree_title:"Computer Science",
                },
                {
                    id:2,
                    institude:"St patrick college",
                    degree_type:"Intermediate",
                    degree_title:"Pre Engineering",
                },
                {
                    id:3,
                    institude:"AL karim School",
                    degree_type:"Matriculation",
                    degree_title:"General Science",
                }
            ],
            skills:[
                {
                    id:1,
                    skill_title:"react-redux",
                    skill_experience:"one year"
                },
                {
                    id:2,
                    skill_title:"semantic ui",
                    skill_experience:"one year"
                },
                {
                    id:3,
                    skill_title:"photoshop",
                    skill_experience:"one year"
                }, {
                    id:4,
                    skill_title:"react js",
                    skill_experience:"one year"
                }
            ]
        }
    }
    render(){
        return(
            <ScrollView >
                <View style={styles.profileContainer}>
                    <Image source={require('../../../images/profile_theme.jpg')} style={{height:280, width:"100%"}}/>
                    <View style={styles.profilePicContainer}>
                        <TouchableOpacity>
                            <Image source={{uri:this.state.image}} style={{height:115, width:115, borderRadius:100}} />
                        </TouchableOpacity>                    
                    </View>
                </View>
                <View style={styles.profileInfoContainer}>
                    <View style={styles.summaryContainer}>
                        <View style={{borderBottomWidth:1, borderColor:'#e3e3e3', alignItems:'center', height:50, flexDirection:'row'}}>
                            <Feather color="#73736f" style={{marginLeft:10}} name="file-text" size={25} />
                            <Text style={{marginLeft:10, fontSize:18, color:"#73736f"}}>Summary</Text>
                        </View>
                        <View style={{paddingHorizontal:15, paddingTop:5}}>
                            <Text style={{color:"#73736f",fontSize:15}}>I am front end web and mobile app developer. One years of exprience in the field of computer
                                science and technology. Skilled in javascript, html, css, react js and react native js. and many more
                            </Text>
                        </View>
                    </View>

                    {/* exprience */}
                    <View style={[styles.summaryContainer,{marginTop:10}]}>
                        <View style={{borderBottomWidth:1, borderColor:'#e3e3e3', alignItems:'center', height:50, flexDirection:'row'}}>
                            <Feather color="#73736f" style={{marginLeft:10}} name="file-text" size={25} />
                            <Text style={{marginLeft:10, fontSize:18, color:"#73736f"}}>Experience</Text>
                        </View>
                        <FlatList 
                            data={this.state.exprience}
                            renderItem = {({item})=>(
                                <View style={styles.flatListRender}>
                                    <View style={styles.logoContainer}>
                                        {
                                            item.logo?
                                            <Image style={{height:45, width:50}} source={{uri:item.logo}} />:
                                            <Image style={{height:45, width:50}} source={require('../../../images/Icons/company_icon.png')} />
                                        }
                                    </View>
                                    <View style={styles.infoContainer}>
                                        <Text style={{fontSize:16, fontWeight:'bold'}}>{item.job_title}</Text>
                                        <Text style={{fontSize:14}}>{item.company}</Text>
                                        <View style={{flexDirection:'row'}}>
                                            <Text style={{color:"#306EFF"}}>{item.start_date}</Text>
                                            <View style={{borderTopWidth:2, borderColor:'gray', width:13, marginTop:10, marginLeft:5}}></View>
                                            {
                                                !item.is_working?
                                                <Text style={{marginLeft:5, color:"#306EFF"}}>{item.end_date}</Text>:
                                                <Text style={{marginLeft:5, color:"#306EFF"}}>Present</Text>
                                            }
                                        </View>
                                    </View>
                                </View>
                            )}
                            keyExtractor={item => item.id}
                        />
                    </View>

                    {/* education */}
                    <View style={[styles.summaryContainer,{marginTop:10}]}>
                        <View style={{borderBottomWidth:1, borderColor:'#e3e3e3', alignItems:'center', height:50, flexDirection:'row'}}>
                            <Feather color="#73736f" style={{marginLeft:10}} name="layers" size={25} />
                            <Text style={{marginLeft:10, fontSize:18, color:"#73736f"}}>Education</Text>
                        </View>
                        <FlatList 
                            data={this.state.education}
                            renderItem = {({item})=>(
                                <View style={styles.flatListRender}>
                                    <View style={styles.logoContainer}>
                                        {
                                            item.logo?
                                            <Image style={{height:50, width:50}} source={{uri:item.logo}} />:
                                            <Image style={{height:40, width:40}} source={require('../../../images/Icons/education_icon.png')} />
                                        }
                                    </View>
                                    <View style={[styles.infoContainer, {paddingTop:5}]}>
                                        <Text style={{fontSize:16, fontWeight:'bold'}}>{item.institude}</Text>
                                        <View style={{flexDirection:'row'}}>
                                            <Text>{item.degree_type}</Text>
                                            <Text> in</Text>
                                            <Text style={{marginLeft:5}}>{item.degree_title}</Text>
                                        </View>
                                    </View>
                                </View>
                            )}
                            keyExtractor={item => item.id}
                        />
                    </View>

                    {/* skills */}
                    <View style={[styles.summaryContainer,{marginTop:10}]}>
                        <View style={{borderBottomWidth:1, borderColor:'#e3e3e3', alignItems:'center', height:50, flexDirection:'row'}}>
                            <Feather color="#73736f" style={{marginLeft:10}} name="file-plus" size={25} />
                            <Text style={{marginLeft:10, fontSize:18, color:"#73736f"}}>Skills</Text>
                        </View>
                        <View style={{width:"100%", paddingHorizontal:20, paddingTop:10}}>
                        <FlatList 
                            data={this.state.skills}
                            renderItem = {({item})=>(
                                // <View style={{flexDirection:'row', marginTop:"10", width:"33.3%", backgroundColor:'#83b8fc', height:30, marginLeft:5, alignItems:'center', justifyContent:'center'}}>
                                //     <Text>{item.skill_title}</Text>
                                // </View>
                                <View style={{flexDirection:'row', width:"32%", backgroundColor:'#83b8fc', marginLeft:4, marginTop:10, height:40, alignItems:'center', justifyContent:'center', borderRadius:5}}>
                                    <Text>{item.skill_title}</Text>
                                </View>
                            )}
                            numColumns={3}

                            keyExtractor={item => item.id}
                        />
                        </View>
                    </View>

                     {/* languages */}
                    <View style={[styles.summaryContainer,{marginTop:10}]}>
                        <View style={{borderBottomWidth:1, borderColor:'#e3e3e3', alignItems:'center', height:50, flexDirection:'row'}}>
                            <Feather color="#73736f" style={{marginLeft:10}} name="file-plus" size={25} />
                            <Text style={{marginLeft:10, fontSize:18, color:"#73736f"}}>Languages</Text>
                        </View>
                        <FlatList 
                            data={this.state.skills}
                            renderItem = {({item})=>(
                                <View style={[styles.flatListRender, {height:45}]}>
                                    <View style={{width:"50%"}}>
                                        <Text>{item.skill_title}</Text>
                                    </View>
                                    <View style={{width:"50%", alignItems:"flex-end"}}>
                                        <Text>expert</Text>
                                    </View>
                                </View>
                            )}
                            keyExtractor={item => item.id}
                        />
                    </View>
                </View>
            </ScrollView>
        );
    }
}

export default ProfileScreen;