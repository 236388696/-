/**
 * Created by dllo on 16/11/23.
 */
const fs=require("fs");

const  path=require("path");



//aSync异步 Sync同步
//同步读取文件（一个参数：路径，二个：写编码方式，一般是"utf8）
// var result= fs.readFileSync(path.join(__dirname,"../1nodejs/1.hello.js"),"utf8");
// console.log(result);


var error=new Error("李威不喜欢异性");
//抛异常
// throw  err;

console.log("开始读取");
//异步读取文件 错误优先
fs.readFile(path.join(__dirname,"../1nodejs/1.hello.js"),"utf8",(err,data)=>{
   if(err){
       console.log(err);
   }else{
       console.log(data);
   }
   console.log("我觉得在这才读取结束了");
});
console.log("读取结束了吗？");

//错误优先
/*function  readFile(path,utf8,callBack) {
    if("读取到了"){
        callBack(err,data);
    }else{
        callBack(err,data);
    }
}*/


fs.stat(path.join(__dirname,"../1nodejs/1.hello.js"),(err,stat)=>{
   if(err){
       throw err;
   }
   console.log(stat);
    //stat对象，可以判断当前的文件是不是file,dir
   // console.log(stat.isFinite());
   console.log(stat.isDirectory());

});



//异步写入文件，覆盖式的写入，文件没有的话，会创建
// fs.writeFile(path.join(__dirname,"./1.txt"),"李威说这里写utf7","utf8",(err,data)=>{
//     if(err){
//         throw err;
//     }
//     console.log(data);
// })


//同步写入
var res =fs.writeFileSync(path.join(__dirname,"./1.txt"),"这里是同步写的");
console.log(res);
