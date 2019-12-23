import React from 'react';
import { View, Text, TouchableOpacity, Image, ActivityIndicator } from "react-native";

export const JPButton = ({ buttonText, onPress, extraButtonStyles = {}, extraTextStyles = {}, isLoading }) =>
        <TouchableOpacity onPress={onPress} style={{ height: 50, width: "100%", borderRadius: 8, borderWidth: 1, backgroundColor: '#306EFF', borderColor:"#306EFF", alignSelf: 'center', marginBottom: 15, flexDirection: 'row', alignItems: "center", justifyContent: "center", ...extraButtonStyles }}>
            {isLoading ? <ActivityIndicator color="white" size={25} />:<Text style={{ textAlign: 'center', color:"#fff", fontSize: 16, marginLeft: 5, ...extraTextStyles }}>{buttonText}</Text>}
        </TouchableOpacity>