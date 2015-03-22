var gulp = require('gulp');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var mainFile = require('./directories').mainJS;
var babelify = require('babelify');
var ngAnnotate = require('browserify-ngannotate');

gulp.task('browserify', function() {
  browserify({debug: true})
    .transform(babelify)
    .transform(ngAnnotate)
    .require(mainFile, {entry: true})
    .bundle()
    .pipe(source('bundle.js'))
    .pipe(gulp.dest('./build/assets/js/'));
});
