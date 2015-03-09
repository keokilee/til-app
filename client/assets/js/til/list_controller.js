var Firebase = require('firebase');

module.exports = ListController;

ListController.$inject = ['$scope', '$state'];

function ListController($scope, $state) {
  var ref = new Firebase('https://til.firebaseio.com/things');
}
