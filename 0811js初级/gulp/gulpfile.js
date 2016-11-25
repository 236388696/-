/**
 * Created by dllo on 16/11/24.
 */
const gulp=require("gulp");
//gulp-uglify压缩js的，用来做任务的
const uglify=require("gulp-uglify");

//任务的名叫script
gulp.task("script",function(){
    gulp.src("js/*.js").pipe(uglify()).pipe(gulp.dest("desk/js"));
})
gulp.task("auto",function () {
    gulp.watch("js/*js",["script"]);
})