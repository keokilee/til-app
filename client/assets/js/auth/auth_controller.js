var Firebase = require('firebase');

module.exports = LoginController;

function LoginController($state, authService, isAuthenticated) {
  var controller = this;

  if (isAuthenticated) {
    $state.go('list');
  }

  controller.loginUser = function (provider) {
    authService.loginUser(provider).then(authData => {
      $state.go('list');
    }).catch(error => {
      console.log("Authentication failed:", error);
    });
  }
}
