/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
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
  AlertIOS
} from 'react-native';

export default class Demo extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          无言独上西楼，月如钩；
          深院锁清秋。
        </Text>
        <Text style={styles.instructions}>
          To get started, edit index.ios.js
        </Text>
        <Text style={styles.instructions}>
          Press Cmd+R to reload,{'\n'}
          Cmd+D or shake for dev menu
        </Text>
      </View>
    );
  }
}

console.log("大儿子双眼皮哦");
const styles = StyleSheet.create({
  container: {
    flex: 1,
    //flexDirection:"column",垂直
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'

  },
  welcome: {
    fontSize: 50,
    textAlign: 'center',
    margin: 10,
    color:"red"
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
// var QQ=require("./qq.js");
// class Hello extends Component{
//   render(){
//     return (
//         <View style={helloStyle.container}>
//           <QQ/>
//           <View style={helloStyle.view1}>
//             <Text>酒店</Text>
//             {/*加载本地图片*/}
//             {/*<Image source={require("./1.jpg")}/>*/}
//             <Image source={{url:'https://gw.alicdn.com/tps/TB1exaOLVXXXXXeXFXXXXXXXXXX-183-129.png?imgtag=avatar'}} style={{width:50,height:50}}/>
//           </View>
//           <View>
//             <View style={helloStyle.view2}><Text>海外酒店</Text></View>
//             <View style={helloStyle.view3}><Text>团购</Text></View>
//           </View>
//           <View>
//             <View style={helloStyle.view4}><Text>特价酒店</Text></View>
//             <View style={helloStyle.view5}><Text>民宿客栈</Text></View>
//           </View>
//           <View>
//             <TextInput style={{width:200,height:50,borderWidth:1,borderColor:'green'}} placeholder={'我的滑板鞋'} secureTextEntry={true}/>
//           </View>
//         </View>
//
//     )
//   }
// }
// const helloStyle=StyleSheet.create({
//   // container:外边的
//   container:{
//     backgroundColor:"#ccc",
//     //主轴是ro：x轴水平排列
//     flexDirection:"row",
//     marginTop:20,
//     //主轴方向:space-around平均分配
//     justifyContent:"center",
//     // alignItems:"flex-end",
//     //flexWrap换行
//     flexWrap:"wrap",
//     // flex:1,
//     height:300
//   },
//   view1:{
//     width:125,
//     height:60,
//     backgroundColor:"red",
//     //justifyContent：字体y轴居中
//     justifyContent:"center",
//     //alignItems:字体x轴居中
//     alignItems:"center",
//     marginRight:1
//   },
//   view2:{
//     width:120,
//     height:30,
//     backgroundColor:"yellow",
//     justifyContent:"center",
//     alignItems:"center",
//     marginRight:1
//     // alignSelf:"flex-start"
//   },
//   view3:{
//     width:120,
//     height:30,
//     backgroundColor:"pink",
//     justifyContent:"center",
//     alignItems:"center",
//     marginRight:1
//   },
//   view4:{
//     width:120,
//     height:30,
//     backgroundColor:"orange",
//     justifyContent:"center",
//     alignItems:"center",
//     marginRight:1
//   },
//   view5:{
//     width:120,
//     height:30,
//     backgroundColor:"yellow",
//     justifyContent:"center",
//     alignItems:"center"
//
//   }
//
// })



//es6的写法：声明一个类
class QQ extends Component{
  render(){
    return (
        <View style={QQStyle.container}>
               <View style={QQStyle.view1}>
                 {/*<Text style={QQStyle.view1}>返回</Text>*/}
                 <Text>添加帐号</Text>
               </View>
               <View style={QQStyle.view2}>

                 <Image source={require("./qq.png")}/>
               </View>

               <View style={QQStyle.view3}>
                 <TextInput style={{width:420,height:40,borderWidth:1,borderColor:'#ECEDF1'}} placeholder={'QQ号／手机号／邮箱'} />
                 <TextInput style={{width:420,height:40,borderWidth:1,borderColor:'#ECEDF1'}} placeholder={'密码'} secureTextEntry={true}/>
               </View>
               <TouchableOpacity onPress={this.click}>
               <View style={QQStyle.view4}>
                 <Text style={QQStyle.textval}>登录</Text>
               </View>
                </TouchableOpacity>
        </View>

    )
  }
  click(){
    AlertIOS.alert("大耳朵你有时间吗?");
  }
}
const QQStyle=StyleSheet.create({
  // container:外边的
  container:{
    backgroundColor:"white",
    marginTop:20,
    alignItems:"center",
    flex:1
  },
  view1:{
   fontSize:50,
   color:"green"
    // flex:1
  },
  view2:{
    width:400,
    height:160,
    backgroundColor:"#ECEDF1",
    //justifyContent：字体y轴居中
    justifyContent:"center",
    //alignItems:字体x轴居中
    alignItems:"center"
    // flex:1
  },
  view3:{
    height:60,
    justifyContent:"center",
    marginTop:10
  },
  view4:{
    width:350,
    height:50,
    backgroundColor:"#1DBAF1",
    justifyContent:"center",
    alignItems:"center",
    marginTop:20,
    color:"white",
    fontSize:25,


  },
  textval:{
    color:'white',
    fontSize:25
  }


});
// AppRegistry.registerComponent('Demo', () => QQ);







//携程作业
var XC=require("./xiecheng.js");
var HelloXC = React.createClass({
  render:function () {
    return(
          <View style={style.container}>
            <XC/>
          </View>
    )
  }
});

const style = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#ccc',
  }
});



AppRegistry.registerComponent('Demo', () => HelloXC);


//查宽高
// var Dimensions=require("Dimensions");
// console.log(Dimensions.get('window').width);
// console.log(Dimensions.get('window').height);






//es5的写法
// var Hello1=React.createClass({
//   render:function () {
//     return(
//         <Text>这是我生命里美好的时刻</Text>
//     )
//   }
// })
// AppRegistry.registerComponent('Demo', () => Hello1);





