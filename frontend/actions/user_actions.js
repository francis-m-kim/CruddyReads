var UserConstants = require('../constants/user_constants');
var SessionApiUtil = require('../util/session_api_util');
var SessionStore = require('../stores/session_store');
var AppDispatcher = require('../dispatcher/dispatcher');

var UserActions = {
  getCurrentUser: function() {
    SessionApiUtil.getCurrentUser(UserActions.receiveCurrentUser, UserActions.handleError);
  },

  signup: function(user) {
    SessionApiUtil.post({
      url: "/api/users",
      user: user,

      success: UserActions.receiveCurrentUser,
      error: UserActions.handleError
    });
  },

  login: function(user) {
    SessionApiUtil.post({
			url: "/api/session",
			user: user,
			success: UserActions.receiveCurrentUser,
			error: UserActions.handleError
		});
  },

  receiveCurrentUser: function(user) {
    // debugger;
    AppDispatcher.dispatch({
      actionType: UserConstants.LOGIN,
      user: user
    })
  },

  handleError: function(error) {
    debugger;
    AppDispatcher.dispatch({
      actionType: UserConstants.ERROR,
      errors: error.responseJSON.errors
    })
  },
  removeCurrentUser: function(){
		AppDispatcher.dispatch({
			actionType: UserConstants.LOGOUT,
		});
	},
	logout: function(){
		SessionApiUtil.logout(UserActions.removeCurrentUser, UserActions.handleError);
	},
  shout: function() {
    console.log("HELLO!");
  }
};

module.exports = UserActions;
