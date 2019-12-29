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
        height:40,
        borderBottomWidth:1,
        borderColor:'#2B65EC',
        paddingLeft:8,
        fontSize:16,
        marginBottom:20,
        width:"100%"
    },
    toggleButtonContainer:{
        width: 50,
        height: 22,
        borderRadius: 25,
        backgroundColor: '#ccc',
        padding: 5,
        // borderColor:'blue',
        // borderWidth:1,
    
    },
    toggleButtonCircle:{
        width: 15,
        height: 15,
        borderRadius: 19,
        backgroundColor: 'white', // rgb(102,134,205)
    },
})