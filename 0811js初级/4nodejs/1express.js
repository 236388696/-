/**
 * Created by dllo on 16/11/25.
 */

//创建express服务器
const express=require("express");
//初始化express应用
const app=express();

//第一个参数：请求的路径   第二个参数是个回调函数
app.get("/",(req,res)=>{
   res.send("这是get请求的结果");
});
app.post("/",(req,res)=>{
    res.send("这是post请求的结果");
});

app.all("/all",(req,res)=>{
    res.send("所有的请求都是这个结果");
})


app.listen(8100);