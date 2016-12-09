import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    TextInput,
    NavigatorIOS,
    TabBarIOS,
    ViewScroll,
    ScrollView
} from 'react-native';

var NetEase = React.createClass({
    getInitialState:function () {
        return{
            //设置初始选中的tabBar
            selectedItem:'news'
        }
    },
    render:function () {
        return(
            <View style={{flex:1}}>
                <TabBarIOS>
                    {/*新闻*/}
                    <TabBarIOS.Item icon={require('image!tabbar_icon_bar_normal')}
                                    title="新闻">


                    </TabBarIOS.Item>
                    {/*直播*/}
                    <TabBarIOS.Item title="直播">


                    </TabBarIOS.Item>
                    {/*话题*/}
                    <TabBarIOS.Item title="话题">


                    </TabBarIOS.Item>
                    {/*我的*/}
                    <TabBarIOS.Item title="我的">


                    </TabBarIOS.Item>


                </TabBarIOS>
            </View>
        )
    }


});

module.exports = NetEase;