/**
 * Created by dllo on 16/11/24.
 */
const http=require("http");
const queryString=require("querystring");


//http.get(第一个参数是网址，第二个参数是回调函数)
http.get("http://baidu.com",(res)=>{
    console.log(res);
    res.on("data",(data)=> {
        console.log(data.toString());
    })
});


//http.request()
// xx=xx&xx=xx=>{xx:xx};把对象格式解析成字符串
// var bodyStr=queryString.stringify({
//     username:"weiwei",
//     password:"123"
// })
//
// var options={
//     hostname:"localhost",
//     port:8888,
//     path:"/login_post",
//         method:"POST",
//     headers:{
//         "Content-type":"application/x-www-form-urlencoded"
//     }
// }
// var req=http.request(options,(res)=>{
//     res.on("data",(data)=>{
//         console.log(data.toString());
//     })
//     res.on("end",()=>{
//         console.log("没了");
//     })
// })
// req.write(bodyStr);
// req.end();


// https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid=wxecc6f7c23de98760&secret=cbba670f1c7f6396b4a718a85ecd0fde
//
// https://api.weixin.qq.com/cgi-bin/qrcode/create?access_token=FgOYqEEqM-JM6FVuA8j_20elTg-xnVx-uzqNEhNC8e9AfDyVT8lJZQGXcGEZIrxCdApMX6SE34sMRN8CoQOMxu8NxFV2DFWF_u0OsLYoCZFI5X1IdqUFXjPiIRZwHIcMNHMcAHAEYD

