var AppDispatcher = require('../dispatcher/dispatcher');
var ServerActions = require('../actions/server_actions');

module.exports = {
  signup: function(user, redirect) {

    $.ajax({
      url: "/api/users",
      type: "POST",
      data: {user: user},
      success: function(user) {

        ServerActions.receiveCurrentUser(user);
        redirect();
      },
      error: function(error) {
        ServerActions.handleSignUpError(error)
      }
    });
  },
  login: function(user, redirect) {
    $.ajax({
      url: "/api/session",
      type: "POST",
      data: {user: user},
      success: function(user) {

        ServerActions.receiveCurrentUser(user);
        redirect();
      },
      error: function(error) {

        ServerActions.handleSignInError(error)
      }
    });
  },
  loginWithTwitter: function(redirect) {
    $.ajax({
      url: "/auth/twitter",
      type: "GET",
      success: function(user) {
        ServerActions.receiveCurrentUser(user);
        redirect();
      },
      error: function(error) {
        ServerActions.handleError(error)
      }
    });
  },
  getCurrentUser: function(cb) {

		$.ajax({
			url: '/api/session',
			method: 'get',
			success: function(user) {
        ServerActions.receiveCurrentUser(user)
        cb && cb();
      },
			error: function(error) {
        ServerActions.handleError(error)
      }
		});
	},
  logout: function() {
    $.ajax({
      url: '/api/session',
      method: 'delete',
      success: ServerActions.removeCurrentUser,
      error: function(error) {
        ServerActions.handleError(error)
      }
    });
  }
};
