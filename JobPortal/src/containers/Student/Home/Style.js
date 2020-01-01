import { StyleSheet, Dimensions } from 'react-native'
const { height, width } = Dimensions.get("window");

export default StyleSheet.create({
    homeContainer:{
        paddingHorizontal:10,
    },
    jobListContainer:{
        width:"100%",
        height:100,
        flexDirection:'row',
        borderBottomWidth:1,
        borderColor:'gray',
        paddingTop:15,
        paddingHorizontal:10,

    },
    logoContainer:{
        width:"25%",
        height:70,
        borderWidth:1,
        borderColor:'gray',
        alignItems:'center',
        justifyContent:'center',
        borderRadius:2
    },
    infoContainer:{
        width:"80%",
        height:70,
        paddingHorizontal:10

    },
    textInput:{
        height:40,
        borderBottomWidth:1,
        borderColor:'#2B65EC',
        paddingLeft:8,
        fontSize:16,
        marginBottom:20,
        width:"100%"
    },

})