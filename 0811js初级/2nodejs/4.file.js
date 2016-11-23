/**
 * Created by dllo on 16/11/23.
 */
const  fs=require("fs");
//mkdir创建文件夹
const path=require("path");
//异步
// fs.mkdir(path.join(__dirname,"../1nodejs/a"),function (err) {
//     if(err){
//         throw err;
//     }
// });

//只能删除空文件夹
fs.rmdirSync(path.join(__dirname,"../1nodejs/a"));


//删文件
// fs.unlink(parh.join(__dirname,"2.txt"),(err)=>{
//     if(err){
//         throw err;
//     }
// })