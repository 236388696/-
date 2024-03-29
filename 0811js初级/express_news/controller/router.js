/**
 * Created by dingjz on 2016/11/28.
 */
//引入model模块
const model = require("../model/new");
const formidable = require("formidable");
const fs = require("fs");
const path = require("path");

//显示主页所有数据
exports.showAll = (req, res) => {
    //model去从数据库中获取所有数据列表, 通过回调函数传值
    model.selectAllNews((err, rows) => {
        if (err) {
            throw err;
        }
        res.render("index", {
            rows: rows
        });
    });

};

//显示详情
exports.showDetail = (req, res) => {
    var id = req.params.id;
    model.selectNewById(id, (err, row) => {
        if (err) {
            throw err;
        }
        res.render("detail", {
            item: row
        })
    })
};

//显示上传
exports.showUpload = (req, res) => {
    res.render("upload", {});
};

//提交上传
exports.formSubmit = (req, res) => {
    var form = new formidable.IncomingForm();
    //设置上传的临时路径
    form.uploadDir = "tmp";
    form.parse(req, (err, field, files) => {
        if (err) {
            throw err;
        }
        //field: {title: '', content: xx}
        var imgName = new Date().getTime()+path.extname(files["img"]["name"]);
        fs.rename(files["img"]["path"], `public/img/${imgName}`, (err) => {
            if (err) {
                throw err;
            }
            var imgPath = `http://localhost:8080/img/${imgName}`;
            model.uploadNew({
                title: field.title,
                content: field.content,
                imgpath: imgPath
            }, (err, affectRows) => {
                if (err) {
                    throw err;
                }
                if (affectRows > 0) {
                    // header("Location: index.html");
                    //重定向, 相当于跳转
                    res.redirect("/");
                }
            })

        })

    })

};