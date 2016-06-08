var React = require("react");
var UserActions = require("../actions/user_actions");
var hashHistory = require('react-router').hashHistory;
var CurrentUserState = require("../mixins/current_user_state");

var SignUpForm = React.createClass({
  mixins: [CurrentUserState],
  getInitialState: function() {
    return {username:"", email:"", password: ""};
  },

  updateUsername: function(event) {
    this.setState({username: event.target.value})
  },
  updateEmail: function(event) {
    this.setState({email: event.target.value})
  },
  updatePassword: function(event) {
    this.setState({password: event.target.value})
  },
  handleSubmit: function(event) {
    event.preventDefault();
    var user = {
      username: this.state.username,
      email: this.state.email,
      password: this.state.password
    }
    UserActions.signup(user, function() {
      hashHistory.push("users/" + this.state.currentUser.id);

    }.bind(this));
    this.setState({username:"", email:"", password: ""});

  },

  loginAsGuest: function(event) {
    event.preventDefault();
    var user = {
      email: "Guest",
      password: "password"
    }
    UserActions.login(user, function() {
      hashHistory.push("mycrud");

    }.bind(this));

  },

  render: function() {
    return (

      <div id="signup-form">
        <header>New here? Create a free account!</header>

        <form onSubmit={this.handleSubmit}>
          <input type="text" field="username" placeholder="Name"
            value={this.state.username}
            onChange={this.updateUsername}/>
          <input type="text" field="email" placeholder="Email Address"
            value={this.state.email}
            onChange={this.updateEmail}/>
          <input type="password" field="password" placeholder="Password"
            value={this.state.password}
            onChange={this.updatePassword}/>
          <input type="submit" value="Sign up"/>
        </form>
        <div onClick={this.loginAsGuest} className="guest">No time? Sign in as a guest!</div>
      </div>
    );
  }

});

module.exports = SignUpForm;
