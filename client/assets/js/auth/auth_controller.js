var Firebase = require('firebase');

module.exports = LoginController;

LoginController.$inject = ['$scope', '$state', 'authService'];

function LoginController($scope, $state, authService) {
  authService.isAuthenticated(authData => {
    if (authData) {
      $state.go('list');
    }
  });

  $scope.loginUser = function (provider) {
    authService.loginUser(provider).then(authData => {
      console.log(`Logged in as: ${authData.uid}`);
      $state.go('list');
    }).catch(error => {
      console.log("Authentication failed:", error);
    });
  }
}
