var gulp = require('gulp');
var router = require('../bower_components/foundation-apps/bin/gulp-dynamic-routing');

gulp.task('copy-templates', ['copy'], function() {
  return gulp.src('./client/templates/**/*.html')
    .pipe(router({
      path: 'build/assets/js/routes.js',
      root: 'client'
    }))
    .pipe(gulp.dest('./build/templates'));
});
