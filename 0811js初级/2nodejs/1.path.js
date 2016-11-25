/**
 * Created by dllo on 16/11/23.
 */
//定义常量
const path=require("path");
//打印文件夹所在目录，终端打不了，因为终端不在当前目录下
console.log(__dirname);
//打印文件所在目录
console.log(__filename);



//去掉后缀，所以打印文件名，没有后缀
console.log(path.basename(__filename,".js"));
console.log(path.basename(__filename,"s"));


//获取文件夹
console.log(path.dirname(__filename));
//获取当前文件的后缀名
console.log(path.extname(__filename));



//把你写的相对路径转成绝对路径
console.log(path.join(__dirname,"../1nodejs","bao/1.hello.js"));


//判断是不是绝对路径，是就是true
//相对路径，就是false
console.log(path.isAbsolute("../1nodejs"));
console.log(path.isAbsolute("__filename"))
//绝对路径就是true
console.log(path.isAbsolute("/Users/dllo/Documents/LearnJS/0811js初级/2nodejs"));


//把一个路径字符串，转成一个对象
console.log(path.parse("__filename"));


//把一个路径对象，转成字符串
var pathObj=path.parse(__filename);
console.log(path.format(pathObj));


//从第一个参数到第二个参数相对路径
console.log(path.relative("../1nodejs/bao/1.js","../1nodejs"));

//判断操作系统，posix是Unix,win32是windows
console.log(path==path.win32);
console.log(path==path.posix);







