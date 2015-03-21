var Firebase = require('firebase');

module.exports = AuthService;

AuthService.$inject = ['$firebaseAuth'];

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
      saveData(authData);
      callback(authData);
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
    // Looks like each auth strategy has their own data.
    if (data.provider === 'github') {
      let user = $firebaseObject(ref.child('users').child(data.github.email));
      user.$loaded().then(() => {
        user.name = data.github.displayName;
        user.username = data.github.username;
        user.$save();
      });
    }
  }
}
