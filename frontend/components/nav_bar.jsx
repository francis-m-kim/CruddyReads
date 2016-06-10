var React = require('react');
var LogOutButton = require('./logout_button');
var ReactRouter = require('react-router');
var hashHistory = require('react-router').hashHistory;
var Link = ReactRouter.Link;
var CurrentUserState = require("../mixins/current_user_state");


var NavBar = React.createClass({
  mixins: [CurrentUserState],

  goTo: function(pathString) {
    hashHistory.push(pathString)
  },

  render: function() {
    var user = this.state.currentUser
    var mycrud = (user) ?
      <li className="hover-hand" onClick = {this.goTo.bind(this, "mycrud")}>My CRUD</li> :
        ""
    return (
      <nav className="main-nav group">
        <h1>CRUDDYREADS</h1>
        <ul className="links">
          {mycrud}
          <li className="hover-hand" onClick = {this.goTo.bind(this, "browse")}>Browse</li>
          <li className="hover-hand" onClick = {this.goTo.bind(this, "community")}>Community</li>
          <li className="hover-hand" onClick = {this.goTo.bind(this, "users/" + this.state.currentUser.id)}>
            {this.state.currentUser.username}
          </li>
        </ul>
        <LogOutButton/>
      </nav>
    );
  }

});

module.exports = NavBar;
