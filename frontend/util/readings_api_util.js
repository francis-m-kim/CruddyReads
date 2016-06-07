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
  },

  getReadingsByStatus: function(status) {
    $.ajax({
      url: "/api/readings_by_status",
      type: "GET",
      data: {status: status},
      success: function(readings) {
        
        ServerActions.receiveReadings(readings)
      },
      error: function(error) {
        ServerActions.handleError(error)
      }
    })
  }

}
