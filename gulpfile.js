var gulp = require('gulp');
var jsMin = require('gulp-uglify');
var concat = require('gulp-concat');
var cssMin = require('gulp-cssnano');
var htmlMin = require('gulp-htmlmin');

gulp.task('test', function () {
    gulp.src(['./index.js','./test.js'])
    .pipe(concat('test1.js'))
    .pipe(jsMin())
    .pipe(gulp.dest('./tip'));
});

gulp.task('style',function(){
    gulp.src(['base.css','index.css'])
    .pipe(concat('main.css'))
    .pipe(cssMin())
    .pipe(gulp.dest('./css'));

});
gulp.task('htmlTest',function(){
    gulp.src("./index.html")
    .pipe(htmlMin({collapseWhitespace: true}))
    .pipe(gulp.dest('./html'))
});
