require('./auth');
require('./til');

angular.module('til.application', [
  'ui.router',
  'ngAnimate',

  //foundation
  'foundation',
  'foundation.dynamicRouting',
  'foundation.dynamicRouting.animations',

  // TIL modules
  'til.auth',
  'til.main'
])
.config(config)
.run(run);

config.$inject = ['$urlRouterProvider', '$locationProvider'];

function config($urlProvider, $locationProvider) {
  $urlProvider.otherwise('/');

  $locationProvider.html5Mode({
    enabled:false,
    requireBase: false
  });

  $locationProvider.hashPrefix('!');
}

function run() {
  FastClick.attach(document.body);
}
