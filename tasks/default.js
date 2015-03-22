var gulp = require('gulp');

// Default task: builds your app, starts a server, and recompiles assets when they change
gulp.task('default', ['build', 'server:start', 'bower'], function() {
  // Watch Sass
  gulp.watch(['./client/assets/scss/**/*', './scss/**/*'], ['sass']);

  // Watch JavaScript
  gulp.watch(['./client/assets/js/**/*', './js/**/*'], ['browserify']);

  // Watch static files
  gulp.watch(['./client/**/*.*', '!./client/assets/{scss,js}/**/*.*'], ['copy']);
});
