var gulp = require('gulp');

// Copies user-created files and Foundation assets
gulp.task('copy', function() {
  var dirs = [
    './client/**/*.*',
    '!./client/assets/{scss,js}/**/*.*'
  ];

  // Everything in the client folder except templates, Sass, and JS
  gulp.src(dirs, {
    base: './client/'
  })
  .pipe(gulp.dest('./build'));

  // Bower javascript files.
  gulp.src([
    "bower_components/foundation/js/foundation.js"
  ])
  .pipe(gulp.dest('./build/assets/js'));

  // CSS files
  gulp.src([
    'node_modules/angular-material/angular-material.css',
    'bower_components/foundation-icon-fonts/foundation-icons.css',
    'bower_components/foundation-icon-fonts/foundation-icons.woff',
    'bower_components/foundation-icon-fonts/foundation-icons.ttf',
    'bower_components/foundation/css/foundation.css',
    'bower_components/foundation/css/foundation.css.map'
  ])
  .pipe(gulp.dest('./build/assets/css'));
});
