var Firebase = require('firebase');

module.exports = ListController;

function ListController($firebaseArray, requireAuth) {
  let ref = new Firebase('https://til.firebaseio.com/things');
  let thingsRef = ref.child(requireAuth.uid);

  var controller = this;

  controller.addThing = addThing;

  init();

  function init() {
    // Array of items.
    controller.things = $firebaseArray(thingsRef).sort(itemCompare);
    controller.things.$watch(() => {
      controller.things.sort(itemCompare);
    });
  }

  function addThing(content) {
    var data = {
      content,
      timestamp: Firebase.ServerValue.TIMESTAMP
    };

    controller.things.$add(data);
    controller.itemText = "";
  }

  function itemCompare(a, b) {
    return a.timestamp < b.timestamp;
  }
}
