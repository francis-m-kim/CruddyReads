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
  receiveBooks: function(books) {

    AppDispatcher.dispatch({
      actionType: "RECEIVE_BOOKS",
      books: books
    })
  },

  receiveReader: function(reader) {
    AppDispatcher.dispatch({
      actionType: "RECEIVE_READER",
      reader: reader
    })

  }

};

module.exports = ServerActions;
