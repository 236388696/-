/**
 * Created by dllo on 16/11/25.
 */
/**
 * Created by dllo on 16/11/25.
 */
const express=require("express");
const ejs=require("ejs");
const path=require("path");
const mysql=require("mysql");
//这是用来解析post传过来的数据的第三方模块
const bodyParser=require('body-parser');

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
//设置模版的路径
app.set("views","./views");

//设置静态目录
app.use(express.static("img"));

app.get("/zhoumo",(req,res)=>{
    connect.query("SELECT * FROM zhoumo",(err,rows,field)=>{
        if(err){
            throw err
        }
        //用模版render
        res.render(path.join(__dirname,"views/1_yemian.ejs"),{
            zhoumo:rows
        })
    })
});

// 更改原先的html的样子，叫渲染
app.get("/aa/:id",(req,res)=>{
    var id=req.params.id;
    //row是查找到返回的东西，id=${id}返回的是一个索引数组里有无数个关联数组，记得是个数组！！！
    connect.query(`SELECT *FROM zhoumo WHERE id=${id}`,(err,rows,field)=>{
        if(err){
            throw  err;
        }
        console.log(rows);
        res.render(path.join(__dirname,"views/2_yemian.ejs"),{
            zhoumo:rows[0]
        })
    })
});

//跳转到第三个页面
app.get("/3_yemian",(req,res)=>{
    res.render(path.join(__dirname,"views/3_yemian.ejs"),{});
});


//插入
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json());

app.post("/zhou",(req,res)=>{
    var body=req.body;
    console.log(body);
    connect.query("INSERT INTO zhoumo (id,title,img,content,liulan) VALUE (NULL,'小不点','../img/15.jpg','lalallalallala','55')",(err,field)=>{
        if(err){
            throw err;
        }
        res.render(path.join(__dirname,"views/3_yemian.ejs"),{
            // id:rows[0]["id"],
            // biao:row[0]["biao"],
            // zheng:row[0]["zheng"],
        })
        res.redirect("/zhoumo");
    })
});

// connent.end();

app.listen(8999);