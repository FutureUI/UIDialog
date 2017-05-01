var gulp=require('gulp');
// var sass = require('gulp-sass'); //sass
// var autoprefixer = require('gulp-autoprefixer');//前缀文件
// var cssmin = require('gulp-minify-css');//css压缩
var uglify = require('gulp-uglify'); //js压缩
// var concat = require('gulp-concat');//文件合并
var rename = require('gulp-rename');//文件更名
// var notify = require('gulp-notify');//提示信息


gulp.task('default', function () {
	//编译所有scss文件
   	gulp.src('./UIDialog.js')
        .pipe(uglify())
        .pipe(rename('UIDialog.min.js'))
        .pipe(gulp.dest('./docs/temp/'))
        .pipe(gulp.dest('./'));

    gulp.src('./skin/*.css')
    	.pipe(gulp.dest('./docs/temp/'));
});
