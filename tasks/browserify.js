var gulp = require('gulp');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var mainFile = require('./directories').mainJS;
var babelify = require('babelify');

gulp.task('browserify', function() {
  browserify({debug: true})
    .transform(babelify)
    .require(mainFile, {entry: true})
    .bundle()
    .pipe(source('bundle.js'))
    .pipe(gulp.dest('./build/assets/js/'));
});
