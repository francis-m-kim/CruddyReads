var React = require('react');
var UserActions = require('../actions/user_actions');
var hashHistory = require('react-router').hashHistory;
var LoginForm = require('./login_form');
var SessionStore = require('../stores/session_store');

var LogOutButton = React.createClass({
  isEmpty: function(obj) {
    for (var x in obj) { return false; }
    return true;
  },
  logout: function() {
    UserActions.logout();
    hashHistory.push("/");
  },
  render: function() {
    var user = SessionStore.currentUser();

    if (this.isEmpty(user) || user[0] == "Not logged in") {
      var show = <LoginForm/>
    } else {
      var show = (<button className="hover-hand" id="log-out" onClick={this.logout}>Log out</button>)
    }

    return (
      <div>
        {show}
      </div>
    );
  }

});

module.exports = LogOutButton;
