import React, { Component } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { Input, Icon} from 'native-base';

export default class Dropdown extends Component {
    constructor(props){
        super(props);
        this.state = {
            showDropdown: false,
            value_selected:props.selectedValue == ""?props.title:props.selectedValue
        }
    }
    render() {
        const {value_selected} = this.state
        const { arrayData, title} = this.props
        return (
            <View style={{paddingHorizontal:20}}>
                <View style={{borderRadius: 5,borderWidth: 1,borderColor: '#4EF89219', minHeight: 50, marginBottom: 10, justifyContent: "center", alignItems: "center",}}>
                    <TouchableOpacity onPress={() => {
                        this.setState({ showDropdown: !this.state.showDropdown })
                    }} style={{
                        width: "100%", minHeight: 50,
                        justifyContent: "center",
                        borderBottomWidth: this.state.showDropdown ? 1 : 0,
                        borderBottomColor: "#4EF89219",
                    }}>
                        <Text style={{ paddingHorizontal: 15, fontFamily: "Montserrat-Regular", fontSize: 14, color: "#3F3F41", }} >{this.state.showDropdown ? title : value_selected || title}</Text>
                        <Icon name={this.state.showDropdown ? "ios-arrow-up" : "ios-arrow-down"} style={{ color: "#4EF892", position: "absolute", right: 12, fontSize: 20 }} />
                    </TouchableOpacity>
                    {
                        this.state.showDropdown? 
                        <View style={{ width: "100%", }} >
                            {arrayData.map((item, index) => (
                                <TouchableOpacity style={{
                                    width: "100%",
                                    borderBottomWidth: index < arrayData.length - 1 ? 1 : 0,
                                    paddingVertical: 5,
                                    height: 50,
                                    justifyContent: "center",
                                    borderBottomColor: "#4EF89219"
                                }}
                                    onPress={() => { this.setState({ value_selected: item.value }); this.setState({ showDropdown: false }) }}
                                ><Text style={{ paddingHorizontal: 15, fontFamily: "Montserrat-Regular", fontSize: 14, color: "#3F3F41", }} >{item.value}</Text>
                                    {item.value == value_selected ? <Icon name={"md-checkmark"} style={{ color: "#4EF892", position: "absolute", right: 12, fontSize: 20 }} /> : <View />}
                                </TouchableOpacity>
                            ))}
                        </View>:<View />
                    }
                </View>
            </View>
        );
    }
}
