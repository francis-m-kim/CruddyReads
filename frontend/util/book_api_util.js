var ServerActions = require('../actions/server_actions');

module.exports = {
  getBook: function(id) {
    $.ajax({
      method: 'GET',
      url: '/api/books/' + id,
			success: function(book) {
        ServerActions.receiveBook(book)
      },
			error: function(error) {
        ServerActions.handleError(error)
      }
    })
  },
  getAllBooks: function() {
    $.ajax({
      method: 'GET',
      url: '/api/books/',
			success: function(book) {
        ServerActions.receiveBooks(book)
      },
			error: function(error) {
        ServerActions.handleError(error)
      }
    })
  },
  getUserReadings: function(userId) {
    $.ajax({
      method: 'GET',
      url: '/api/users/' + userId + "/readings",
			success: function(readings) {
        ServerActions.receiveReadings(readings)
      },
			error: function(error) {
        ServerActions.handleError(error)
      }
    })
  }
};
