var AppDispatcher = require('../dispatcher/dispatcher.js');
var Store = require('flux/utils').Store;

var SessionStore = new Store(AppDispatcher);

var _currentUser, _errors;




SessionStore.login = function(user) {
  _currentUser = user;
  _errors = null;
};

SessionStore.logout = function(){
  _currentUser = null;
  _errors = null;
};

SessionStore.currentUser = function(){
  if (_currentUser) {
  	return $.extend({}, _currentUser);
  }
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
      break;
    case "LOGOUT":
      SessionStore.logout();
      break;
    case "ERROR":
      SessionStore.setErrors(payload.errors);
      break;
  };
  SessionStore.__emitChange();
};

module.exports = SessionStore;
