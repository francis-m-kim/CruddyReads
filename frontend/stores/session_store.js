var AppDispatcher = require('../dispatcher/dispatcher.js');
var Store = require('flux/utils').Store;

var SessionStore = new Store(AppDispatcher);

var _currentUser = {}, _errors = {};
var _currentUserHasBeenFetched = false;



SessionStore.login = function(user) {
  _currentUser = user;
  _currentUserHasBeenFetched = true;
};



SessionStore.logout = function(){
  _currentUser = {};
  _errors = {};
  _currentUserHasBeenFetched = true;
};

SessionStore.currentUserHasBeenFetched = function() {
  return _currentUserHasBeenFetched;
};




SessionStore.currentUser = function(){

  if (_currentUser) {
  	return $.extend({}, _currentUser);
  }
};

SessionStore.isUserLoggedIn = function () {
  return !!_currentUser.id;
};


SessionStore.setErrors = function(errors){

  _errors = errors;
};
SessionStore.setSignUpErrors = function(errors){
  _errors['signup'] = errors
};
SessionStore.setSignInErrors = function(errors){
  _errors['signin'] = errors
};

SessionStore.errors = function(){

  return _errors;
};

SessionStore.signUpErrors = function(){
  return _errors['signup'];
};
SessionStore.signInErrors = function(){
  return _errors['signin'];
};

SessionStore.__onDispatch = function(payload) {
  switch(payload.actionType) {
    case "LOGIN":
      SessionStore.login(payload.user);
      SessionStore.__emitChange();
      break;
    case "LOGOUT":
      SessionStore.logout();
      SessionStore.__emitChange();
      break;
    case "SIGN_UP_ERROR":
      SessionStore.setSignUpErrors(payload.errors);
      SessionStore.__emitChange();
      break;
    case "SIGN_IN_ERROR":
      SessionStore.setSignInErrors(payload.errors);
      SessionStore.__emitChange();
      break;
  }
};

module.exports = SessionStore;
