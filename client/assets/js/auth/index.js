require('angularfire');

angular.module('til.auth', ['firebase'])
.controller('AuthController', require('./auth_controller'));
