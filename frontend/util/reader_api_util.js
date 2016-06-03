var ServerActions = require('../actions/server_actions')

module.exports = {
  getReader: function(id) {
    $.ajax({
      method: 'GET',
      url: '/api/users/' + id,
			success: function(reader) {
        ServerActions.receiveReader(reader);
      },
			error: function(error) {
        ServerActions.handleError(error);
      }
    })
  }
};
