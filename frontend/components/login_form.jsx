var React = require("react");
var UserActions = require("../actions/user_actions");
var hashHistory = require('react-router').hashHistory;
var CurrentUserState = require("../mixins/current_user_state");
var SessionStore = require('../stores/session_store');
var LoginErrorDisplay = require('./login_error_display');

var LoginForm = React.createClass({
  mixins: [CurrentUserState],
  getInitialState: function() {
    return {email:"", password: "", errors: []};
  },
  componentDidMount: function() {
    this.errorListener = SessionStore.addListener(this.handleErrors);
  },
  handleErrors: function() {
    this.setState( {errors: SessionStore.signInErrors()} )
  },

  componentWillUnmount: function () {
    this.errorListener.remove();
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
      email: this.state.email,
      password: this.state.password
    }
    UserActions.login(user, function() {
      hashHistory.push("mycrud");

    }.bind(this));
    this.setState({email:"", password: ""});

  },



  render: function() {
    var errors = (this.state.errors) ? <LoginErrorDisplay errors={this.state.errors}/> : ""
    return (
      <div id="login-form">
        <div className="float-form">
          <form onSubmit={this.handleSubmit}>
            <input type="text" placeholder="Email Address"
              value={this.state.email}
              onChange={this.updateEmail}/>
            <input type="password" placeholder="Password"
              value={this.state.password}
              onChange={this.updatePassword}/>
            <input className="login-button" type="submit" value="Sign in"/>
          </form>
        </div>

        {errors}
      </div>
    );
  }

});

module.exports = LoginForm;
