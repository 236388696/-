/**
 * Created by dingjz on 2016/11/28.
 */
const express = require("express");
const ejs = require("ejs");
const path = require("path");

//引入控制器
const router = require("./controller/router");

var app = express();

//设置静态文件路径
app.use(express.static("public"));
//设置模板引擎
app.set("view engine", "ejs");
//设置模板所在路径
app.set("views", "views");



//主页
app.get("/", router.showAll);
//详情页
app.get("/detail/:id", router.showDetail);
//上传页
app.get("/upload", router.showUpload);
//表单提交页
app.post("/upload", router.formSubmit);

app.listen(8080);