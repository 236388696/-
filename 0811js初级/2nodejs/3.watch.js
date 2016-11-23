/**
 * Created by dllo on 16/11/23.
 */
const  fs=require("fs");
const  path=require("path");

//文件监听：观察文件的变化，每隔100秒看一下； curr:当前， prev:之前
//第二个参数是一个对象，用来设置监听的时间间隔，回调函数两个参数，一个是变化之后的stat对象，另一个是变化之前的stat对象
fs.watchFile(path.join(__dirname,"./1.txt"),{interval:100},function (curr,prev) {
    console.log(curr);
    console.log(prev);
})
