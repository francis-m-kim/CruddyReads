var ServerActions = require('../actions/server_actions');

module.exports = {
  addShelfAssignment: function(shelfAssignment) {
    $.ajax({
      method: 'POST',
      url: '/api/shelf_assignments/',
      data: {shelf_assignment: shelfAssignment},
      success: function(shelf) {
        
      }
    })
  },

  destroyShelfAssignment: function(shelfAssignment) {
    $.ajax({
      method: 'DELETE',
      url: '/api/find_and_destroy/',
      data: {shelf_assignment: shelfAssignment},
      success: function(shelf) {
        
      }
    })
  }

}
