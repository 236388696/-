/**
 * Created by dllo on 16/11/23.
 */
const http = require("http");
const fs = require("fs");
const path = require("path");
const url = require("url"); //url 做解析
const queryString = require("querystring"); // queryString

var server = http.createServer((req, res) => {
    var urlObj = url.parse(req.url, true);

    switch (urlObj.pathname) {
        case "/7.form.html":
            //同步
            var result = fs.readFileSync(path.join(__dirname, "./7.form.html"), "utf8");
            res.writeHead(200, {
                "Content-type": "text/html"
            });
            res.write(result);
            break;
        case "/login":
            res.writeHead(200, {
                "Content-type": "text/html;charset:utf-8"
            });
            // var username=urlObj.query["username"];
            var queryObj = urlObj.query;
            if (queryObj.username == "liwei" && queryObj.password == "123") {
                res.write("登录成功");
            } else {
                res.write("用户名密码错误");
            }
            res.end();
            break;
        case "/8.form_post.html":
            var result = fs.readFileSync(path.join(__dirname, "./8.form_post.html"), "utf8");
            res.writeHead(200, {
                "Content-type": "text/html"
            });
            res.write(result);
            res.end();
            break;

        // case"/login_post":
            // // 使用post访问服务器的时候，request会响应data事件，所以需要通过req.on("data",fun)来绑定data事件，获取前端通过post传过来的数据
            // req.on("data",   function (data) {
            //    console.log(data.toString());
            //     res.end();
            // });
            // //post发送数据结束后，触发end事件
            // req.on("end",()=>{
            //     console.log("没有了")
            // });


        case"/login_post":
        //使用post访问服务器的时候，request会响应data事件，所以需要通过req.on("data",fun)来绑定data事件，获取前端通过post传过来的数据
            if (req.method == "POST") {
                req.on("data",   function (data) {
                   //data返回的是一个16进制的数，用toString()解析成字符串格式
                    var postData =  queryString.parse(data.toString());
                    console.log(postData.username);
                    console.log(postData.password);
                    res.write(JSON.stringify(postData));

                    res.end();
                });
                //post发送数据结束后，触发end事件
                req.on("end", () => {
                    console.log("没有了")
                });
            }

            break;
        default:
            break;

    }
});
       server.listen(8000);