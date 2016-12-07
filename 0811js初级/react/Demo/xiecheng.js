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
                <View>
                    <TextInput style={{width:380,height:40,borderWidth:1,borderColor:'#ECEDF1'}} placeholder={'搜索：目的地／酒店／景点／航班号'} />
                </View>
                <View style={XiechengStyle.item}>
                    <Image source={require("./2.png")}/>
                </View>
                <View style={[XiechengStyle.item, XiechengStyle.center,XiechengStyle.count3,XiechengStyle.row1]}>
                    <View style={XiechengStyle.item1}>
                        <Text>酒店</Text>
                    </View>
                    <View style={XiechengStyle.item}>
                    <View style={[XiechengStyle.innerView, XiechengStyle.center,XiechengStyle.item2]}>
                        <Text style={XiechengStyle.margin1}>海外酒店</Text>
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
            </View>
        )
    }
}


const XiechengStyle = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
        marginTop: 20,
        backgroundColor: '#F6F6F6'
    },
    item: {
        // flex: 1,
        height: 60

    },
    innerView: {
        flex: 1,
    },
    center: {
        justifyContent: "center",
        alignItems: 'center'
    },
    row1:{
        flexDirection: "row"
    },
    count3:{
        backgroundColor:"#FF697A",
        marginTop:20

    },
    margin1:{
        marginRight:5,
        marginLeft:10
    },
    item1:{
        width:100,
        marginRight:2
    },
    item2:{
        width:100,
        margin:2
    }

});
module.exports=Xiecheng;



