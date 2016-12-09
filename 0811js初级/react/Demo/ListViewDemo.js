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
    ScrollView,
    ListView
} from 'react-native';

//获取本地网易数据
// var data=require('./data.json');

var ds=new ListView.DataSource({
    rowHasChanged:(r1,r2)=>r1!=r2
});

//创建一个主键
var ListViewDemo=React.createClass({
    //设置初始值
    getInitialState:function () {
        //只有当数据有修改时才刷新row

        return{
            // dataSource:ds.cloneWithRows(["我的滑板鞋","时尚时尚最时尚","回家的路上","情不自禁","摩擦摩擦","大耳朵"])

            //本地数据
            // dataSource:ds.cloneWithRows(data.tid)
            dataSource:ds.cloneWithRows([])

        }
    },
    componentDidMount:function () {
        fetch('http://c.m.163.com/recommend/getSubDocPic?from=toutiao')
            .then((response) => response.json())
            .then((responseJson) => {
                this.setState({
                    dataSource:ds.cloneWithRows(responseJson.tid)
                })
                console.log(responseJson);
            })
            .catch((error) => {
                console.error(error);
            });
    },
    render:function () {
        return(
            <ListView
                //state可以改的
                //ListView中必须的两个属性，一个数据源，一个每一行的视图如何去展示
            dataSource={this.state.dataSource}
            renderRow={this.renderRow}
            />
        )
    },
    //sectionID分区   highlightRow当前选中的一行
    renderRow:function (rowData,sectionID,rowID,highlightRow ) {
        return (
            <View style={{flexDirection:'row',borderBottomColor:'#ccc',borderBottomWidth:1}}>
                {/*<Text>{rowID}</Text>*/}
                {/*<Text>{rowData}</Text>*/}
                <Image source={{url:rowData.img}} style={{width:100,height:100}}/>
                <Text>{rowData.title}</Text>
            </View>
        )
    }
});
//模块导出
module.exports=ListViewDemo;