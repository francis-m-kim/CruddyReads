var ServerActions = require('../actions/server_actions')

module.exports = {
  getShelves: function(userId) {
    $.ajax({
      url: "/api/users/" + userId + "/shelves",
      type: "GET",
      success: function(shelves) {
        ServerActions.receiveShelves(shelves)
      },
      error: function(error) {
        ServerActions.handleError(error)
      }
    })
  },
  addShelf: function(shelf) {
    $.ajax({
      url: "/api/shelves",
      type: "POST",
      data: {shelf: shelf},
      success: function(shelf) {
        ServerActions.receiveShelf(shelf)
      },
      error: function(error) {
        ServerActions.handleError(error)
      }
    })
  }
}
