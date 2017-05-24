/*
 * Created by Administrator on 2017/5/9.
 */
const gulp = require('gulp');
const uglify = require('gulp-uglify');//js压缩
const cleanCSS = require('gulp-clean-css');//css的压缩
const webserver = require('gulp-webserver');//web服务热启动
//js压缩
gulp.task('js', function () {
    gulp.src('src/js/**/*.js')
        .pipe(gulp.dest('./build/js'));
});
//css
gulp.task('css', function () {
    gulp.src('src/css/*.css')
        .pipe(cleanCSS())//css压缩
        .pipe(gulp.dest('./build/css'));
});

//html
gulp.task('html', function () {
    gulp.src('./src/html/**/*.html')
        .pipe(gulp.dest('./build/html'));
});
//执行全部
gulp.task("build", ["js", "css", "html"]);
//启动服务
gulp.task("webserver", ["build"], function () {
    gulp.watch("./src/css/*.ss", ["css"]);
    gulp.watch("./src/html/**/*.html", ["html"]);
    setTimeout(function () {
        gulp.src('./build')
            .pipe(webserver({
                livereload: true,
                directoryListing: true,
                open: "/html/index.html"
            }));
    }, 1000);

});