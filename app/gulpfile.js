'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var watch = require('gulp-watch');
var autoprefixer = require('gulp-autoprefixer');

gulp.task('sass', function () {
    return gulp.src('../atbwallet/assets/scss/styles.scss')    
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer({
        browsers: ['last 2 versions'],
        cascade: false
    }))
    .pipe(gulp.dest('../atbwallet/assets/css'));
});

gulp.task('sass:watch', function () {
    gulp.watch('../atbwallet/assets/scss/_*.scss', ['sass']);
});

gulp.task('default', function() {
    gulp.run('sass', 'sass:watch');
    gulp.watch('../atbwallet/assets/scss/_*.scss', function(event) {
        gulp.run('sass');
    })
});
