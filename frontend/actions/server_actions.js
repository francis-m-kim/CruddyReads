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
    debugger;
    AppDispatcher.dispatch({
      actionType: "ERROR",
      errors: error.responseJSON.errors
    })
  },

  removeCurrentUser: function(){
		AppDispatcher.dispatch({
			actionType: "LOGOUT",
		});
	},

  receiveBook: function(book) {

    AppDispatcher.dispatch({
      actionType: "RECEIVE_BOOK",
      book: book
    })
  },

};

module.exports = ServerActions;
