var Firebase = require('firebase');

module.exports = ListController;

function ListController($scope, $state, authService, $firebaseArray) {
  let ref = new Firebase('https://til.firebaseio.com/');
  let thingsRef = ref.child('things');

  $scope.addThing = addThing;

  init();

  function init() {
    // Check if user is authenticated.
    authService.isAuthenticated(authData => {
      if (!authData) {
        $state.go('home');
      }
    });

    // Array of items.
    $scope.things = $firebaseArray(thingsRef).sort(itemCompare);
    $scope.things.$watch(() => {
      $scope.things.sort(itemCompare);
    });
  }

  function addThing(content) {
    var data = {
      content,
      timestamp: Firebase.ServerValue.TIMESTAMP
    };

    $scope.things.$add(data);
    $scope.itemText = "";
  }

  function itemCompare(a, b) {
    return a.timestamp < b.timestamp;
  }
}
