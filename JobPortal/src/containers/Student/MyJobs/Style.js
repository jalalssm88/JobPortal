import { StyleSheet, Dimensions } from 'react-native'
const { height, width } = Dimensions.get("window");

export default StyleSheet.create({
    Container: {
        height:height,
        width:'100%', 
    },
    tabButtonContaoner:{
       width:'100%',
       height:51,
       flexDirection:'row',
       backgroundColor:'#2B65EC',

    },
    tabButton:{
        width:"100%",
        height:50,
        backgroundColor:'#2B65EC',
        alignItems:'center',
        justifyContent:'center',
        borderBottomWidth:2,
        borderColor:'#2B65EC'
    }
})