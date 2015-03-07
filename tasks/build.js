var gulp = require('gulp');
var sequence = require('run-sequence');

// Builds your entire app once, without starting a server
gulp.task('build', function() {
  sequence('clean', ['copy', 'sass', 'uglify'], 'copy-templates', function() {
    console.log("Successfully built.");
  })
});
