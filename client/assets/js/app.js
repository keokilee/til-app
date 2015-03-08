require('angularfire');


angular.module('til.application', [
  'ui.router',
  'ngAnimate',

  //foundation
  'foundation',
  'foundation.dynamicRouting',
  'foundation.dynamicRouting.animations'
])
  .config(config)
  .run(run)
;

config.$inject = ['$urlRouterProvider', '$locationProvider', '$stateProvider'];

function config($urlProvider, $locationProvider, $stateProvider) {
  $urlProvider.otherwise('/');

  $locationProvider.html5Mode({
    enabled:false,
    requireBase: false
  });

  $locationProvider.hashPrefix('!');

  $stateProvider
    .state('main', {
      url: '/',
      templateUrl: 'templates/home.html'
    });
}

function run() {
  FastClick.attach(document.body);
}
