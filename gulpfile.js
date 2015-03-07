var fs = require('fs');
var files = fs.readdirSync('./tasks').filter(function (file) {
  return file !== 'directories.js';
});

files.forEach(function (file) {
  require('./tasks/' + file);
});
