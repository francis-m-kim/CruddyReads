var React = require("react");
var UserActions = require("../actions/user_actions");
var hashHistory = require('react-router').hashHistory;
var CurrentUserState = require("../mixins/current_user_state");

var LoginForm = React.createClass({
  mixins: [CurrentUserState],
  getInitialState: function() {
    return {email:"", password: ""};
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

      hashHistory.push("nextpage");

    });
    this.setState({email:"", password: ""});

  },



  render: function() {
    return (
      <div id="login-form">
        <form onSubmit={this.handleSubmit}>
          <input type="text" field="email" placeholder="Email Address"
            value={this.state.email}
            onChange={this.updateEmail}/>
          <input type="password" field="password" placeholder="Password"
            value={this.state.password}
            onChange={this.updatePassword}/>
          <input type="submit" value="Sign in"/>
        </form>
      </div>
    );
  }

});

module.exports = LoginForm;
