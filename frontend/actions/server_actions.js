var AppDispatcher = require('../dispatcher/dispatcher');

var ServerActions = {

  receiveCurrentUser: function(user) {
    // debugger;
    AppDispatcher.dispatch({
      actionType: "LOGIN",
      user: user
    })
  },

  handleError: function(error) {
    AppDispatcher.dispatch({
      actionType: "ERROR",
      errors: error.responseJSON.errors
    })
  },

  removeCurrentUser: function(){
		AppDispatcher.dispatch({
			actionType: "LOGOUT",
		});
	}

};

module.exports = ServerActions;
