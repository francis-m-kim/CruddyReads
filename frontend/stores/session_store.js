var AppDispatcher = require('../dispatcher/dispatcher.js');
var Store = require('flux/utils').Store;

var SessionStore = new Store(AppDispatcher);

var _currentUser = {}, _errors = {};
var _currentUserHasBeenFetched = false;



SessionStore.login = function(user) {
  _currentUser = user;
  _currentUserHasBeenFetched = true;
  _errors = null;
};


SessionStore.logout = function(){
  _currentUser = {};
  _errors = null;
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

SessionStore.errors = function(){
  if (_errors){
    return [].slice.call(_errors);
  }
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
    case "ERROR":
      SessionStore.setErrors(payload.errors);
      SessionStore.__emitChange();
      break;
  }
};

module.exports = SessionStore;
