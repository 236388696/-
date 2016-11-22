/**
 * Created by dllo on 16/11/22.
 */
console.log("开始执行");
console.time("a");
var x=1;
x++;
console.log(x);

setInterval(function () {
    console.log("今天上课有点想老张了");
},1000);

setTimeout(function () {
    for(var i=0;i<100000;i++){

    }
},0);


console.log(x);
console.log("结束执行");
console.timeEnd("a");