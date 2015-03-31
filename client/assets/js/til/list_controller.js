var Firebase = require('firebase');

module.exports = ListController;

function ListController($firebaseArray, $state, authService, requireAuth) {
  let rootRef = new Firebase('https://til.firebaseio.com/');
  let thingsRef = rootRef.child('things').limitToLast(20);

  var controller = this;

  controller.addThing = addThing;
  controller.logout = logout;

  init();

  function init() {
    // Array of items.
    controller.things = $firebaseArray(thingsRef);
  }

  function addThing(content) {
    var data = {
      content,
      timestamp: Firebase.ServerValue.TIMESTAMP,
      author: requireAuth.uid
    };

    controller.things.$add(data).then((ref) => {
      let id = ref.key();
      let userRef = rootRef.child(`/users/${requireAuth.uid}/things/${id}`).set(true);
    });
    controller.itemText = "";
  }

  function logout() {
    authService.logout().then(() => $state.go('home'));
  }
}
