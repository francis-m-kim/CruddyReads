var React = require('react');

var ShelfLabel = React.createClass({

  render: function() {
    return (
      <li className="shelf-label">{this.props.name}</li>
    );
  }

});

module.exports = ShelfLabel;
