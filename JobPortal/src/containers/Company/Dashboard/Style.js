import { StyleSheet, Dimensions } from 'react-native'
const { height, width } = Dimensions.get("window");

export default StyleSheet.create({
    mainContainer:{
        paddingHorizontal:30,
    },
    countContainer:{
        width:'100%',
        height:150,
        borderRadius:10,
        backgroundColor:'gray',
        paddingHorizontal:20,
        marginTop:20
    }
    

})