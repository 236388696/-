/**
 * Created by dllo on 16/12/6.
 */
import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    TextInput
} from 'react-native';
class Xiecheng extends Component {
    render() {
        return (
            <View style={XiechengStyle.container}>
                <View style={XiechengStyle.item}>
                    <TextInput style={{width:380,height:40,borderWidth:1,borderColor:'#ECEDF1'}} placeholder={'搜索：目的地／酒店／景点／航班号'} />
                </View>
                <View style={XiechengStyle.item}>
                    <Image source={require("./2.png")}/>
                </View>
                <View style={[XiechengStyle.item, XiechengStyle.center]}>
                    <Text>酒店</Text>
                </View>
                <View style={XiechengStyle.item}>
                    <View style={[XiechengStyle.innerView, XiechengStyle.center]}>
                        <Text>海外酒店</Text>
                    </View>
                    <View style={[XiechengStyle.innerView, XiechengStyle.center]}>
                        <Text>特价酒店</Text>
                    </View>
                </View>
                <View style={XiechengStyle.item}>
                    <View style={[XiechengStyle.innerView, XiechengStyle.center]}>
                        <Text>团购</Text>
                    </View>
                    <View style={[XiechengStyle.innerView, XiechengStyle.center]}>
                        <Text>客栈公寓</Text>
                    </View>
                </View>
            </View>
        )
    }
}


const XiechengStyle = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "row",
        marginTop: 20,
        backgroundColor: '#ccc'
    },
    item: {
        flex: 1,
        //height: 80,

    },
    innerView: {
        flex: 1,
    },
    center: {
        justifyContent: "center",
        alignItems: 'center'
    }

});
module.exports=Xiecheng;



