/**
 * Created by dllo on 16/11/22.
 */
//引入一个模块require函数("引入的东西")
var fs=require("fs");

var http=require("http");

//node中引入模块有3种方式
//1.通过路径直接引入
var per=require("./bao/test");
per.kiss();

//2.把模块放在node_modules目录下，通过文件夹的名字引入
//在模块文件夹下的package.json中设置main属性来指定模块中的入口文件
var mokuai=require("mokuai");
console.log(mokuai.name);

//3.在模块文件夹下，入口文件起名为index.js,不需要package.json
var mokuai2=require("mokuai2");
console.log(mokuai2.a);
console.log(module.paths);



var _1=require("./bao/1");
var result2=_1(4);
console.log(result2);

var result=fs.readFileSync("1.hello.js");
console.log(result);

http.createServer(function (request,response) {
    response.end("你好啦啦啦啦");
}).listen(8080);