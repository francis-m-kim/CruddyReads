var AppDispatcher = require('../dispatcher/dispatcher');

var ServerActions = {

  receiveCurrentUser: function(user) {
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

  receiveReadings: function(readings) {

    AppDispatcher.dispatch({
      actionType: "RECEIVE_READINGS",
      readings: readings
    })
  },

  receiveReader: function(reader) {
    AppDispatcher.dispatch({
      actionType: "RECEIVE_READER",
      reader: reader
    })

  },

  receiveShelf: function(shelf) {

    AppDispatcher.dispatch({
      actionType: "RECEIVE_SHELF",
      shelf: shelf
    })
  },

  receiveShelves: function(shelves) {

    AppDispatcher.dispatch({
      actionType: "RECEIVE_SHELVES",
      shelves: shelves
    })
  }

};

module.exports = ServerActions;
