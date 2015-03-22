var Firebase = require('firebase');

module.exports = LoginController;

function LoginController($state, authService) {
  var controller = this;

  authService.isAuthenticated(authData => {
    if (authData) {
      $state.go('list');
    }
  });

  controller.loginUser = function (provider) {
    authService.loginUser(provider).then(authData => {
      console.log(`Logged in as: ${authData.uid}`);
      $state.go('list');
    }).catch(error => {
      console.log("Authentication failed:", error);
    });
  }
}
