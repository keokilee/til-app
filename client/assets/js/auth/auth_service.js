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
    getUser,
    logout
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
    return auth.$authWithOAuthPopup(provider).then((authData) => {
      // Persist the user information.
      return saveData(authData);
    });
  }

  function logout() {
    return auth.$unauth();
  }

  // Private helper functions.

  function saveData(data) {
    var promise;

    // Looks like each auth strategy has their own data.
    if (data.provider === 'github') {
      user = $firebaseObject(ref.child('users').child(data.uid));
      promise = user.$loaded().then(() => {
        user.email = data.github.email;
        user.displayName = data.github.displayName;
        user.username = data.github.username;
        user.avatar_url = data.github.cachedUserProfile.avatar_url;
        user.$save();

        return data;
      });
    }

    return promise;
  }
}
