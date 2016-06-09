var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;

var SessionApiUtil = require('../util/session_api_util');
var CurrentUserState = require('../mixins/current_user_state');

var SignUpForm = require("./signup_form");
var LogInForm = require("./login_form");
var LogOutButton = require("./logout_button");


var LandingPage = React.createClass({

  mixins: [CurrentUserState],

  loginWithTwitter: function() {
    SessionApiUtil.loginWithTwitter(function(){
      hashHistory.push("mycrud");
    }.bind(this))
  },

  render: function() {

    return(
      <div id="landing-page">
        <div className="container">

          <nav className="group">
            <h1 id="crud">CRUDDYREADS</h1>
            <LogInForm/>
          </nav>

          <SignUpForm/>
          <a href="/auth/twitter/"> LOGIN WITH TWITTER </a>
        </div>
      </div>
    );
  }
});

module.exports = LandingPage;
