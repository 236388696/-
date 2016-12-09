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
    TextInput,
    TouchableOpacity,
    AlertIOS,
    ScrollView,

} from 'react-native';

class xc extends Component{
    render(){
        return (

            <View style={xcStyle.container}>
                <View style={xcStyle.input}>
                    <TextInput style={{width:350,height:20,borderWidth:1,borderColor:"black",marginRight:10}} placeholder={"搜索:目的地/酒店/景点/航班号"}/>
                    <TouchableOpacity onPress={this.click}>
                        <Text style={{color:"skyblue"}}>我的</Text>
                    </TouchableOpacity>

                </View>
                <ScrollView>

                <View style={xcStyle.img}>
                    <Image source={require('./xiecheng.jpg')} />
                </View>

                    <View style={xcStyle.box}>
                        <View style={[xcStyle.item, xcStyle.center]}>
                            <Text>酒店</Text>
                        </View>
                        <View style={xcStyle.item}>
                            <View style={[xcStyle.innerView, xcStyle.center]}>
                                <Text>海外酒店</Text>
                            </View>
                            <View style={[xcStyle.innerView, xcStyle.center]}>
                                <Text>特价酒店</Text>
                            </View>
                        </View>
                        <View style={xcStyle.item}>
                            <View style={[xcStyle.innerView, xcStyle.center]}>
                                <Text>团购</Text>
                            </View>
                            <View style={[xcStyle.innerView, xcStyle.center]}>
                                <Text>客栈公寓</Text>
                            </View>
                        </View>
                    </View>
                    <View style={[xcStyle.box,xcStyle.box2]}>
                        <View style={[xcStyle.item, xcStyle.center,xcStyle.box2C]}>
                            <Text>酒店</Text>
                        </View>
                        <View style={[xcStyle.item,xcStyle.box2C]}>
                            <View style={[xcStyle.innerView, xcStyle.center]}>
                                <Text>海外酒店</Text>
                            </View>
                            <View style={[xcStyle.innerView, xcStyle.center]}>
                                <Text>特价酒店</Text>
                            </View>
                        </View>
                        <View style={[xcStyle.item,xcStyle.box2C]}>
                            <View style={[xcStyle.innerView, xcStyle.center]}>
                                <Text>团购</Text>
                            </View>
                            <View style={[xcStyle.innerView, xcStyle.center]}>
                                <Text>客栈公寓</Text>
                            </View>
                        </View>
                    </View>
                <View style={[xcStyle.box,xcStyle.box2,xcStyle.box3]}>
                        <View style={[xcStyle.item, xcStyle.center,xcStyle.box2C,xcStyle.box3C]}>
                            <Text>酒店</Text>
                        </View>
                        <View style={[xcStyle.item,xcStyle.box3C]}>
                            <View style={[xcStyle.innerView, xcStyle.center]}>
                                <Text>海外酒店</Text>
                            </View>
                            <View style={[xcStyle.innerView, xcStyle.center]}>
                                <Text>特价酒店</Text>
                            </View>
                        </View>
                        <View style={[xcStyle.item,xcStyle.box3C]}>
                            <View style={[xcStyle.innerView, xcStyle.center]}>
                                <Text>团购</Text>
                            </View>
                            <View style={[xcStyle.innerView, xcStyle.center]}>
                                <Text>客栈公寓</Text>
                            </View>
                        </View>
                    </View>
                <View style={[xcStyle.box,xcStyle.box2,xcStyle.box3,xcStyle.box4]}>
                        <View style={[xcStyle.item, xcStyle.center,xcStyle.box2C,xcStyle.box3C,xcStyle.box4C]}>
                            <Text>酒店</Text>
                        </View>
                        <View style={[xcStyle.item,xcStyle.box4C]}>
                            <View style={[xcStyle.innerView, xcStyle.center]}>
                                <Text>海外酒店</Text>
                            </View>
                            <View style={[xcStyle.innerView, xcStyle.center]}>
                                <Text>特价酒店</Text>
                            </View>
                        </View>
                        <View style={[xcStyle.item,xcStyle.box4C]}>
                            <View style={[xcStyle.innerView, xcStyle.center]}>
                                <Text>团购</Text>
                            </View>
                            <View style={[xcStyle.innerView, xcStyle.center]}>
                                <Text>客栈公寓</Text>
                            </View>
                        </View>
                    </View>


                <View style={xcStyle.icon}>
                    <View style={xcStyle.i1}>
                        <View style={xcStyle.i2}><Text>qwe</Text></View>
                        <View style={xcStyle.i2}><Text>qwe</Text></View>
                        <View style={xcStyle.i2}><Text>qwe</Text></View>
                    </View>
                    <View style={xcStyle.i1}>
                        <View style={xcStyle.i2}><Text>qwe</Text></View>
                        <View style={xcStyle.i2}><Text>qwe</Text></View>
                        <View style={xcStyle.i2}><Text>qwe</Text></View>
                    </View>
                    <View style={xcStyle.i1}>
                        <View style={xcStyle.i2}><Text>qwe</Text></View>
                        <View style={xcStyle.i2}><Text>qwe</Text></View>
                        <View style={xcStyle.i2}><Text>qwe</Text></View>
                    </View>
                    <View style={xcStyle.i1}>
                        <View style={xcStyle.i2}><Text>qwe</Text></View>
                        <View style={xcStyle.i2}><Text>qwe</Text></View>
                        <View style={xcStyle.i2}><Text>qwe</Text></View>
                    </View>
                </View>
                 </ScrollView>

            </View>



        )
    }
    click(){
        AlertIOS.alert("登录成功");
    }

}
const xcStyle =StyleSheet.create({
   container:{
       flexDirection:"column",

   },
   input:{
       marginTop:20,
       flexDirection:"row",
       justifyContent:"space-around",
       flex:1
   },
    img:{
       flex:2,
        marginTop:20
    },
    box:{

        flex:1,
        flexDirection: "row",
    },
    item: {
        flex: 1,
        height: 80,
        backgroundColor: 'pink',
        margin:1,

    },
    innerView: {
        flex: 1,
        marginBottom:1,
    },
    center: {
        justifyContent: "center",
        alignItems: 'center',
        borderTopWidth:2,
        borderColor:"white"
    },
    // BigBox:{
    //     flex:4,
    //     marginTop:140,
    //     flexDirection:"column",
    //     borderWidth:1,
    //     borderColor:"blue"
    // },
    icon:{
        flex:2,
        flexDirection:"row",


    },
    i1:{
        flexDirection:"column",
        flex:1,
        height:80,
    },
    i2:{
        flex:1,
       borderWidth:1,
        borderColor:"#ccc",
        margin:1,
        alignItems:"center"
    },
    box2:{
        flex:1,
        flexDirection: "row",
    },
    box2C:{
        backgroundColor:"skyblue",
        flex: 1,
        height: 80,
        margin:1
    },
    box3:{
        flex:1,
        flexDirection: "row",
    },
    box3C:{
        backgroundColor:"green",
        flex: 1,
        height: 80,
        margin:1
    },
    box4:{
        flex:1,
        flexDirection: "row",
    },
    box4C:{
        backgroundColor:"orange",
        flex: 1,
        height: 80,
        margin:1
    },
    button: {
        margin: 7,
        padding: 5,
        alignItems: 'center',
        backgroundColor: '#eaeaea',
        borderRadius: 3,
    },


});


module.exports = xc;