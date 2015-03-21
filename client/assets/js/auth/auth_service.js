var Firebase = require('firebase');

module.exports = AuthService;

AuthService.$inject = ['$firebaseAuth', '$firebaseObject'];

function AuthService($firebaseAuth, $firebaseObject) {
  let ref = new Firebase('https://til.firebaseio.com/');
  let auth = $firebaseAuth(ref);

  return {
    isAuthenticated,
    loginUser
  };

  function isAuthenticated(callback) {
    auth.$onAuth((authData) =>{
      // Save the auth data.
      saveData(authData).then(() => {
        callback(authData);
      });
    });
  }

  function loginUser(provider) {
    return auth.$authWithOAuthPopup(provider).then(function (authData) {
      // Persist the user information.
      saveData(authData);
      return authData;
    });
  }

  function saveData(data) {
    var promise;

    // Looks like each auth strategy has their own data.
    if (data.provider === 'github') {
      let user = $firebaseObject(ref.child('users').child(data.github.username));
      promise = user.$loaded().then(() => {
        user.email = data.github.email;
        user.displayName = data.github.displayName;
        user.$save();
      });
    }

    return promise;
  }
}
