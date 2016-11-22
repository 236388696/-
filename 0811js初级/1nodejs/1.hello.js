/**
 * Created by dllo on 16/11/22.
 */
console.log("你好阿豪");
var a=10;
console.log(a);
//输出结果ctrl+shift+r


var b=function (index) {
    index++;
    console.log(index);
}

var a=(index) => {
    index++;
    console.log(index);
    //写不写return都有返回值
    //return index;
    index;
}
b(5);
a(90);

var x=120;
console.log(`李威的年龄是${x}`);