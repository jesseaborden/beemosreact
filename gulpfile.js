'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('sass', function () {
  return gulp.src('css/sass/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./css/built'));
});

gulp.task('sass:watch', function () {
  gulp.watch('css/sass/**/*.scss', ['sass']);
});
