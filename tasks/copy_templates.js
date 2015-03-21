var gulp = require('gulp');

gulp.task('copy-templates', ['copy'], function() {
  return gulp.src('./client/templates/**/*.html')
    .pipe(gulp.dest('./build/templates'));
});
