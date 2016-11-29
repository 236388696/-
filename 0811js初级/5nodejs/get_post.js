/**
 * Created by dllo on 16/11/28.
 */
const express=require("express");

const app=express();

//get必须严格匹配/image,后面再拼接/xx路径都不会处理
app.get("/image",(req,res,next)=>{
    res.send("微微一笑");
});
app.use(express.static("public"));
app.use("/xx",(req,res)=>{
    res.send("猩猩一笑");
});

app.get("/name/:name",(req,res,next)=>{
    // res.send(req.params.name);
    if(!/\d+/.test(req.params.name)){
        res.send("我知道了你的名字是"+req.params.name);
    }else{
        //如果本次条件不符合,找下一个路由
        next();
    }
})

// app.get('/name/:id',(req,res,next)=>{
//     if(err){
//         next();
//     }
//     res.send("你的学号是"+req.params.id);
// })


//通过use函数，不传入路径参数，可以设置404页，即以上所有路由规则都不匹配
app.use((req,res)=>{
    res.send("404");
})
app.listen(9999);