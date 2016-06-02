var React = require("react")
var ReactDOM = require("react-dom")


var UserActions = require("./actions/user_actions");
// var UserConstants = require("./constants/user_constants");
// var SessionUtil = require("./util/session_api_util");
// var SessionStore = require("./stores/session_store");
var SignUpForm = require("./components/signup_form");
var LogInForm = require("./components/login_form");
var LogOutButton = require("./components/logout_button");
var CurrentUserState = require('./mixins/current_user_state');


var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var IndexRoute = ReactRouter.IndexRoute;
var hashHistory = ReactRouter.hashHistory;


var LandingPage = React.createClass({
  mixins: [CurrentUserState],
  componentDidMount: function() {
    UserActions.getCurrentUser();
  },
  render: function() {
    return(
      <div id="landing-page">
        <div className="container">
          <nav className="group">
            <h1>CRUDDYREADS</h1>
            <LogInForm/>
          </nav>

          <SignUpForm/>
          {this.props.children}
          <img src={window.booksImg}/>
          <LogOutButton/>
        </div>
      </div>
    );
  }
});

//
// LandingPage {
//   render: fhnction () {
//     return <Landing />
//
//    OR
//    return <UserLandingPage />
//   }
// }

var NextPageSPLAT = React.createClass({
  mixins: [CurrentUserState],
  render: function() {
    // debugger;
    if (this.state.currentUser) {
      return(<p>WELCOME {this.state.currentUser.username} </p>)
    };
    return (
      <div>Nobody logged in?</div>
    );
  }

});

var Router = (
  <Router history={hashHistory}>
    <Route path="/" component={LandingPage}>
      <Route path="nextpage" component={NextPageSPLAT}/>
    </Route>
  </Router>
);


document.addEventListener("DOMContentLoaded", function() {
  ReactDOM.render(Router, document.getElementById("content"));
  //
  // var img = document.createElement("img")
  // img.src = booksImg;
  // document.body.appendChild(img);
})
