/**
 * Created by dllo on 16/11/25.
 */
const express=require("express");
const ejs=require("ejs");
const path=require("path");
const mysql=require("mysql");

//创建express服务器
const  app=express();

var connect=mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"0811"
})
connect.connect();

//模版引擎设置为 ejs
app.set("view engine","ejs");
app.get("/",(req,res)=>{
   connect.query("SELECT * FROM image where",(err,rows,field)=>{
       if(err){
           throw err;
       }
       //用模版render
       res.render(path.join(__dirname,"views/image.ejs"),{
           images:rows
       })
   })
});

//更改原先的html的样子，叫渲染
app.get("/image/:id",(req,res)=>{
    var id=req.params.id;
    //row是查找到返回的东西，id=${id}返回的是一个索引数组里有无数个关联数组，记得是个数组！！！
    connect.query(`SELECT *FROM image WHERE id=${id}`,(err,rows,field)=>{
        if(err){
            throw  err;
        }
        res.render(path.join(__dirname,"views/detail.ejs"),{
            image:rows[0]
        })
    })
});

app.listen(8080);