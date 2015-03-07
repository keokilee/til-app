var gulp = require('gulp');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var mainFile = require('./directories').mainJS;

gulp.task('browserify', function() {
  browserify(mainFile)
    .bundle()
    .pipe(source('bundle.js'))
    .pipe(gulp.dest('./build/assets/js/'));
});
