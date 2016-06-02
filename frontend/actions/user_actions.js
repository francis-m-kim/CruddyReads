var SessionApiUtil = require('../util/session_api_util');

var UserActions = {

  signup: function(user, redirect) {
    SessionApiUtil.signup(user, redirect);
  },
  login: function(user) {
    SessionApiUtil.login(user)
  },
  logout: function(user) {
    SessionApiUtil.logout(user)
  },
  getCurrentUser: function() {
    SessionApiUtil.getCurrentUser();
  }
};

module.exports = UserActions;
