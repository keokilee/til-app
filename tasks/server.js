var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
var modRewrite = require('connect-modrewrite');

// Starts a test server, which you can view at http://localhost:8080
gulp.task('server:start', function() {
  $.connect.server({
    root: './build',
    middleware: function() {
      return [
        modRewrite(['^[^\\.]*$ /index.html [L]'])
      ];
    },
  });
});
