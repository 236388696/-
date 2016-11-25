/**
 * Created by dllo on 16/11/25.
 */
//文件上传：formidable
const express=require("express");
const formidable =require("formidable");
const fs=require("fs");
const path=require("path");

var app=express();
app.use(express.static("static"));

app.post("/up",(req,res)=>{
    var form=new formidable.IncomingForm();
    //设置上传文件的临时存放目录
    form.uploadDir="upload_temp";
    //解析表单内容
    form.parse(req,(err,field,files)=>{
        if(err){
            throw err;
        }
        //console.log(field):是前台输入的内容传回来，是个对象格式
        console.log(field);
        console.log(files);

        var imgName=new Date().getTime()+path.extname(files["img"]["name"]);
        //异步rename
        //php里双引号可以给解析出来"$openid"-->123; 单引号''就解析不出来，只能显示$openid
        //es6下，｀｀跟php里的""双引号是一回事，可以被解析出来。
        fa.
        fs.rename(files["img"]["path"],`static/${imgName}`,function (err) {
            if(err){
                throw err;
            }
            res.send("上传成功");
        });
        // res.send("收到");
    })
})


app.listen(9999);