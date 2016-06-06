var React = require('react');
var UserActions = require('../actions/user_actions');
var hashHistory = require('react-router').hashHistory;

var LogOutButton = React.createClass({
  logout: function() {
    UserActions.logout();
    hashHistory.push("/");
  },
  render: function() {
    return (
      <button id="log-out" onClick={this.logout}>Log out</button>
    );
  }

});

module.exports = LogOutButton;
