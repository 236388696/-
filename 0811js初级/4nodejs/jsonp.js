/**
 * Created by dllo on 16/12/2.
 */
const express=required("express");

var app=express();


app.get("/jsonp",(req,res)=>{
    console.log(req);
    var cb=req.query.callback;
    var dataStr=JSON.stringify({name:"weoweo",age:30})
});
  res.send('${cb}(${dataStr})');

app.listen(9999);