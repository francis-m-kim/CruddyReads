var React = require("react");
var ReactDOM = require("react-dom");

var SessionStore = require('./stores/session_store');
var CurrentUserState = require('./mixins/current_user_state');
var SessionApiUtil = require('./util/session_api_util');
// var UserActions = require("./actions/user_actions");

var SignUpForm = require("./components/signup_form");
var LogInForm = require("./components/login_form");
var LogOutButton = require("./components/logout_button");

var BookHomePage = require("./components/book_home_page");
var ReaderHomePage = require("./components/reader_home_page");
var LandingPage = require("./components/landing_page");
var UserShelvesPage = require("./components/user_shelves_page");
var BrowsePage = require("./components/browse_page");
var CommunityPage = require("./components/community_page");

var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var IndexRoute = ReactRouter.IndexRoute;
var hashHistory = ReactRouter.hashHistory;


var App = React.createClass({
  render: function() {
    return (
      <div>
        {this.props.children}
      </div>
    );
  }
});


function _ensureLoggedIn(nextState, replace, callback) {
  var redirectIfNotLoggedIn = function() {
    if (! SessionStore.isUserLoggedIn()) {
      replace("/");
    }
    callback();
  }

  if(SessionStore.currentUserHasBeenFetched()) {
    redirectIfNotLoggedIn();
  } else {
    SessionApiUtil.getCurrentUser(redirectIfNotLoggedIn);
  }
}


var Router = (
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={LandingPage}/>
      <Route path="users/:id" component={ReaderHomePage}/>
      <Route path="browse" component={BrowsePage}/>
      <Route path="community" component={CommunityPage}/>
      <Route path="books/:id" component={BookHomePage}/>
      <Route path="mycrud" component={UserShelvesPage} onEnter={_ensureLoggedIn}/>


    </Route>
  </Router>
);


document.addEventListener("DOMContentLoaded", function() {
  ReactDOM.render(Router, document.getElementById("content"));
})
