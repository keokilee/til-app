require('./auth');
require('./til');

angular.module('til.application', [
  'ui.router',
  'ngAnimate',

  //foundation
  'foundation',

  // TIL modules
  'til.auth',
  'til.main'
])
.config(config)
.run(run);

config.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider'];

function config($stateProvider, $urlProvider, $locationProvider) {
  $urlProvider.otherwise('/');

  $locationProvider.html5Mode({
    enabled:false,
    requireBase: false
  });

  $locationProvider.hashPrefix('!');

  $stateProvider
    .state('list', {
      url: '/list',
      controller: 'ListController',
      controllerAs: 'listCtrl',
      templateUrl: '/templates/list.html'
    })
    .state('home', {
      url: '/',
      controller: 'AuthController',
      controllerAs: 'authCtrl',
      templateUrl: '/templates/home.html'
    })
}

function run() {
  FastClick.attach(document.body);
}
