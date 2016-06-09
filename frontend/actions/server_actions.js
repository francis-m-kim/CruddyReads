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
  receiveReading: function(reading) {

    AppDispatcher.dispatch({
      actionType: "RECEIVE_READING",
      reading: reading
    })
  },

  receiveReader: function(reader) {
    AppDispatcher.dispatch({
      actionType: "RECEIVE_READER",
      reader: reader
    })

  },
  receiveReaders: function(readers) {
    AppDispatcher.dispatch({
      actionType: "RECEIVE_READERS",
      readers: readers
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
  },
  receiveShelfTitle: function(shelfTitle) {
    AppDispatcher.dispatch({
      actionType: "RECEIVE_SHELF_TITLE",
      shelfTitle: shelfTitle
    })
  }

};

module.exports = ServerActions;
