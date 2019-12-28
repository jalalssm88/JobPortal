import { StyleSheet, Dimensions } from 'react-native'
const { height, width } = Dimensions.get("window");

export default StyleSheet.create({
    formContainer: {
        height:800, 
        width:'100%', 
        paddingHorizontal:20,
        paddingTop:15,
        borderRadius:10,
    },
    textInput:{
        height:50,
        borderWidth:1,
        borderColor:'#2B65EC',
        paddingLeft:8,
        paddingTop:5,
        fontSize:18,
        marginBottom:30,
        borderRadius:10
    },
})