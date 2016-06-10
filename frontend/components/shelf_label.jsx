var React = require('react');
var ShelfApiUtil = require('../util/shelf_api_util');
var BookApiUtil = require('../util/book_api_util');
var SessionStore = require("../stores/session_store");
var ShelfStore = require("../stores/shelf_store");



var ShelfLabel = React.createClass({
  changeShelf: function() {
    ShelfApiUtil.getShelfReadings(this.props.shelfId);
    ShelfApiUtil.getShelfTitle(this.props.shelfId);
  },

  removeShelf: function(event) {
    event.preventDefault();
    ShelfApiUtil.removeShelf(this.props.shelfId);
    ShelfStore.flushTitle();

    ShelfStore.receiveShelfTitle("All Books");
    BookApiUtil.getUserReadings(SessionStore.currentUser().id);
  },
  render: function() {
    return (
      <li className="shelf-label">
        <div className="group">
          <div className="shelf-label-name hover-hand" onClick={this.changeShelf}> {this.props.name}</div>
          <button className="delete-shelf hover-hand" onClick={this.removeShelf}>✖</button>
        </div>
      </li>
    );
  }

});

module.exports = ShelfLabel;
