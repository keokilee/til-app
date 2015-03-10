var Firebase = require('firebase');

module.exports = LoginController;

LoginController.$inject = ['$scope', '$state', '$firebaseAuth'];

function LoginController($scope, $state, $firebaseAuth) {
  let ref = new Firebase('https://til.firebaseio.com/');
  var auth = $firebaseAuth(ref);

  auth.$onAuth(authData => {
    console.log(authData);
    if (authData) {
      $state.go('list');
    }
  });

  $scope.loginUser = function (provider) {
    auth.$authWithOAuthPopup(provider).then(authData => {
      console.log(`Logged in as: ${authData.uid}`);
      $state.go('list');
    }).catch(error => {
      console.log("Authentication failed:", error);
    });
  };
}
