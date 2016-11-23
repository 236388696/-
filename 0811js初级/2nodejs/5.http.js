/**
 * Created by dllo on 16/11/23.
 */
const http=require("http");
const fs=require("fs");
const path=require("path");
const url=require("url");


var server=http.createServer(function(request,response) {
    // console.log(request.url);
    //parse解析,把请求的url解析成一个对象，第二个参数为true的话，会把get请求的参数，解析成对象(?xx=xx)=>{xx:xx}
    var urlObj=url.parse(request.url,true);
    console.log(urlObj);

    if(urlObj.pathname=="/"){
        response.end("这是根目录");
    }else if(urlObj.pathname=="/a.html"){
        var query=urlObj.query;
        //把字符串转对象
        response.write(JSON.stringify(query));
        response.end("你找a干什么");
    }else{
        response.writeHead(200,{
            //plain普通文本，都会输出出来
            "Content-type":"text/plain"

            //html，都会渲染出来
            // "Content-type":"text/html"
        });
        var result=fs.readFileSync(path.join(__dirname,"6.test.html"),"utf8");
        // 输出东西response.write
        // response.write("大耳朵图图");

        response.write(result);

        //response.end 响应结束了，添加内容，也可以不写内容
        // response.end("阿豪再见");
        response.end();
    }


});
//监听8080端口
server.listen(8080);