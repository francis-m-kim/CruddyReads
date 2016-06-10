var React = require('react');
var PropTypes = React.PropTypes;

var ErrorDisplay = React.createClass({

  render: function() {
    return (
      <div>
        <ul className="errors">
          {
            this.props.errors.map(function(error, i){
              return(<li className="error" key={i}>{error}</li>)
            })
          }

        </ul>
      </div>
    );
  }

});

module.exports = ErrorDisplay;
