/**
 * Created by dllo on 16/11/24.
 */
const  http=require("http");
const  ejs=require("ejs");
const  path=require("path");

http.createServer((req,res)=>{
    // var html= ejs.render("李威爱<%= who%>",{
    //     who:"大王"
    // });

    ejs.renderFile(path.join(__dirname,"./4index.ejs"),{
        title:"重大新闻",
        hello:"李威不爱大王"
    },(err,data)=>{
        if(err){
            throw  err;
        }
        res.write(data);
    });

    // res.write(html);
    res.end();
}).listen(8889);