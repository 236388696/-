/**
 * Created by dllo on 16/11/25.
 */
const  express=require("express");
const cookieParser=require("cookie-parser");

var app=express();
app.use(cookieParser());
app.get("/",(req,res)=>{
    if(req.cookies.visited){
        res.send("又来了");
    }else{
        //设置cookie
        res.cookie("visited","1",{
            //最大有效时间
            maxAge: 1000*30
        })
        res.send("第一次");

    }
    //json()转换成json字符串
    // res.json(req.cookies);
})


app.listen(8080);