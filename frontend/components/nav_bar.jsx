var React = require('react');
var LogOutButton = require('./logout_button');
var ReactRouter = require('react-router');
var hashHistory = require('react-router').hashHistory;
var Link = ReactRouter.Link;
var CurrentUserState = require("../mixins/current_user_state");


var NavBar = React.createClass({
  mixins: [CurrentUserState],
  goToHome: function(event) {
    event.preventDefault;
    hashHistory.push("users/" + this.state.currentUser.id);
  },
  render: function() {
    return (
      <nav className="main-nav group">
        <h1>CRUDDYREADS</h1>
        <ul className="links">
          <li onClick = {this.goToHome}>My CRUD</li>
          <li>Browse</li>
          <li>Community</li>
        </ul>
        <input className="search" type="text" placeholder="Find CRUD"/>
        <ul className="buttons">
          <li>messages</li>
          <li>friends</li>
          <li>me</li>
        </ul>
        <LogOutButton/>
      </nav>
    );
  }

});

module.exports = NavBar;
