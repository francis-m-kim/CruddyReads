// import {React} from "react"
var React = require("react")
var ReactDOM = require("react-dom")


// var UserActions = require("./actions/user_actions");
// var UserConstants = require("./constants/user_constants");
// var SessionUtil = require("./util/session_api_util");
// var SessionStore = require("./stores/session_store");
var SignUpForm = require("./components/signup_form");
var CurrentUserState = require('./mixins/current_user_state');


var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var IndexRoute = ReactRouter.IndexRoute;
var hashHistory = ReactRouter.hashHistory;


var App = React.createClass({
  render: function() {
    return(
      <div>
        <header><h1>CRUDDY READS</h1></header>
        <SignUpForm/>
        {this.props.children}
      </div>
    );
  }
});

var Shit = React.createClass({
  mixins: [CurrentUserState],
  render: function() {
    debugger;
    if (this.state.currentUser) {
      return(<p>Logged in as {this.state.currentUser.name}</p>)
    };
    return (
      <div>SHIT</div>
    );
  }

});

var Router = (
  <Router history={hashHistory}>
    <Route path="/" component={App}/>
    <Route path="whereamI" component={Shit}/>
  </Router>
);


document.addEventListener("DOMContentLoaded", function() {
  ReactDOM.render(Router, document.getElementById("content"));
})
