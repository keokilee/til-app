var Firebase = require('firebase');

module.exports = AuthController;

AuthController.$inject = ['$scope', '$firebaseAuth'];

function AuthController($scope, $firebaseAuth) {
  var controller = this;

  var ref = new Firebase('https://til.firebaseio.com/"');
  var auth = $firebaseAuth(ref);

  $scope.loginUser = function() {
    console.log('yo');
    auth.$authWithOAuthPopup("github").then(function(authData) {
      console.log("Logged in as:", authData.uid);
    }).catch(function(error) {
      console.log("Authentication failed:", error);
    });
  };
}
