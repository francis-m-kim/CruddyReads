var React = require('react');
var ShelfItem = require('./shelf_item');

var SessionStore = require('../stores/session_store');
var BookApiUtil = require('../util/book_api_util');

var Shelf = React.createClass({
  componentWillReceiveProps: function(newProps) {
    // debugger;
    // ReaderApiUtil.getReader(newProps.params.id);
  },

  render: function() {
    var readings = this.props.readings;
    if (readings) {
      return (
        <div className="shelf-info">
          <h1>{this.props.shelfname}</h1>
          <ul>
            {
              readings.map(function(reading, i) {
                return <ShelfItem key={i} reading={reading}/>
              })
            }
          </ul>
        </div>
      );
    } else {
      return <div/>
    }
  }

});

module.exports = Shelf;


// return <li key={i}>{reading.title}</li>
