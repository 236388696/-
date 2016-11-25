/**
 * Created by dllo on 16/11/24.
 */
const http=require("http");
const mysql=require("mysql");
const ejs=require("ejs");
const path=require("path");

var connect=mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"0811"
});
connect.connect();

var server=http.createServer((req,res)=>{
    // res.writeHead(200,{
    //     "Content-type":"text/html;charset=utf8;"
    // });
    connect.query("SELECT * FROM user",(err,rows,field)=>{
        // rows.forEach((item)=>{
        //     res.write(item.username+"<br>");
        //     // res.write("<li>"+item.username+"</li>");
        // })

        ejs.renderFile(path.join(__dirname,"4index.ejs"),{
            title:"重大新闻",
            users:rows
        },(err,data)=>{
            if(err){
                throw  err;
            }
            res.write(data);
            res.end();
        })
    })
});
server.listen(8880);

