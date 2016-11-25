/**
 * Created by dllo on 16/11/25.
 */
const express=require("express");
const ejs=require("ejs");
const path=require("path");
//这是用来解析post传过来的数据的第三方模块
const bodyParser=require('body-parser');

const app=express();
//设置模版引擎
app.set("view engine","ejs");
//设置模版路径
// app.set("views","./views");

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

//这是静态目录，这个目录下的文件，直接通过路径即可访问，不需要单独写路由，唯一一个由express提供的中间件
app.use(express.static("static"));


app.get("/form",(req,res)=>{
    res.render(path.join(__dirname,"views/form.ejs"),{});
    });
app.post("/form",(req,res)=>{
    console.log(req.body);
    // res.send("收到");
    res.json(req.body);
});

app.get("/p/:id",(req,res)=>{
    var id=req.params.id;
    //如果不用模版，就用send传给前端
    res.send(req.params.id);
})

app.listen(8080);