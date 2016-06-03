var React = require("react")
var ReactDOM = require("react-dom")

var SessionStore = require('./stores/session_store')
var CurrentUserState = require('./mixins/current_user_state');
var UserActions = require("./actions/user_actions");

var SignUpForm = require("./components/signup_form");
var LogInForm = require("./components/login_form");
var LogOutButton = require("./components/logout_button");

var BookMainPage = require("./components/book_main_page");


var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var IndexRoute = ReactRouter.IndexRoute;
var hashHistory = ReactRouter.hashHistory;
var Link = ReactRouter.Link



var LandingPage = React.createClass({

  mixins: [CurrentUserState],

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

          <LogOutButton/>

          <Link to="/books/1">Check out book 1!</Link>

        </div>
      </div>
    );
  }
});


var LoggedInAs = React.createClass({
  componentDidMount: function() {
    this.listener = SessionStore.addListener(this.handleChange)

  },
  handleChange: function() {
    this.setState({});
  },
  render: function() {
    if (SessionStore.isUserLoggedIn()) {
      return(<p>WELCOME {SessionStore.currentUser().username} </p>)
    } else {
      return (
        <div>Nobody Logged In.</div>
      );
    }
  }

});

var Router = (
  <Router history={hashHistory}>
    <Route path="/" component={LandingPage}>
      <Route path="nextpage" component={LoggedInAs}/>
    </Route>
    <Route path="books/:id" component={BookMainPage}/>

  </Router>
);


document.addEventListener("DOMContentLoaded", function() {
  ReactDOM.render(Router, document.getElementById("content"));
})


  // <Route path="nextpage" component={LoggedInAs}/>
