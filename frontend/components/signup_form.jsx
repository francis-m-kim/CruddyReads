var React = require("react");
var UserActions = require("../actions/user_actions");
var hashHistory = require('react-router').hashHistory;
var CurrentUserState = require("../mixins/current_user_state");
var SessionStore = require("../stores/session_store")
var ErrorDisplay = require('./error_display');

var SignUpForm = React.createClass({
  mixins: [CurrentUserState],
  getInitialState: function() {
    return {username:"", email:"", password: "", errors: []};
  },

  componentDidMount: function() {
    this.errorListener = SessionStore.addListener(this.handleErrors);
  },
  handleErrors: function() {
    this.setState( {errors: SessionStore.signUpErrors()} )
  },

  componentWillUnmount: function () {
    this.errorListener.remove();
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
      hashHistory.push("browse");

    }.bind(this));
    this.setState({username:"", email:"", password: ""});

  },

  loginAsGuest: function(event) {
    event.preventDefault();
    var user = {
      email: "guestaccount@crud.com",
      password: "password"
    }
    UserActions.login(user, function() {
      hashHistory.push("browse");

    }.bind(this));

  },

  render: function() {
    var errors = (this.state.errors) ? <ErrorDisplay errors={this.state.errors}/> : ""
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
          <div className="form-bottom group amatic size">
            <input type="submit" value="Sign up"/>
            <input type="submit" value="No time? Sign in as a guest!" onClick={this.loginAsGuest} id="guest"/>
            <a href="/auth/twitter/"> Or log in with Twitter<img src={window.twitter_icon}/></a>

          </div>
        </form>
        {errors}
      </div>
    );
  }

});

module.exports = SignUpForm;
