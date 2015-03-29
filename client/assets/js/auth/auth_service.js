var Firebase = require('firebase');

module.exports = AuthService;

function AuthService($firebaseAuth, $firebaseObject, $q) {
  let ref = new Firebase('https://til.firebaseio.com/');
  let auth = $firebaseAuth(ref);

  var user = null;

  return {
    requireAuth,
    authenticate,
    loginUser,
    getUser
  };

  function getUser() {
    return user;
  }

  function requireAuth() {
    return auth.$requireAuth();
  }

  function authenticate() {
    return auth.$waitForAuth();
  }

  function loginUser(provider) {
    return auth.$authWithOAuthPopup(provider).then(function (authData) {
      // Persist the user information.
      return saveData(authData);
    });
  }

  // Private helper functions.

  function saveData(data) {
    var promise;

    // Looks like each auth strategy has their own data.
    if (data.provider === 'github') {
      user = $firebaseObject(ref.child('users').child(data.github.username));
      promise = user.$loaded().then(() => {
        user.email = data.github.email;
        user.displayName = data.github.displayName;
        user.$save();

        return data;
      });
    }

    return promise;
  }
}
