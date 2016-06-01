var React = require("react");
var UserActions = require("../actions/user_actions");
var hashHistory = require('react-router').hashHistory;
var CurrentUserState = require("../mixins/current_user_state");

// var update = function(target) {
//   var field = target.field
//   debugger;
//   this.setState({[field]: target.value});
// };

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
      hashHistory.push("nextpage");

    });
    this.setState({username:"", email:"", password: ""});

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
          <input type="submit" value="Sign Up"/>
        </form>
      </div>
    );
  }

});

module.exports = SignUpForm;
