/**
 * Created by dllo on 16/12/8.
 */
import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    TextInput,
    TouchableOpacity,
    NavigatorIOS
} from 'react-native';

//用来显示主页内容的
var Home=React.createClass({
    render:function () {
        return(
            <View style={{marginTop:64}}>
                <Text>这是主页</Text>
                <TouchableOpacity onPress={this.pushNext}>
                    <Text>跳转第二页</Text>
                </TouchableOpacity>
            </View>
        )
    },
    pushNext:function () {
        this.props.navigator.push({
            component:NextPage,
            title:'详情页',
            passProps:{name:'大儿子'}
        })
    }
});

//第二页
var NextPage=React.createClass({
    render:function () {
        return (
            <View>
                <Text>这是详情页</Text>
                <Text>{this.props.name}</Text>
            </View>
        )
    }
});

var NavigatorDemo=React.createClass({
    render:function () {
        return(
            <NavigatorIOS
                style={{flex:1}}
                //导航条是否半透明
                translucent={true}
            initialRoute={{
                component:Home,
                title:'网易'

            }}
            />
        )
    }
});
module.exports=NavigatorDemo;