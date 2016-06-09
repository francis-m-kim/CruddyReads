var React = require('react');
var ShelfAssignmentApiUtil = require('../util/shelf_assignment_api_util');



var AddToShelfButton = React.createClass({
  getInitialState: function() {
    return {included: false}
  },

  createDestroy: function(event) {
    var create = !this.state.included;
    this.setState({included: create})
    var assignment = {
      reading_id: this.props.reading.reading_id,
      shelf_id: this.props.shelf.id
    }
    if (create) {
      ShelfAssignmentApiUtil.addShelfAssignment(assignment)
    } else {
      ShelfAssignmentApiUtil.destroyShelfAssignment(assignment)
    }
  },

  componentWillReceiveProps: function(newProps) {
    newProps.shelf.books.forEach(function(book){
      if(book.reading_id === newProps.reading.reading_id) {
        this.setState({included: true});
      }
    }.bind(this))
  },

  render: function() {
    var shelfName = this.props.shelf.name
    var reading = this.props.reading
    return (
      <li>
        <label >

          <input type="checkbox" checked={this.state.included} onChange={this.createDestroy}/>
          {shelfName}
        </label>

      </li>
    );
  }

});

module.exports = AddToShelfButton;
