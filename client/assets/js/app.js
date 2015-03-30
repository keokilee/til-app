var angular = require('angular');

require('angular-ui-router');
require('angular-animate');
require('angular-moment');

require('./auth');
require('./til');

angular.module('til.application', [
  'ui.router',
  'ngAnimate',
  'angularMoment',

  // TIL modules
  'til.auth',
  'til.main'
])
.config(config)
.run(run);

function config($stateProvider, $urlRouterProvider, $locationProvider) {
  $urlRouterProvider.otherwise('/');

  $locationProvider.html5Mode({
    enabled: false,
    requireBase: false
  });

  $stateProvider
    .state('list', {
      url: '/list',
      controller: 'ListController',
      controllerAs: 'listCtrl',
      templateUrl: '/templates/list.html',
      resolve: {
        requireAuth
      }
    })
    .state('home', {
      url: '/',
      controller: 'AuthController',
      controllerAs: 'authCtrl',
      templateUrl: '/templates/home.html',
      resolve: {
        isAuthenticated
      }
    });
}

function run($rootScope, $state) {
  FastClick.attach(document.body);

  // Handle state change errors.
  $rootScope.$on('$stateChangeError', (event, toState, toParams, fromState, fromParams, error) => {
    if (error === 'AUTH_REQUIRED') {
      $state.go('home');
    }
  });
}

// Resolve helpers.
function requireAuth(authService) {
  return authService.requireAuth();
}

function isAuthenticated(authService) {
  return authService.authenticate();
}
