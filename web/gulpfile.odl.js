var gulp = require('gulp'),
    gutil = require('gulp-util'),
    connect = require('gulp-connect'),
    concat = require('gulp-concat'),
    sourcemaps = require('gulp-sourcemaps');

var htmlSources = ['production/*.html'];
var cssSources = ['production/css/application.css' ];
var jsSources = [
  'production/vendors/angular/angular.min.js',
  'production/vendors/angular-ui-router/release/angular-ui-router.min.js',
  'production/app-declaration/common.js',
  'production/services/**/*.js',
  'production/common/**/*.js',
  'production/components/**/*.js',
  'production/pages/**/*.js'
];

gulp.task('html', function(){
  gulp.src(htmlSources)
      .pipe(connect.reload())
});

gulp.task('css', function () {
    gulp.src(cssSources)
    .pipe(connect.reload());
});

gulp.task('js', function () {
  return gulp.src(jsSources)
    .pipe(sourcemaps.init())
      .pipe(concat('app.js'))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('production/js/'))
    .pipe(connect.reload());
});

gulp.task('connect', function() {
  connect.server({
    root: 'production/',
    livereload: true
    });
  });

gulp.task('watch', function() {
  gulp.watch(htmlSources, ['html']);
  gulp.watch(cssSources, ['css']);
  gulp.watch(jsSources, ['js']);
});

gulp.task('default', ['connect', 'watch', 'html', 'js']);
