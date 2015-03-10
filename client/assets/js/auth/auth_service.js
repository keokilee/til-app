var Firebase = require('firebase');

module.exports = AuthService;

AuthService.$inject = ['$firebaseAuth'];

function AuthService($firebaseAuth) {
  let ref = new Firebase('https://til.firebaseio.com/');
  var auth = $firebaseAuth(ref);

  return {
    isAuthenticated,
    loginUser
  };

  function isAuthenticated(callback) {
    auth.$onAuth(callback);
  }

  function loginUser(provider) {
    return auth.$authWithOAuthPopup(provider);
  }
}
