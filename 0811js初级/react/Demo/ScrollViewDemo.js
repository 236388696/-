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
    ScrollView
} from 'react-native';
//图片数组
var imgs = [require("./seimg/one.jpg"),require("./seimg/two.jpg"),require("./seimg/thr.jpg"),require("./seimg/fou.jpg"),require("./seimg/fiv.jpg")];

var Dimensions = require("Dimensions");
var screenWidth = Dimensions.get('window').width;

//定时器
var TimerMixin = require("react-timer-mixin");

var ScrollViewDemo = React.createClass({

    //注册定时器
    mixins:[TimerMixin],

    getInitialState:function () {
        console.log("设置初始状态");
        //state每次修改的时候都会调用组件的render方法,重新渲染视图
        return {
            //设置初始页位置
            currentPage:0
        }
    },
    componentWillMount:function () {
        console.log("组件将要被加载");
    },
    //常用  网络请求等在这个方法里写
    componentDidMount:function () {
        this.startTimer();
        console.log("组件加载完成");
    },
    //开启定时器的方法
    startTimer:function () {
        this.timer=this.setInterval(function () {

            //最后一张结束回到第一张
            if (this.state.currentPage+1 >= imgs.length){
                this.setState({
                    currentPage:0
                });
            }else{
                this.setState({
                    currentPage:this.state.currentPage+1
                })
            }
            //获取当前的scrollView
            var scrollView = this.refs.scroll;
            scrollView.scrollTo({
                x:this.state.currentPage * screenWidth,
                y:0,
                animated:true
            })
        },2000)

    },
    render:function () {
        console.log("渲染视图");
        return (   //horizontal={true}  水平或者垂直
            //pagingEnabled={true}  按页滚动
            //showsHorizontalScrollIndicator={true}  显示滚动条
            //onMomentumScrollEnd   每一页滑动结束之后调用的事件
            // onScrollBeginDrag={}  结束拖拽
            <View>
                <ScrollView ref="scroll" horizontal={true} pagingEnabled={true} showsHorizontalScrollIndicator={true} onMomentumScrollEnd={this.onScrollEnd} onScrollBeginDrag={this.startDrag} onScrollEndDrag={this.endDrag}>
                    {this.loadAllImage()}
                </ScrollView>
                <View style={style.circleStyle}>
                    {this.loadAllCircle()}
                </View>
            </View>
        )
    },
    //根据图片数组生成Image标签
    loadAllImage:function(){
        var allImage = [];
        for(var i = 0; i < imgs.length; i++){
            allImage.push(
                <Image key={i} source={imgs[i]} style={{width:screenWidth,height:200}} />
            )
        }
        return allImage;
    },
    loadAllCircle:function(){
        var allCircle = [];
        var color;
        for(var i = 0; i < imgs.length; i++){
            color = (i == this.state.currentPage) ? 'orange':"white";
            allCircle.push(
                <Text key={i} style={{color:color,fontSize:25}}>&bull;</Text>
            )
        }
        return allCircle;
    },
    //滑动结束事件,改变当前页数
    onScrollEnd:function (e) {
        //获取当前轮播图的偏移量
        var x = e.nativeEvent.contentOffset.x;
        //更新当前的页数
        this.setState({
            currentPage:Math.floor(x/screenWidth)
        })
    },
    startDrag:function () {
        this.clearInterval(this.timer);
    },
    endDrag:function () {
        this.startTimer();
    }
});

const style = StyleSheet.create({
    circleStyle:{
        position:'absolute',
        bottom:0,
        flexDirection:"row",
        backgroundColor:"rgba(0,0,0,0.2)",
        width:screenWidth,
        alignItems:"center"
    }
})

module.exports = ScrollViewDemo;