require('angularfire');

angular.module('til.main', ['firebase', 'til.auth'])
.controller('ListController', require('./list_controller'));
