var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
var sassPaths = require('./directories').sassPaths;

gulp.task('sass', function() {
  return gulp.src('client/assets/scss/app.scss')
    .pipe($.rubySass({
      loadPath: sassPaths,
      style: 'nested',
      bundleExec: true
    })).on('error', function(e) {
      console.log(e);
    })
    .pipe($.autoprefixer({
      browsers: ['last 2 versions', 'ie 10']
    }))
    .pipe(gulp.dest('./build/assets/css/'));
});
