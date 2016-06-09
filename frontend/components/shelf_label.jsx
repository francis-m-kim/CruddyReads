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
      <li onClick={this.changeShelf} className="shelf-label">
        {this.props.name}
        <button onClick={this.removeShelf}>DELETE THIS</button>
      </li>
    );
  }

});

module.exports = ShelfLabel;
