require('angularfire');

angular.module('til.auth', ['firebase'])
.service('authService', require('./auth_service'))
.controller('AuthController', require('./auth_controller'));
