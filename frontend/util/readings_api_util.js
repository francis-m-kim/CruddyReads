var ServerActions = require('../actions/server_actions')

module.exports = {
  addReading: function(reading) {
    $.ajax({
      url: "/api/readings",
      type: "POST",
      data: {reading: reading},
      success: function(reading) {
        ServerActions.receiveBook(reading)
      },
      error: function(error) {
        ServerActions.handleError(error)
      }
    })
  }

}
