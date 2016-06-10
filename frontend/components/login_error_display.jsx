var React = require('react');
var PropTypes = React.PropTypes;

var LoginErrorDisplay = React.createClass({

  render: function() {
    return (
      <div className="fix-position">
        <ul className="login-errors">
          {
            this.props.errors.map(function(error, i){
              return(<li className="login-error" key={i}>{error}</li>)
            })
          }

        </ul>
      </div>
    );
  }

});

module.exports = LoginErrorDisplay;
