require('angularfire');

angular.module('til.main', ['firebase'])
.controller('ListController', require('./list_controller'));
