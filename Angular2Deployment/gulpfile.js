var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var minify = require('gulp-minify-css');

gulp.task('js', function(){
   gulp.src('src/js/*.js')
   .pipe(concat('script.js'))
   .pipe(uglify())
   .pipe(gulp.dest('aot/js/'));
});

gulp.task('css', function(){
   gulp.src('src/css/*.css')
   .pipe(concat('custom.css'))
   .pipe(minify())
   .pipe(gulp.dest('aot/css/'));
});

gulp.task('default',['js','css'],function(){
});