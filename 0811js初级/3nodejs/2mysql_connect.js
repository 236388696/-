/**
 * Created by dllo on 16/11/24.
 */
const mysql=require("mysql");

var connent= mysql.createConnection({
    host:"localhost",
    port:3306,
    user:"root",
    password:"",
    //database相当于dbname端口号
    database:"0811"
});

connent.connect();

//查找
connent.query("SELECT * FROM user",(err,rows,field)=>{
    if(err){
        throw  err;
    }
    //打印出的rows是个数组形对象
    console.log(rows);
    // console.log(typeof field);
});
    connent.end();

//插入
// connent.query("INSERT INTO user (id,username,password,tel) VALUE (NULL,'张志强sb','123456','136041521230')",(err,field)=>{
//     if(err){
//         throw err;
//     }
//     console.log(field);
// });
// connent.end();







