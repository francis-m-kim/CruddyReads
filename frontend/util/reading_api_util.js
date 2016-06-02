var ServerActions = require('../actions/server_actions')

module.exports = {
  addReading: function(reading) {
    // debugger;
    $.ajax({
      url: "/api/readings",
      type: "POST",
      data: {reading: reading},
      success: function(reading) {
        console.log("READING CREATED", reading);
      },
      error: function(error) {
        ServerActions.handleError(error)
      }
    })
  }
}
