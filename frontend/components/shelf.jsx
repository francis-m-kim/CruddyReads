var React = require('react');

var Shelf = React.createClass({

  render: function() {
    var readings = this.props.readings;
    if (readings) {
      return (
        <div>
          <ul>
            {
              readings.map(function(reading, i) {
                return <li key={i}>{reading.title}</li>
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
