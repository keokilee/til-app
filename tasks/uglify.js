var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
var dirs = require('./directories');

gulp.task('uglify', function() {
  // Foundation JavaScript
  gulp.src(dirs.foundationJS)
    .pipe($.uglify({
      beautify: true,
      mangle: false
    }).on('error', function(e) {
      console.log(e);
    }))
    .pipe($.concat('foundation.js'))
    .pipe(gulp.dest('./build/assets/js/'))
  ;

  // App JavaScript
  return gulp.src(dirs.appJS)
    .pipe($.uglify({
      beautify: true,
      mangle: false
    }).on('error', function(e) {
      console.log(e);
    }))
    .pipe($.concat('app.js'))
    .pipe(gulp.dest('./build/assets/js/'))
  ;
});
