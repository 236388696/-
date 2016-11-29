/**
 * Created by dingjz on 2016/11/28.
 */
const mysql = require("mysql");

var connect = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "",
    database: "0811"
});

connect.connect();

// module.exports={
//     a:1,
//     add:function () {
//         return 2;
//     }
// }

//在模块内部，可以省略module关键字
// module.exports.xx=xx;
// exports.xx=xx;


//在模块内部, 可以省略module关键字
var a = null;
//从数据库中查找所有数据, 给主页显示
exports.selectAllNews = (callback) => {
    connect.query("SELECT * FROM news", (err, rows, field) => {
        callback(err, rows);
    })
};

//根据id查找具体某一条数据, 给detail页显示
exports.selectNewById = (id, callback) => {
    connect.query(`SELECT * FROM news WHERE id=${id}`, (err, rows, field) => {
        callback(err, rows[0]);
    })
}


//上传一条新闻
exports.uploadNew = (newObj, callback) => {
    connect.query(`INSERT INTO news(title,content,imgpath) VALUE('${newObj.title}','${newObj.content}','${newObj.imgpath}')`, (err, field) => {
        callback(err, field.affectedRows);
    })
};
