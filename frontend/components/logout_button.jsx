var React = require('react');
var UserActions = require('../actions/user_actions');

var LogOutButton = React.createClass({
  logout: function() {
    UserActions.logout();
  },
  render: function() {
    return (
      <button id="log-out" onClick={this.logout}>Log Out</button>
    );
  }

});

module.exports = LogOutButton;
