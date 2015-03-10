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

  function isAuthenticated(success, fail) {
    // Function stub for failure case.
    fail = fail || function() {};

    auth.$onAuth(authData => {
      authData ? success(authData) : fail();
    });
  }

  function loginUser(provider) {
    return auth.$authWithOAuthPopup(provider);
  }
}
