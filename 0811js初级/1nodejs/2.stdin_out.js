/*** Created by dllo on 16/11/22.*/
//stdout标准输出
// process.stdout.write("李威");
// process.stdout.write("年龄不小了");

//     var x="zhang";
//    // users[x];
// for(i in users){
//     users[i];
// }

var users={
    "liwei":"xxx",
    "admin":"123456"
};


process.stdout.write("请输入用户名");
// console.log(Object.keys(users));

//保存输入的用户名
var username='';
//监听用户输入事件
process.stdin.on("data",function (input) {
    // console.log(`a${input.toString()}a`);
    //输入时，会把回车也算输入的一个内容，所以用trim()函数把\n去掉
    input=input.toString().trim();
    //输入的用户名不对
    if(username.length>0){
        //用户名输入正确，接下来输入密码
        var password=users[username];
        if(input===password){
            process.stdout.write("登录成功");process.exit();
        }else{
            process.stdout.write("密码错误");
        }

    }else{
        //用户名输入错误或第一次打开没有用户名，需要用户输入用户名
        //users下的keys值，等于－1，说明输入的用户名不对
        if(Object.keys(users).indexOf(input)==-1){
            process.stdout.write("用户名错误");
            username='';
        }else{
            // process.stdout.write("用户名正确");
            username=input;

            process.stdout.write("请输入密码");
        }
    }

});