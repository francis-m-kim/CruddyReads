var React = require('react');
var ShelfAssignmentApiUtil = require('../util/shelf_assignment_api_util');



var AddToShelfButton = React.createClass({
  getInitialState: function() {
    var include = false;
    var reading = this.props.reading;
    this.props.shelf.books.forEach(function(book){
      if(book.reading_id === reading.reading_id) { include = true}
    })
    return {included: include}
  },

  createDestroy: function(event) {
    var create = !this.state.included;
    this.setState({included: create});
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
        <label>
          <div className="add-to-shelf group">
            <input className="add-to-shelf-box" type="checkbox" checked={this.state.included} onChange={this.createDestroy}/>
            <div className="shelf-name">{shelfName}</div>
          </div>
        </label>

      </li>
    );
  }

});

module.exports = AddToShelfButton;
