//布置任务 先引入gulp模块 使用require（）方法引入
//定义一个变量
var gulp = require("gulp");
//引入插件
var sass = require("gulp-sass");//将sass文件转成css文件
var cssmin = require("gulp-cssmin");//压缩css文件
var uglify = require("gulp-uglify");//压缩js文件
var concat = require("gulp-concat");//合并相同文件（需要提供参数）
var rename = require("gulp-rename");//重命名（需要提供参数）
var imagemin = require("gulp-imagemin");//压缩图片文件
var babel = require("gulp-babel");
var es2015 = require("babel-preset-es2015");
gulp.task("comcss",function(){
	gulp.src("css/*.css").pipe(cssmin())  
						 .pipe(rename({"suffix":".min"})) 
						 .pipe( gulp.dest("./dest") )
});
gulp.task("comjs",function(){
	//console.log(456)
	gulp.src("js/*.js").pipe(rename({"suffix":".min"}))
							.pipe(babel({presets:[es2015]}))
							.pipe(uglify())
							.pipe(gulp.dest("./destone"))
})
gulp.task("comImg",function(){
	gulp.src("images/*").pipe(imagemin())
						 .pipe(rename({"suffix":".min"})) 
						 .pipe( gulp.dest("./destImg") )
});
/*gulp.task("a",function(){
	console.log( "张志和那个")
})*/
