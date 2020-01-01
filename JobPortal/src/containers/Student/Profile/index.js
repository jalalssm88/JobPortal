import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity, FlatList, ScrollView } from 'react-native';
import { Spinner } from 'native-base'
import styles from './Style';
import Feather from 'react-native-vector-icons/Feather';
import { connect } from 'react-redux';
import { ProfileActions } from '../../../store/actions';


class ProfileScreen extends Component {
    constructor(props){
        super(props);
        this.state = {
            image:"https://www.biography.com/.image/t_share/MTU1MTM0NzA2NzQ3MTg4NDQw/chris-evans-arrives-at-the-los-angeles-premiere-of-captain-america-the-winter-soldier-held-at-the-el-capitan-theatre-on-march-13-2014-in-hollywood-california-photo-by-michael-tran_filmmagicjpg-square.jpg",
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
        this.getExperience();
        // this.getEducation();
        // this.getSkills();
        // this.getLanguage();
    }

    getExperience = ()=> {
        this.props.getExperience()
    }
    // getEducation = ()=> {
    //     this.props.getEducation()
    // }
    // getSkills = ()=> {
    //     this.props.getSkills()
    // }
    // getLanguage = ()=> {
    //     this.props.getLanguage()
    // }


    render(){
        console.log('proppsssssss', this.props)
        const {experience_data, education_data, skills_data, language_data, isLoading} = this.props;
        return(
            <ScrollView >
                {
                    isLoading?<View style={{paddingTop:280}}><Spinner color="blue" /></View>:
                    <View>
                        <View style={styles.profileContainer}>
                            <Image source={require('../../../images/profile_theme.jpg')} style={{height:280, width:"100%"}}/>
                            <View style={styles.profilePicContainer}>
                                <TouchableOpacity>
                                    <Image source={{uri:this.state.image}} style={{height:115, width:115, borderRadius:100}} />
                                </TouchableOpacity>                    
                            </View>
                        </View>
                        <View style={styles.profileInfoContainer}>
                            <View style={[styles.summaryContainer, {marginTop:-20}]}>
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
                                    <View style={{width:'90%', flexDirection:'row'}}>
                                        <Feather color="#73736f" style={{marginLeft:10}} name="file-text" size={25} />
                                        <Text style={{marginLeft:10, fontSize:18, color:"#73736f"}}>Experience</Text>
                                    </View>
                                    <View style={{width:"10%"}}>
                                        <TouchableOpacity onPress={()=>{
                                            this.props.navigation.navigate('AddProfileScreen', 'Add Experience')
                                        }}>
                                            <Feather name="plus" size={25} />
                                        </TouchableOpacity>
                                    </View>
                                </View>
                                <FlatList 
                                    data={experience_data}
                                    ListEmptyComponent={() => {
                                        return (
                                            <View style={styles.listEmptyContainer}>
                                                <Text>no data found</Text>
                                            </View>
                                        )
                                    }}
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
                                    <View style={{flexDirection:'row', width:"90%"}}>
                                        <Feather color="#73736f" style={{marginLeft:10}} name="layers" size={25} />
                                        <Text style={{marginLeft:10, fontSize:18, color:"#73736f"}}>Education</Text>
                                    </View>
                                    <View style={{width:"10%"}}>
                                        <TouchableOpacity onPress={()=>{this.props.navigation.navigate('AddProfileScreen', 'Add Education')}}>
                                            <Feather name="plus" size={25} />
                                        </TouchableOpacity>
                                    </View>
                                </View>
                                <FlatList 
                                    data={education_data}
                                    ListEmptyComponent={() => {
                                        return (
                                            <View style={styles.listEmptyContainer}>
                                                <Text>no data found</Text>
                                            </View>
                                        )
                                    }}
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
                                                    <Text>{item.degree_title}</Text>
                                                    <Text> in</Text>
                                                    <Text style={{marginLeft:5}}>{item.field}</Text>
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
                                    <View style={{flexDirection:'row', width:"90%"}}>
                                        <Feather color="#73736f" style={{marginLeft:10}} name="file-plus" size={25} />
                                        <Text style={{marginLeft:10, fontSize:18, color:"#73736f"}}>Skills</Text>
                                    </View>
                                    <View style={{width:"10%"}}>
                                        <TouchableOpacity onPress={()=>{this.props.navigation.navigate('AddProfileScreen', 'Add Skills')}}>
                                            <Feather name="plus" size={25} />
                                        </TouchableOpacity>
                                    </View>
                                </View>
                                <View style={{width:"100%", paddingHorizontal:20, paddingTop:10}}>
                                <FlatList 
                                    data={skills_data}
                                    ListEmptyComponent={() => {
                                        return (
                                            <View style={styles.listEmptyContainer}>
                                                <Text>no data found</Text>
                                            </View>
                                        )
                                    }}
                                    renderItem = {({item})=>(
                                        // <View style={{flexDirection:'row', marginTop:"10", width:"33.3%", backgroundColor:'#83b8fc', height:30, marginLeft:5, alignItems:'center', justifyContent:'center'}}>
                                        //     <Text>{item.skill_title}</Text>
                                        // </View>
                                        <View style={{flexDirection:'row', width:"32%", backgroundColor:'#83b8fc', marginLeft:4, marginTop:10, height:40, alignItems:'center', justifyContent:'center', borderRadius:5}}>
                                            <Text>{item.skills}</Text>
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
                                    <View style={{flexDirection:'row', width:"90%"}}>
                                        <Feather color="#73736f" style={{marginLeft:10}} name="file-plus" size={25} />
                                        <Text style={{marginLeft:10, fontSize:18, color:"#73736f"}}>Languages</Text>
                                    </View>
                                    <View>
                                        <TouchableOpacity onPress={()=>{this.props.navigation.navigate('AddProfileScreen', 'Add Language')}}>
                                            <Feather name="plus" size={25} />
                                        </TouchableOpacity>
                                    </View>
                                </View>
                                <FlatList 
                                    data={language_data}
                                    ListEmptyComponent={() => {
                                        return (
                                            <View style={styles.listEmptyContainer}>
                                                <Text>no data found</Text>
                                            </View>
                                        )
                                    }}
                                    renderItem = {({item})=>(
                                        <View style={[styles.flatListRender, {height:45}]}>
                                            <View style={{width:"50%"}}>
                                                <Text>{item.language}</Text>
                                            </View>
                                            <View style={{width:"50%", alignItems:"flex-end"}}>
                                                <Text>{item.language_level}</Text>
                                            </View>
                                        </View>
                                    )}
                                    keyExtractor={item => item.id}
                                />
                            </View>
                        </View>
                    </View>
                }
            </ScrollView>
        );
    }
}

const mapStateToProps =(state)=> {
    return{
        experience_data:state.Profile.experience_data,
        education_data:state.Profile.education_data,
        skills_data:state.Profile.skills_data,
        language_data:state.Profile.language_data,
        isLoading:state.Profile.isLoading
    }
}
const mapDispatchToProps = (dispatch) =>{
    return{
        getExperience:()=> dispatch(ProfileActions.getExperience()),
        // getEducation:()=> dispatch(ProfileActions.getEducation()),
        // getSkills:()=> dispatch(ProfileActions.getSkills()),
        // getLanguage:()=> dispatch(ProfileActions.getLanguage())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfileScreen);