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
    'bower_components/modernizr/modernizr.js',
    "bower_components/jquery/dist/jquery.js",
    "bower_components/fastclick/lib/fastclick.js",
    "bower_components/jquery.cookie/jquery.cookie.js",
    "bower_components/jquery-placeholder/jquery.placeholder.js",
    "bower_components/foundation/js/foundation.js"
  ])
  .pipe(gulp.dest('./build/assets/js'));

  // Bower css files.
  gulp.src([
    'bower_components/foundation-icon-fonts/foundation-icons.css',
    'bower_components/foundation/css/foundation.css',
    'bower_components/foundation/css/foundation.css.map'
  ])
  .pipe(gulp.dest('./build/assets/css'));
});
