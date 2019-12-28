import { StyleSheet, Dimensions } from 'react-native'
const { height, width } = Dimensions.get("window");

export default StyleSheet.create({
    mainContainer:{
        backgroundColor:'#f7f5f0'
    },
    profileContainer:{
        width:"100%",
        height:230,
        backgroundColor:'green',
        alignItems:'center',
    },
    profilePicContainer:{
        width:120,
        height:120,
        borderRadius:100,
        borderWidth:3,
        borderColor:'purple',
        alignItems:'center',
        justifyContent:'center',
        marginTop:20,
        position:'absolute'
    },
    profileInfoContainer:{
        width:"100%",
        backgroundColor:'#e3e3e3',
        paddingHorizontal:20,
        // height:height
    },
    summaryContainer:{
        width:"100%",
        backgroundColor:"#fff",
        paddingBottom:15
    },

    flatListRender:{
        width:"100%",
        height:80,
        flexDirection:'row',
        borderBottomWidth:1,
        borderColor:'#e3e3e3',
        paddingTop:10,
        paddingHorizontal:10,

    },
    logoContainer:{
        width:"20%",
        marginLeft:8,
        height:50,
        borderWidth:1,
        borderColor:'gray',
        alignItems:'center',
        justifyContent:'center',
        borderRadius:2,
        marginTop:5
    },
    infoContainer:{
        width:"80%",
        height:50,
        paddingHorizontal:10

    },
    listEmptyContainer:{
        width:"100%",
        paddingHorizontal:20,
        paddingTop:10
    }

})