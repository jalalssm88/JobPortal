import { StyleSheet, Dimensions } from 'react-native'
const { height, width } = Dimensions.get("window");

export default StyleSheet.create({
    formContainer: {
        height:height,
        width:'100%', 
        paddingHorizontal:20,
        paddingTop:15,
    },
    textInput:{
        height:50,
        borderWidth:1,
        borderColor:'#2B65EC',
        paddingLeft:8,
        fontSize:16,
        marginBottom:20,
        width:"100%",
        borderRadius:10
    },
 
    
})