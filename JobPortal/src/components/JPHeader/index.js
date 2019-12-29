import React from "react";
import { Text, Image, View, TouchableOpacity } from "react-native";
import { Header } from 'native-base';
export const JPHeader = ({ leftItem = <View />, rightItem = <View />, bodyText, bodyImage, bodyPress }) => (
    <Header style={{ backgroundColor: "#2B65EC", elevation: 0, paddingVertical: 10, height:60, paddingLeft: 0, paddingRight: 0, borderBottomWidth: 0, paddingTop: 5 }} >
        <View style={{ width: "20%", height: "100%", paddingLeft:10, justifyContent:'center' }} >
            {leftItem}
        </View>
        <View style={{ width: "50%", alignItems: "center", justifyContent: "center" }} >
            {bodyText}
        </View>
        <View style={{ width: "20%", height: "100%" }} >
            {rightItem}
        </View>
    </Header>
)