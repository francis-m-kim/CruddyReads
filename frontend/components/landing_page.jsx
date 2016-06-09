var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;

var CurrentUserState = require('../mixins/current_user_state');
var SignUpForm = require("./signup_form");
var LogInForm = require("./login_form");
var LogOutButton = require("./logout_button");


var LandingPage = React.createClass({

  mixins: [CurrentUserState],

  render: function() {

    return(
      <div id="landing-page">
        <div className="container">

          <nav className="group">
            <h1 id="crud">CRUDDYREADS</h1>
            <LogInForm/>
          </nav>

          <SignUpForm/>
          <Link to="/books/1">Check out book 1!</Link>
        </div>
      </div>
    );
  }
});

module.exports = LandingPage;
